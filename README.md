<p align="center">
   <img src="https://github.com/Yagasaki7K/website-steamfolio/assets/23272064/508c8d81-7cf7-44d6-8246-4297923ecee4" width="800"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/andersonmarlon/">
      <img alt="AndersonMarlon" src="https://img.shields.io/badge/-AndersonMarlon-1fb5f1?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Yagasaki7K/website-steamfolio?color=1fb5f1">

  <a href="https://github.com/Yagasaki7K/website-steamfolio/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Yagasaki7K/website-steamfolio?color=1fb5f1">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-1fb5f1">
  <img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/Yagasaki7K/website-steamfolio?color=1fb5f1" />
  <a href="https://twitter.com/yagasaki7k">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Contact%20me%20at%20@Yagasaki7K" alt="Contact me at @Yagasaki7K" />
  </a>
</p>

<div align="center">
  <sub>Steamfolio. Built with 💙 by
    <a href="https://github.com/Yagasaki7K">Anderson "Yagasaki" Marlon</a> and
    <a href="https://github.com/Yagasaki7K/website-steamfolio/graphs/contributors">
      contributors
    </a>
  </sub>
</div>

# 📌 Table of Contents

- [📌 Table of Contents](#-table-of-contents)
- [👀 Demo Website](#-demo-website)
- [💻 Technologies](#-technologies)
- [Application Documentation](#application-documentation)
  - [Overview](#overview)
  - [Key Features](#key-features)
  - [Application Structure](#application-structure)
    - [Components](#components)
    - [Utility Functions](#utility-functions)
  - [API Integration](#api-integration)
    - [GitHub API](#github-api)
    - [Blog Feed](#blog-feed)
  - [Environment Variables](#environment-variables)
  - [How to Run the Application](#how-to-run-the-application)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [File Structure](#file-structure)
  - [Customization](#customization)
  - [Contributing](#contributing)
- [📕 License](#-license)

# 👀 Demo Website

👉  Demo: https://steamfolio.vercel.app/

# 💻 Technologies

This project was made using the follow technologies:

* Bun
* ReactJS
* Typescript
* Styled Components
* Vite
* Steam API
* GitHub API

If you want something, wait for `yarn build` to be obeyed, and after that open a little change decision!

# Application Documentation

This documentation provides an overview of the application and its functionalities to help developers understand its structure and make modifications as needed.

---

## Overview
This React-based application fetches and displays data from the GitHub API and an XML-based blog feed. It provides an interactive interface showcasing user information, repositories, achievements, and blog articles. It also offers customizable visual elements such as avatars and badges.

---

## Key Features

1. **GitHub Integration**:
   - Fetches user details, repositories, stars, and commit counts using the GitHub API.
   - Displays the most-used programming language based on repositories.

2. **Blog Integration**:
   - Parses an XML feed to display the latest blog articles.
   - Supports sorting and filtering of articles.

3. **Dynamic User Profile**:
   - Customizable avatar, nickname, and achievements.
   - Real-time badges and stats fetched from APIs.

4. **Interactive UI**:
   - Buttons and links to navigate to user social profiles and repositories.
   - Dynamically styled components for a modern look.

---

## Application Structure

### Components

1. **`App`**:
   - The main component that fetches and displays data.
   - Uses React hooks like `useState` and `useEffect` to manage state and side effects.

2. **`SteamDetails`**:
   - A wrapper component for the UI layout and design.

### Utility Functions

1. **`getLevelByGPQ`**:
   - A utility function to calculate user levels based on their GitHub stats.

2. **`fetchData`**:
   - Fetches GitHub user information and repositories.
   - Calculates total stars, commits, and programming language usage.

3. **`fetchArticles`**:
   - Fetches and parses an XML feed to extract blog articles.
   - Sorts and displays the four latest articles.

---

## API Integration

### GitHub API
- **Endpoints Used**:
  1. `https://api.github.com/users/{username}` - Fetches user details.
  2. `https://api.github.com/users/{username}/repos` - Fetches repositories.
  3. `https://api.github.com/search/commits` - Fetches total commits.

- **Headers**:
  ```json
  {
    "Authorization": "Bearer <github_api_key>",
    "Accept": "application/vnd.github.cloak-preview"
  }
  ```

### Blog Feed
- **Endpoint**: 
  `https://raw.githubusercontent.com/Yagasaki7K/website-yagasaki/refs/heads/main/article.xml`

- **Parsing**:
  - Uses the `DOMParser` to parse the XML.
  - Extracts `title`, `link`, `pubDate`, and `description` fields.

This can be removed or changed to whatever XML is needed, following the practices of each blog/site.

---

## Environment Variables

1. `VITE_GITHUB_API_KEY` - The GitHub API token for authentication.

---

## How to Run the Application

### Prerequisites
1. **Node.js** and **npm/yarn** or **Bun** installed.
2. A valid GitHub API token.

### Steps
1. Clone the repository:
   ```bash
   git clone git@github.com:Yagasaki7K/website-steamfolio.git
   ```
2. Install dependencies:
   ```bash
   npm install or yarn or bun install
   ```
3. Create a `.env` file and add the GitHub API token:
   ```env
   VITE_GITHUB_API_KEY=<your_github_api_key>
   ```
4. Start the application:
   ```bash
   npm run dev or yarn dev or bun run dev
   ```
5. Access the application at `http://localhost:3000`.

---

## File Structure
```plaintext
src/
├── components/
│   └── SteamDetails.tsx  # Layout wrapper component
├── utils/
│   └── getLevelByGPQ.ts  # Utility function for level calculation
├── App.tsx               # Main application logic
└── styles/               # CSS/SCSS files for styling
```

---

## Customization

- **infoGithub**: Contains detailed information about the user fetched from the GitHub API, including name, bio, location, and more.
- **userGitHub**: The GitHub username used to fetch information and data for the specified user.
- **subnick**: A subtitle or additional alias for the user, providing extra personalization.
- **avatarBorder**: URL pointing to the user's avatar with a specific border style, used for visual customization.
- **flag**: The country code representing the user's national flag.
- **birthday**: The user's birth year, used to calculate age or other age-based information.
- **sinceExperience**: The year the user started gaining experience as a developer, often displayed to indicate professional longevity.
- **infoSubTitle**: A descriptive subtitle that complements the user's information or bio.
- **badgeTitle**: The title or designation associated with the user's badge, representing achievements or roles.
- **badgeEXP**: The experience points or value linked to the user's badge, typically indicating progress or milestones.
- **badgeIcon**: URL linking to the visual representation of the badge icon.
- **twitterLink**: The URL directing to the user's Twitter profile for social connectivity.
- **awardIconLink**: URL for the icon representing the user's awards or achievements.
- **perfilIconLink**: URL linking to the user's profile icon or page for detailed personal information.
- **urlAvatar**: URL pointing to the user's avatar image, often a GitHub profile picture.
- **nickname**: The user's nickname or display name, usually fetched from GitHub data.
- **location**: The geographical location of the user, as retrieved from their GitHub profile.
- **infoTitle**: A concise title summarizing the user's information or professional tagline.
- **githubLink**: URL linking to the user's GitHub profile, providing access to repositories and activities.
  
---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your update message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

# 📕 License

Released in 2024

Made by [Anderson Marlon](https://github.com/Yagasaki7K)
This project is under the [MIT license](./LICENSE).
