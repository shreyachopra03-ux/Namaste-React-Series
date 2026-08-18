# Namaste React 🚀

**Sandburgs** - a Swiggy-inspired food delivery web app built while following the Namaste React course, and used as a playground for practicing modern React concepts, Redux Toolkit, routing, and testing.

## Tech Stack

- **React 19** + **React DOM** - UI library
- **TypeScript** - type safety
- **Parcel** - zero-config dev server & bundler (HMR, code splitting, tree shaking, image optimization)
- **Babel** - JSX/TS transpilation
- **React Router DOM** - client-side routing
- **Redux Toolkit** + **React Redux** - global state management (cart)
- **Tailwind CSS** - utility-first styling
- **Jest** + **React Testing Library** - unit & integration testing
- **lucide-react** / **react-icons** - icons

## Features

- Dynamic, config-driven restaurant listing fetched from an API
- Search and category-based filtering of restaurants
- Restaurant menu page with expandable/collapsible categories (accordion)
- Add to cart / clear cart with Redux Toolkit (slices, actions, selectors)
- Client-side routing with nested routes (`Outlet`) for a shared Header/Footer layout
- Online/offline status detection via a custom hook
- User Context for global user data (functional + class component consumers)
- Lazy loading with `React.lazy` and `Suspense` for route-based code splitting
- Class-based component with full lifecycle methods (mount/update/unmount)
- Unit and integration tests with Jest + React Testing Library

## Project Structure

```
src/
├── components/          # All React components (Header, Body, Cart, RestaurantMenu, etc.)
│   ├── __tests__/       # Jest test files
│   └── mocks/           # Mock data used in tests
├── slices/               # Redux Toolkit slices (e.g. cartSlice)
├── utils/                # Custom hooks, constants, Redux store, context, types
├── assets/               # Static assets (images, icons)
├── App.tsx               # Root component
└── index.css             # Tailwind entry / global styles
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server (Parcel):

```bash
npm start
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test          # run once
npm run watch-test  # re-run on file changes
```

## Notes

Personal learning notes from this course (React fundamentals, hooks, Redux Toolkit, routing, testing, Tailwind, etc.) are documented in [src/REVISION_NOTES.md](src/REVISION_NOTES.md).
