import React from "react"
import { NextPage } from "next"
import Router from "next/router"
import withLayout from "../../hocs/withLayout"
import { MagicContext, LoggedInContext, LoadingContext } from "../Store"

import Section from "../Layout/Section"
import Button from "../Elements/Button"
import Login from "../Forms/Login"

interface Props {}

const Home: NextPage<Props> = ({}) => {
  const [loggedIn, setLoggedIn] = React.useContext(LoggedInContext)
  const [isLoading, setIsLoading] = React.useContext(LoadingContext)

  if (isLoading) {
    return (
      <Section>
        <img
          className="ml-auto mr-auto block rounded-3xl text-center"
          width="350"
          // src="https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
          src="https://jamesandharrisoncourt.com/walkthrough/images/loading.gif"
        ></img>
      </Section>
    )
  } else {
    return (
      <div className="text-center">
        <h1 className="mb-6 text-2xl font-semibold">
          Next.js TailwindCSS Starter
        </h1>
        <p>A super simple boilerplate for your Next.js web app.</p>
        <div>
          <h3 className="mt-2 mb-2 text-xl font-semibold">Features:</h3>
          <ul>
            <li>
              <a
                className="text-blue-500 underline"
                href="https://reactjs.org/docs/hooks-intro.html"
                target="_blank"
              >
                React Hooks
              </a>
            </li>
            <li>
              <a
                className="text-blue-500 underline"
                href="https://www.typescriptlang.org/"
                target="_blank"
              >
                TypeScript
              </a>
            </li>
            <li>
              <a
                className="text-blue-500 underline"
                href="https://tailwindcss.com/"
                target="_blank"
              >
                Tailwind CSS
              </a>{" "}
              for the UI
            </li>
            <li>
              <a
                className="text-blue-500 underline"
                href="https://www.prisma.io/"
                target="_blank"
              >
                Prisma
              </a>{" "}
              for the database
            </li>
            <li>
              <a
                className="text-blue-500 underline"
                href="https://magic.link/"
                target="_blank"
              >
                Magic
              </a>{" "}
              for Google authentication
            </li>
          </ul>
        </div>
        <a
          href="https://github.com/perryraskin/nextjs-tailwindcss-starter"
          target="_blank"
        >
          <Button
            text="Get Source Code"
            extend="bg-blue-600 hover:bg-blue-500 text-white"
          />
        </a>
        {!loggedIn ? (
          <Login />
        ) : (
          <p className="mb-8">
            You are logged in as <b>{loggedIn.email}</b>!
          </p>
        )}
      </div>
    )
  }
}

export default withLayout(Home)
