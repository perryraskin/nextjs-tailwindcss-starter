import { NextApiRequest, NextApiResponse } from "next"
import { magic } from "../../../utilities/magic"
import { encryptCookie, cookie } from "../../../utilities/cookie"
import { serialize } from "cookie"
import prisma from "../../../middleware/prismaClient"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body)
  const { firstName, lastName, imageUrl } = body
  console.log(firstName, lastName, imageUrl)
  try {
    /* strip token from Authorization header */
    let DIDT = magic.utils.parseAuthorizationHeader(req.headers.authorization)

    /* validate token to ensure request came from the issuer */
    await magic.token.validate(DIDT)

    /* decode token to get claim obj with data */
    let claim = magic.token.decode(DIDT)[1]
    console.log("claim:", claim)

    /* get user data from Magic */
    const userMetadata = await magic.users.getMetadataByIssuer(claim.iss)
    // console.log("userMetadata", userMetadata)
    const { email, issuer, publicAddress } = userMetadata
    console.log("userMetadata:", userMetadata)

    /* check if user is already in */
    // const existingUser = await prisma.user.findUnique({
    //   where: {
    //     issuer: claim.iss,
    //   },
    // })

    let userId = 0
    // /* Create new user if doesn't exist */
    // if (!existingUser) {
    //   const newUser = await prisma.user.create({
    //     data: {
    //       firstName,
    //       lastName,
    //       imageUrl,
    //       email,
    //       issuer,
    //     },
    //   })

    //   const newCustomer = await prisma.customer.create({
    //     data: {
    //       userId: newUser.id,
    //       stripeCustomerId: "temp",
    //     },
    //   })

    //   userId = newUser.id
    // } else {
    //   userId = existingUser.id
    // }

    const userInfo = {
      id: userId,
      firstName,
      lastName,
      imageUrl,
      email,
      issuer,
      publicAddress,
    }

    console.log("userInfo", userInfo)
    /* encrypted cookie details */
    const token = await encryptCookie(userInfo)

    /* set cookie */
    await res.setHeader("Set-Cookie", serialize("auth", token, cookie))

    /* send back response with user obj */
    return res.json({ authorized: true, user: userInfo })

    // res.status(201)
    // res.json({ newUser })
  } catch (err) {
    res.status(500)
    res.json({ error: err.message })
    console.error(err.message, err.data ? err.data : "")
  }
}
