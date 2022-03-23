# Next.js & Tailwind CSS Starter

A super simple boilerplate for your Next.js web app built with TypeScript, NextJS, React, and TailwindCSS.

## Technologies

- [React Hooks](https://reactjs.org/docs/hooks-intro.html) instead of React.Component to create stateful components
- [TypeScript](https://www.typescriptlang.org/) static types for Component Props, Actions & Services
- [Tailwind CSS](https://tailwindcss.com/) for the UI
- [Prisma](https://www.prisma.io/) for the database
- [Magic](https://magic.link/) for Google authentication
- [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/) to lint and format the source code.

Hit the **Star** button if you love this project ⭐️

## Usage

### Prisma

[Connect your database](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgres) and update your `.env` file within the `prisma` directory.

### Magic

Rename the `.env.example` file to `.env`. Then, [Sign up for Magic](https://dashboard.magic.link/signup) and fill in your `MAGIC_PUBLIC_KEY` and `MAGIC_PRIVATE_KEY`.

### Running Locally

Install dependencies

```
npm install
```

For development

```
npm run dev
```

For production

```
npm run build
npm start
```
