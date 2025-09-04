# DOCKER DEPLOYMENT COMMANDS - PORT 5000

PREREQUISITES:
- Docker installed on your system
- Application files in current directory

## BUILD AND RUN:

1. Build the Docker image:
   docker build -t repo-river .

2. Run container mapping host port 5000 to container port 3000:
   docker run -p 5000:3000 --name repo-river-container repo-river

3. Run in detached mode (background):
   docker run -d -p 5000:3000 --name repo-river-container repo-river

4. Run with auto-restart on failure:
   docker run -d --restart unless-stopped -p 5000:3000 --name repo-river-container repo-river

MANAGEMENT COMMANDS:

5. Stop the container:
   docker stop repo-river-container

6. Start stopped container:
   docker start repo-river-container

7. Remove the container:
   docker rm repo-river-container

8. Remove the image:
   docker rmi repo-river

9. View running containers:
   docker ps

10. View container logs:
    docker logs repo-river-container

11. Follow logs in real-time:
    docker logs -f repo-river-container

12. Access container shell:
    docker exec -it repo-river-container sh

APPLICATION ACCESS:

- Frontend: http://localhost:5000
- API Test: http://localhost:5000/api/test
- Login: POST http://localhost:5000/api/auth/login
- Signup: POST http://localhost:5000/api/auth/signup

# TESTING THE APPLICATION:

# Test API endpoint
curl http://localhost:5000/api/test

# Test with sample login (using curl)
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

TROUBLESHOOTING:

1. If port 5000 is occupied:
   docker run -p 5001:3000 --name repo-river-container repo-river

2. If build fails, check Dockerfile syntax:
   docker build -t repo-river . --no-cache

3. If application doesn't start, check logs:
   docker logs repo-river-container

4. To completely rebuild:
   docker stop repo-river-container
   docker rm repo-river-container
   docker rmi repo-river
   docker build -t repo-river .
   docker run -p 5000:3000 --name repo-river-container repo-river
