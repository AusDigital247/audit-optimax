
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/156b8cb8-7f4a-4eab-92fd-e8ece95c9b6f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/156b8cb8-7f4a-4eab-92fd-e8ece95c9b6f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Using Docker**

This project is fully dockerized for both development and production environments:

```sh
# For development environment
docker-compose up app-dev

# For production environment
docker-compose up app-prod

# Build the Docker images
docker-compose build

# Stop all containers
docker-compose down
```

Alternatively, you can use the helper script:

```sh
# Make the script executable
chmod +x docker-helper.sh

# Start development environment
./docker-helper.sh dev

# Start production environment
./docker-helper.sh prod

# Build Docker images
./docker-helper.sh build

# Stop all containers
./docker-helper.sh down
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/156b8cb8-7f4a-4eab-92fd-e8ece95c9b6f) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
