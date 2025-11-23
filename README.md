# 🎬 Trending Movies Web App

An **IMDB-style trending movies web app** built with **React + Vite**.  
Browse trending movies, view details, and manage your personal watchlist — all in a fast, responsive single-page application.

🌐 **Live Demo:** https://trendingmoviies.netlify.app/

---

## ✨ Features

- 🔥 **Trending Movies Feed**
  - Displays a list of currently trending movies.
  - Each movie card shows the title and other basic details.
- 📌 **Watchlist**
  - Add/remove movies to your own watchlist.
  - Watchlist is stored in the browser (no backend required).
- 🧭 **Simple Navigation**
  - `Home` – browse trending movies.
  - `Watchlist` – view only the movies you’ve saved.
- ⚡ **Fast & Modern Stack**
  - Built with **React + Vite** for instant dev server and HMR.
- 📱 **Responsive UI**
  - Works on desktop and mobile.
- 🧹 **Clean Codebase**
  - ESLint configuration for consistent code style.
  - Tailwind/PostCSS config for scalable styling.

---

## 🛠 Tech Stack

- **Frontend:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Language:** JavaScript (ES6+)
- **Tooling:**
  - ESLint
  - PostCSS
  - Vite Dev Server

---

## 📂 Project Structure

High-level structure of the repository:

```bash
.
├── dist/               # Production build output
├── public/             # Static assets
├── src/                # Application source code (React components, logic, styles)
├── index.html          # Entry HTML file
├── package.json        # Project dependencies & scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```
Follow these steps to run the project locally.

1. Clone the Repository
git clone https://github.com/purakh/Trending_Movies_WebApp.git
cd Trending_Movies_WebApp
2. Install Dependencies

Using npm: npm install

3. Run the Development Server: npm run dev

This starts the Vite dev server.
Open the URL shown in the terminal (usually http://localhost:5173).

4. Build for Production: npm run build

The optimized build will be output to the dist/ folder.

5. Preview the Production Build (Optional): npm run preview

⚙️ Environment / APIs

If you are using an external movie API (for example, a public movie database):

Create an .env file in the project root.

Add your API-related environment variables (for example):

VITE_MOVIE_API_BASE_URL=<your_api_base_url>
VITE_MOVIE_API_KEY=<your_api_key>

Use import.meta.env.VITE_MOVIE_API_KEY etc. in your React code.

If your current version doesn’t use an external API yet, you can skip this step.

📦 Available npm Scripts

Commonly used scripts (check package.json for the exact list):

npm run dev – Start the development server.

npm run build – Create a production build.

npm run preview – Preview the production build locally.

npm run lint – Run ESLint to check for code issues (if configured).

🧪 Possible Improvements / Future Work

You can mention or build:

🔍 Search for movies by title.

🎭 Filter by genre, language, or rating.

📄 Dedicated movie details page (full overview, cast, etc.).

🌙 Dark/Light theme toggle.

🌐 Multi-language support.

🤝 Contributing

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes with a clear message.

Open a Pull Request describing what you’ve changed.

👤 Author
Purushottam Singh
GitHub: @purakh
