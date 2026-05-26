# CI-CD-TAREA

A React project built with Vite, featuring CI/CD and testing setup, ready for deployment on Vercel.

## Features
- React 18 with Vite for fast development
- Unit and integration tests using Jest and Testing Library
- Ready for static deployment on Vercel
- SPA routing support with Vercel rewrites

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
```

### Deploying to Vercel
1. Push your code to a Git repository (GitHub, GitLab, etc.).
2. Connect your repository to Vercel.
3. Vercel will use the `vercel.json` config to build and deploy your app from the `dist` folder.

#### SPA Routing
The `vercel.json` file includes a rewrite rule so all routes are served by `index.html`, enabling client-side routing.

## Project Structure
```
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── setupTests.js
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── QuantitySelector.jsx
│   │   └── __tests__/
│   │       ├── App.integration.test.jsx
│   │       ├── ProductCard.test.jsx
│   │       └── QuantitySelector.test.jsx
│   └── tests/
│       └── fileMock.js
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── ...
```

## License
MIT
