import React from "react"
import { NextPage } from "next"
import Router from "next/router"
import withLayout from "../../hocs/withLayout"
import utilities from "../../utilities"

import Button from "../Elements/Button"

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <div className="text-center">
      <h1>Next.js TailwindCSS Starter</h1>
      <p>A super simple boilerplate for your Next.js web app</p>
      <a
        href="https://github.com/perryraskin/nextjs-tailwindcss-starter"
        target="_blank"
      >
        <Button
          text="Get Source Code"
          extend="bg-blue-600 hover:bg-blue-500 text-white"
        />
      </a>
    </div>
  )
}

export default withLayout(Home)
