# Shatez frontend interview: Task2 (User Authentication with Google OAuth)

## Goal

The task is to implement user authentication using Google OAuth and Supabase or any other BAAS. The dashboard should be visible only to the logged in users.

### Implementation

- Created Google OAuth credentials through Google Developer Console
- Configured the Supabase Google Auth provider with Client Id and Secret from the Google Developer Console

#### ISSUE

Tried to implement the authentication feature using the new Next 13 App Router with the Supabase's Next.js Auth Helpers package which configures the Supabase Auth to store the user's session in a cookie, rather than browser's localstorage. This makes it available across the client and server of the App Router - Client Components, Server Components, Server Actions, Route Handlers and Middleware. The session is automatically sent along with any requests to Supabase.

The Authentication is perfectly working for when using Email and password to login a user. But it is not seemingly working for the Google OAuth.

This issue is solved in task3 part where Next Auth is used to handle the Google OAuth authentication.

### Approach

- Thoroughly reading the documentation
- Get the thorough explanation of the documentation through blog articles and youtube if and when necessary

## Assumption

- A Basic understanding of Next Js 13 with App Router and Supabase
- Familiarity with Typescript notation
