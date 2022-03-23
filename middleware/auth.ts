import { NextApiRequest, NextApiResponse } from "next"
import { decryptCookie } from "../utilities/cookie"
import prisma from "../middleware/prismaClient"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req

  let userFromCookie
  try {
    /* extract user from cookie */
    try {
      userFromCookie = await decryptCookie(req.cookies.auth)
    } catch (error) {
      console.log("User not found")
      return { id: 0 }
    }

    /* check if user is already in */
    const existingUser = await prisma.user.findUnique({
      where: {
        issuer: userFromCookie.issuer,
      },
    })

    if (!existingUser) {
      console.log("User not found")
      return { id: 0 }
      // res.status(400)
      // res.json({ message: "User not found" })
    }

    /* send back response with user obj */
    return existingUser
  } catch (error) {
    /* if there's no valid auth cookie, user is not logged in */
    console.log("No valid auth cookie")
    console.log("Error: ", error)
    return { id: 0 }
    // return res.status(401).json({ authorized: false, message: "Not logged in" })
  }
}
