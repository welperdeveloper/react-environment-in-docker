# react-environment-in-docker

Template for a developer environment for React and PrimeReact in Docker

---

## Overview

This repository provides a ready-to-use Dockerized development environment for building React applications with PrimeReact UI components.  
It enables fast setup, hot reloading, and consistent cross-platform behavior using Docker containers.

---

## Prerequisites

- Install Docker and Docker Compose  
- Basic knowledge of React and Docker commands

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/welperdeveloper/react-environment-in-docker.git
cd react-environment-in-docker
```

### 2. Start the development environment

Run the following command to build and launch the Docker container:

```bash
docker-compose up
```

This command will:

- Build the React + PrimeReact app image  
- Start a container with the app running in development mode  
- Map port `3000` on the container to `localhost:3000` on your machine  
- Mount your code into the container for **hot reload** (live updates when files change)

### 3. Access the app in your browser

Open [http://localhost:3000](http://localhost:3000) to view the running React application.

---

## Environment Variables

To use environment variables in React with Docker, ensure those variables start with `REACT_APP_`.  
For example, you can pass variables during container run:

```bash
docker run -e REACT_APP_API_URL=https://api.example.com -p 3000:3000 your-image
```

Inside React, access them via:

```javascript
process.env.REACT_APP_API_URL
```

---

## Stopping the container

Press `Ctrl + C` in the terminal running `docker-compose up` to stop and remove containers,  
or run:

```bash
docker-compose down
```

---

## Running Locally without Docker

If you prefer to run the app outside Docker:

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000) as well.

---

## Notes

- The Docker setup uses volume mounts for **live code synchronization** and a development server that supports **hot reloading**.
- The environment is configured to ease development with **React** and **PrimeReact** components.
- Modify or extend `Dockerfile` and `docker-compose.yml` as needed to fit your project requirements.
