import { NextApiRequest, NextApiResponse } from "next"
import { decryptCookie, encryptCookie, cookie } from "../../utilities/cookie"
import { serialize } from "cookie"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  let userFromCookie

  try {
    userFromCookie = await decryptCookie(req.cookies.auth)

    /* encrypted cookie details */
    const token = await encryptCookie(userFromCookie)

    /* reset cookie */
    await res.setHeader("Set-Cookie", serialize("auth", token, cookie))
  } catch (error) {
    /* if there's no valid auth cookie, user is not logged in */
    return res.json({ authorized: false, error })
  }

  /* send back response with user obj */
  return res.json({ authorized: true, user: userFromCookie })
}
