
#!/bin/bash

# Make script executable with: chmod +x docker-helper.sh

case "$1" in
  dev)
    echo "Starting development environment..."
    docker-compose up app-dev
    ;;
  prod)
    echo "Starting production environment..."
    docker-compose up app-prod
    ;;
  build)
    echo "Building Docker images..."
    docker-compose build
    ;;
  down)
    echo "Stopping all containers..."
    docker-compose down
    ;;
  *)
    echo "Usage: $0 {dev|prod|build|down}"
    exit 1
esac
