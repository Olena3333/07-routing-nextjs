NoteHub A multi-page note-taking app built with Next.js (App Router). Browse, search, create, delete, and view the
details of your notes, with SSR + CSR powered by TanStack Query.

Live demo: https://06-notehub-nextjs-ost1.vercel.app Repository: https://github.com/Olena3333/06-notehub-nextjs Tech
stack Next.js (App Router) TypeScript TanStack Query (React Query) Axios Formik + Yup for note creation CSS Modules
Routes Route Description / Home page with general information about the app. /notes Note list with search and note
creation (SSR prefetch + CSR hydration). /notes/[id] Details of a single note (SSR prefetch + CSR hydration). Project
structure app/ — routes, layouts, loading/error boundaries. components/ — shared, route-agnostic UI components, each in
its own folder with a .tsx and .module.css file. lib/api/ — Axios client and API request modules. types/ — shared
TypeScript types. Getting started Install dependencies:

npm install Create a .env file based on .env.example and set your NoteHub API token:

NEXT_PUBLIC_NOTEHUB_TOKEN=your_token_here Run the development server:

npm run dev Open http://localhost:3000 in your browser.

Scripts npm run dev — start the development server. npm run build — build the app for production. npm run start — start
the production server. npm run lint — run ESLint. npm run format — format the code with Prettier. npm run format:check —
check code formatting with Prettier.
