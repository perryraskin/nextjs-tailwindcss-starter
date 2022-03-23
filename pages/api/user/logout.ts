import { NextApiRequest, NextApiResponse } from "next"
import { magic } from "../../../utilities/magic"
import { cookie, decryptCookie } from "../../../utilities/cookie"
import { serialize } from "cookie"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  let userFromCookie
  try {
    /* replace current auth cookie with an expired one */
    res.setHeader(
      "Set-Cookie",
      serialize("auth", "", {
        ...cookie,
        expires: new Date(Date.now() - 1),
      })
    )

    userFromCookie = await decryptCookie(req.cookies.auth)

    /* log use out of Magic */
    await magic.users.logoutByToken(userFromCookie.publicAddress)

    return res.json({ authorized: false })
  } catch (error) {
    /* if there's no valid auth cookie, user is not logged in */
    return res.json({ authorized: false, error })
  }
}
