# Shatez frontend interview: About this project

This is a boilerplate frontend project intended to have feature based task lists for Shatez frontend interviews. It is built with Next.js, TypeScript, and TailwindCSS.

Poentially to be deployed with Vercel & Integrated with a BAAS solution either Firebase or Supabase

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Feature based task lists

### `Feature Task-1: Easy`

-   Refactor the `Dashboard` page into more smaller & reuseable components components
-   `What we'll evaluate` : How you write, organize & structure your code for building maintainable & scalable applications

### `Feature Task-2: Medium`

-   Refactor the `Home/Index` by adding authentication (with Google OAuth) with a BAAS (Backend As A Service) solution like Firebase or Supabase, whichever you're comfortable with.
-   Make the Dashboard page visible only when a user is logged in.
-   You'd have to connect to a DB to persist user data at this point, you can use Firestore from Firebase or Postgres from Supabase for this.
-   Bonus points for using Supabase since its open source wihtout vendor lock-in
-   `Explanation`: `Authentication` is the process of verifying who a user is, while `Authorization` is the process of verifying what they have access to.
-   ` What we'll evaluate` : What kind of code & best-practice you follow for adding something standard like authentication to an application, how you organize & structure your Data, How you deal with Data flow & How can you build solutions from reading documentation

### `Feature Task-3: Hard`

-   Refactor the `Dashboard` page and add `Authorization` to the side-navigation items of the Dashboad page.
-   Further Explanation: - Whenever a user signs-up, we create a new user record in the DB, and assign them a `role` of `user` by default. - We can then create a new `role` of `admin` and assign it to a user manually from the DB. - We can then use this `role` to determine what a user can access or not and use this information to hide or show the side-navigation items.
    -   Assumptions:
        -   Only `Reports` will be visible to `users` while everything will be visible to `admins`
    -   ` What we'll evaluate` : How you solve an application level problem, how you organize & structure your Data, how your solution would scale as the application grows & more users are added.

## How to submit your solutions

-   Fork this repository
-   Create a feature branch while working on your solution. For example, if you're working on `Feature Task-1: Easy`, you can create a branch called `feature/task-1`
-   Once you're done, create a pull request to the `main` branch of the repository & Merge it. Don't delete the feature branch on merge.
-   Make sure its a private and invite `abinhossain@shatez.com` for evaluation.

---

### External Resources

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

---

### How to Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
