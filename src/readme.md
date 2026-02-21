# Welcome to The social media app HEX & Chill

A mystical social media platform where users can share spells, follow other witches and interact through comments.

Built as a **Single Page Application(SPA)** using Noroffs API.

## Link to live demo :

[Live demo:](https://groanita.github.io/JS2_CA/)

## Features

### Authentication

- User registration and log in
- Secure token based authentication
- Protected actions for logged in users.

### Posts

- Create, edit and delete your own posts.
- Add images with a safe media URLs.
- Display posts in feed and as a single view.

### Comments

- Add comments to posts
- Instand DOM update without refreshing
- Real time UI feedback.

### Profiles and Following

- View user profiles.
- Follow and unfollow users.
- Sidebar displays followed users (known as Familiars)
- Can also see ALL the familiars you follow from sidemenu.

### Search

- Live search Overlay.
- Client side filtering of posts.
- Overlay will close on navigation.

### UI and UX

- SPA router navigation
- Responsive layout
- Fantasy Theme.

### Tech Stack

**FrontEnd**

- HTML
- Tailwind CSS
- Vanilla JavaScript

**Architecture**

- SPA Router
- Modular Component structure.
- Event driven UI updating.
- State management via modules.

**API**

- Noroff Social API
- Bearer token authentication

**Tooling**

- Vite
- .env
- github

### Architecture Overview

main.js
|
↓
router.js -> renders layout and views
|
↓
init functions -> attaches event handlers
|
↓
Services -> API communication
|
↓
State -> auth and follow state

### Project structure

src/
|
|-- components/ -> UI components(header, sidebars, modals)
|
|-- views/ -> Page views
|
|-- initialize/ -> init functions (attach logics)
|
|-- services/ -> API requests
|
|-- state/ -> auth and follow state
|
|-- utils/ -> validation and helpers
|
|-- ui/ -> UI logic (toasts and handlers)
|
|-- router/ -> SPA router
|
|-- main.js -> App entry point

### Getting Started!

**Clone repo**

1. git clone https://github.com/GroAnita/JS2_CA
   cd hex-and-chill

**Install Dependencies** 2. npm install

**Add .env** 3. VITE_NOROFF_API_KEY= your_api_key_here

**Run dev server** 4. npm run dev

### API usage

This project uses the Noroff social API
Authentication requires:

- Bearer Token
- API key header

ex:
authorization: Bearer <token>
X-Noroff-API-Key: <key>

### Validation and Security

✔ Password strength validation
✔ Email validation
✔ safe image URL filtering
✔ Protection agains unsafe media sources

Allowed image hosts:

✔ Unsplash
✔ Pixabay
✔ Imgur
✔ Pexels

### My Learning Goals

- SPA architecture
- Modular JS design
- API integration and authentication
- State management without using frameworks
- Event driven UI updates
- Accessibility and UX considerations

### Known Issues

✔ Search is using client side filtering due to API limitations
✔ Sidebar show up to 6 followers at a time.(rest can be seen in view from familiars button in sidenav.)

### Future improvements I would like to implement

✔ Reaction system for like and so on
✔ Infinite scroll news feed
✔ Websocket live updates
✔ emojis

### Author of project

**Gro Anita Bråthen**
FrontEnd Development Student at Noroff

### License

This project was created for educational purposes at Noroff

### If you like this project

Feel free to fork, explore and build upon it
