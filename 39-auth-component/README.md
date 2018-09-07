![cf](http://i.imgur.com/7v5ASc8.png) Authenticated Full Stack Applications
===

## Learning Objectives
* Students will be able integrate back-end authorization controls using Express and Mongoose
* Students will be able integrate front-end authorization controls using React
* Students will be able to completely manage a login/logout process using React

## Application Flow and Access Control

* Applications of all types have varying degrees of access based on user type and UI requirements.

A CMS might ...
* Allow **admin** users to create categories, content, manage user accounts, and run reports
* Allow **editor** users to create, edit and delete existing content, but not see or manage user accounts
* Allow **guest** users to access (read) content
* Allow **user** users (logged in users) to access (read) content and apply a thumbs-up/down to content, but not change the actual content

Each of these constraints will have to be handled on both the backend and the front end of your application stack.

### Back End (API Layer)
* Manage the login cycle with the front-end application
* Maintain the User's database
* Maintain roles for each user
* Authenticate users (basic and bearer)
* Create, manage, and apply Role Based Access Controls
* Maintain and reference their capabilities, based on their role
* Restrict access to features (like routes) based on capabilities
  * Express Middleware could be used to restrict access to routes
  * Mongoose Middleware/Hooks could be use to restrict access to business logic
  
### Front End (Client Layer)
* Initiate the login process
* Store login tokens as cookies
* Manage login state, capabilities 
* Control physical & visual access (hide/show/alter) to components based on RBAC rules
* Alter behaviors based on RBAC rules
