## Architecture and Technologies Used

This project is built with Next.js, leveraging Server Actions and Server-Side Rendering (SSR) to take advantage of their performance benefits for API calls and rendering.

Server Actions: Used to handle API calls (user, transfers/contacts) directly on the server.

Zustand: Used for state management, enabling a clean and scalable approach. Two stores were created:

- A transfer store with selectors to manage transfer-related data.
- A user store to handle user-specific information and ensure that the architecture remains scalable.

Routing & Project Structure:
Routing is handled using Next.js App Router, taking advantage of its file-based routing

The core project structure is organized into the following folders:

- screens/: Contains the main pages or views of the app.
- shared/: Holds reusable UI components used across the application.
- layout/: Includes layout elements such as the Header and Footer, which are consistently used throughout the app.

This structure helps keep the codebase modular, organized, and easy to scale as the project grows.

Tailwind CSS: Used for styling and the development of custom shared components.

This setup was designed with scalability in mind, making it easy to extend the project with additional features and functionality in the future.

## Installation Instructions

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
# or
yarn install
```

(Optional) Set up environment variables:
Create a .env.local file and set the API_BASE_URL variable, as shown in the .env.example file.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.
