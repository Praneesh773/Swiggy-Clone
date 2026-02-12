# Docker Setup Guide - Swiggy Clone

## Files Included

- **Dockerfile** - Multi-stage build for optimized production image
- **docker-compose.yml** - Docker Compose configuration
- **.dockerignore** - Excludes unnecessary files from build
- **nginx.conf** - Nginx configuration for SPA routing

## Prerequisites

- Docker installed ([Download Docker](https://www.docker.com/products/docker-desktop))
- Docker Compose (included with Docker Desktop)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# Stop the container
docker-compose down

# View logs
docker-compose logs -f
```

### Option 2: Using Docker CLI

```bash
# Build the image
docker build -t swiggy-clone .

# Run the container
docker run -d -p 80:80 --name swiggy-app swiggy-clone

# Stop the container
docker stop swiggy-app

# Remove the container
docker rm swiggy-app
```

## Access the Application

Once the container is running, open your browser and navigate to:

```
http://localhost
```

## Build Details

### Multi-Stage Build

**Stage 1: Builder**
- Uses Node 18 Alpine image (lightweight)
- Installs dependencies
- Builds the React + Vite application

**Stage 2: Production**
- Uses Nginx Alpine image (minimal footprint)
- Serves optimized static files
- Configured for SPA routing

## Features

✅ **Optimized Image Size** - Multi-stage build reduces final image size
✅ **SPA Routing** - Nginx configured to handle React Router
✅ **Gzip Compression** - Automatic compression for smaller file sizes
✅ **Caching Strategy** - Smart caching for assets
✅ **Health Checks** - Container health monitoring
✅ **Production Ready** - Fully optimized for production deployment

## Docker Compose Services

- **swiggy-app** - Main application container
  - Port: 80 (HTTP)
  - Restart Policy: unless-stopped
  - Health Check: Enabled

## Useful Commands

```bash
# View running containers
docker ps

# View all containers
docker ps -a

# View image size
docker images swiggy-clone

# Execute command in running container
docker exec -it swiggy-app sh

# View container logs
docker logs swiggy-app

# Rebuild image (fresh build)
docker-compose up -d --build

# Remove all unused Docker resources
docker system prune -a
```

## Environment Variables

To add environment variables, update `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - VITE_API_URL=your_api_url
```

## Troubleshooting

**Port 80 already in use?**
```bash
# Change port in docker-compose.yml
ports:
  - "8080:80"
```

**Container exits immediately?**
```bash
docker logs swiggy-app
```

**Want to rebuild from scratch?**
```bash
docker-compose down
docker system prune -a
docker-compose up -d --build
```

## Image Size

- Builder stage: ~150-200 MB (not included in final image)
- Final image: ~20-30 MB (Alpine-based, highly optimized)

## Deployment

The Docker image is production-ready and can be deployed to:
- Docker Hub
- AWS ECR
- Google Container Registry
- Azure Container Registry
- Any Kubernetes cluster
- Cloud providers (Heroku, Render, Railway, etc.)

## Performance Considerations

- Static assets are cached for 1 year
- Gzip compression enabled for optimal bandwidth usage
- Nginx optimized for high concurrent connections
- Alpine-based images for minimal resource usage
