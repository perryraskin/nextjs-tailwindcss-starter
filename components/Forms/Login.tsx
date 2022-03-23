import { useContext, useState } from "react"
import { MagicContext } from "../Store"

const Login = () => {
  const [magic] = useContext(MagicContext)

  const handleLogin = async () => {
    // Start the Google OAuth 2.0 flow!
    const didToken = await magic.oauth.loginWithRedirect({
      provider: "google",
      redirectURI: `${window.location.origin}/callback`,
    })
  }

  return (
    <div className="sm:w-1/3 md:w-1/4 sm:ml-auto sm:mr-auto p-2 mb-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Continue with</span>
        </div>
      </div>

      <div className="mt-6">
        <a
          href="#"
          onClick={handleLogin}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Google</span>
          {/* <img
                  className="w-24 p-1"
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                ></img> */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"></img>
        </a>
      </div>
    </div>
  )
}

export default Login
