# Hex & Chill — Social Media App

A mystical social media platform where users can share spells, follow other witches and interact through comments.

Built as a **Single Page Application (SPA)** using the Noroff API.

## Live Demo

[View live demo](https://groanita.github.io/JS2_CA/)

## Features

### Authentication

- User registration and login
- Secure token-based authentication
- Protected actions for logged-in users

### Posts

- Create, edit and delete your own posts
- Add images with safe media URLs
- Display posts in a feed and as a single view

### Comments

- Add comments to posts
- Instant DOM update without refreshing
- Real-time UI feedback

### Profiles and Following

- View user profiles
- Follow and unfollow users
- Sidebar displays followed users (known as Familiars)
- View all Familiars from the Familiars button in the side menu

### Search

- Live search overlay
- Client-side filtering of posts
- Overlay closes on navigation

### UI and UX

- SPA router navigation
- Responsive layout
- Fantasy theme

## Tech Stack

### Front End

- HTML
- Tailwind CSS
- Vanilla JavaScript

### Architecture

- SPA Router
- Modular component structure
- Event-driven UI updating
- State management via modules

### API

- Noroff Social API
- Bearer token authentication

### Tooling

- Vite
- `.env` for environment variables
- GitHub Actions for deployment

## Architecture Overview

```

main.js
|
↓
router.js → renders layout and views
|
↓
init functions → attaches event handlers
|
↓
services → API communication
|
↓
state → auth and follow state

## Project Structure

src/
├── components/ → UI components (header, sidebars, modals)
├── views/ → Page views
├── initialize/ → Init functions (attach logic)
├── services/ → API requests
├── state/ → Auth and follow state
├── utils/ → Validation and helpers
├── ui/ → UI logic (toasts, handlers)
├── router/ → SPA router
└── main.js → App entry point

```

## Getting Started

✅**Clone the repo**

```bash
git clone https://github.com/GroAnita/JS2_CA
cd JS2_CA
```

✅**Install dependencies**

```bash
npm install
```

✅**Add `.env`**

VITE_NOROFF_API_KEY=your_api_key_here

✅**Run dev server**

```bash
npm run dev
```

## API Usage

This project uses the Noroff Social API. Authentication requires:

- Bearer token
- API key header

Example:

Authorization: Bearer token
X-Noroff-API-Key: key

## Validation and Security

- ✔ Password strength validation
- ✔ Email validation
- ✔ Safe image URL filtering
- ✔ Protection against unsafe media sources

**Allowed image hosts:**

- ✔ Unsplash
- ✔ Pixabay
- ✔ Imgur
- ✔ Pexels

## Learning Goals

- SPA architecture
- Modular JS design
- API integration and authentication
- State management without frameworks
- Event-driven UI updates
- Accessibility and UX considerations

## Known Issues

- Search uses client-side filtering due to API limitations
- Sidebar shows up to 6 Familiars at a time (the rest can be seen via the Familiars button in the side menu)

## Future Improvements

- Reaction system (likes etc.)
- Infinite scroll news feed
- WebSocket live updates
- Emoji support

## Author

**Gro Anita Bråthen**  
Front-End Development Student at Noroff

## License

This project was created for educational purposes at Noroff.

## Contributing

Feel free to fork, explore and build upon it.
