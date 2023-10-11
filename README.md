# Shatez frontend interview: Task3 (User Authentication and Authorization)

## Goal

The task is to refactor the Dashboard to implement user authorization to Sidebar Navigation panel. Only the user with "admin" role will get the full access to navigation panel and default users (with a user role of "user") will get access to only certain part of the navigation panel

### Refactoring the Dashboard

This part was already done as a part of Task One. The Dashboard was divided into three main components, which can be re-used easily if necessary. Sidebar, Topbar and the Main area. The Sidebar nav data is coming from an external data.js file so that we can feed the data to different components when and if necessary.

### User Authentication and Authorization

For user authentication NextAuth.js is used for Google OAuth. Prisma is used for data modelling connecting with Supabase. These particular services was used because they provide the overall best solutions for this case with their simplified integration with Next Js application

The process is as follows,

- When an user sign in through Google, a default role of "user" is assigned to them.
- To set a particular user "admin" role, it was required to change the role manually in the datadase

The authorization logic is as follows,

- In the SidebarNavs component the navigation data is mapped and shown in the dashboard.
- Just before that a filtered method is used to filter out the navigation items based on the user role
- If an user is a "user", they will be shown the filtered Navigation
- if an user is a "admin", they will be granted the full navigation

#### Issue

From the current authorization implementation an user is authorized to see the selected navigation elements. But any particular user has access to the full application if he/she knows the url routes. To prevent that we can authorized an user in the middleware where we can set the user to only access particular routes

### Why this approach

This approach was taken to ensure the code flexibility and maintainablity. By using the filter login based on user role right in the Sidebar Nav components it is ensured that none of the other parts are affcted if there is an error. Also it will be very easy to add/remove navigation links based on the user roles

## Assumption

At the moment it is assumed that users can either be "user" or "admin".
