# Project Undisclosed

![Team Logo](https://i.imgur.com/rj6bNES.png)

## LoS FoUr AmIgOs 
* Nehemias C.
* Matthew C.
* Rafael C. - El Embajador de la nacion de Git (aka Git Daddy)
* Raul J.

## Project Description
**Undisclosed** is a web app that, through member generated content, allows members, or as we like to call them _Authors_, view all of the hidden gems throughout their city. With a focus on urban environments, authors are able to post weblogs of their favorite city locations. They will be able to share what makes it so special for them; and in kind learn from other authors about the many other gems hidden away in plain sight. Authors will be able to comment on each other's posts; as well as save some of their favorites! It is our hope that the more we can learn about our city, the more we will love it, and the greater the care we will exhibit in her preservation.

## Risks and Mitigants

### Risk
  * **Many Moving Pieces**: This app will require users to register/log-in in order to navigate through the site. On the back-end, we will require authentication on each api call. That is, the credentials provided will be compared to those on file in the database. On the front-end,authentication will be required to make posts, edit posts, and delete posts. The authentication process, along with creating a full CRUD web app, has many moving parts and it is easy to miss a few steps along the way.

### Mitigant
  * We will work as a team until we complete and finalize the backend portion together. This will ensure we do not miss any steps and understand how to reach each of the endpoints necessary on the front end. While working on the frontend, although spliting react components, we will verify each git merge request is unanimously approved by the team. This will ensure accuracy, and allow each member to understand what the greater team is working on.

## MVP
In order to meet MVP, we will build the following:

### 1 ) A RESTful JSON API, which includes:

 * An Express.JS server exposing RESTful JSON endpoints
 * A PostgreSQL database with at least three tables:
   * 1 user table and at least two others; at least 1 pair of associated tables (one to many, many to many, etc.)
 * A server that will use Sequelize to define models for interacting with the database
 * The implementation of auth using bcrypt and json web token
 * Generic controller actions (Index, Show, Create, Update, Delete) between the two non-user models
 * Express Router to organize our route endpoints

### 2 ) A front-end that consumes our own API, as well as:
 * Permit the user to register, login, and send authenticated requests
 * Permit the user to perform Create, Update, and Delete actions when logged in
 * Layout and style front-end with clean & well-formatted CSS
 * Use React Router for client side routing

 ## Post-MVP
In the post-MVP lifecycle, we will do our best to include some of the following:

 * Increased funcationaly, such as a favorites button that allows users to store their favorite weblogs into local storage
 * Increased styling, animations/transition, hover effects, and media queires
 * Include styling libraries or npm packages
 * Include a _likes_ table in order to rank weblogs


## Entity Relationship Diagram (ERD)
![ERD](https://i.imgur.com/GyGST3w.png)


## API Endpoint Documentations

[TBU]-[List of each server's routes, the structure of requests that you expect and the structure of responses they send]

## Wireframe

![Wire-frame](https://i.imgur.com/AV2qLf4.png)


## Component Heirarchy

* < Welcome />
* < LogIn />
* < Register />
* < AllBlogs />
* < SpecificBlog />
* < Comment />
* < PersonalProfile />
  * < CreateForm />
  * < EditForm />
  * < PersonalBlogList />
  * < PersonalBlogs />


## Dependencies

TBU - [3rd party APIs, libraries, linter, etc]

## Special Thanks