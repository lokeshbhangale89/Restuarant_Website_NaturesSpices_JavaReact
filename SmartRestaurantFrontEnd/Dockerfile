# Here we are using a multi-stage build to optimize the final docker image size. 
# The first stage builds the React app, and the second stage serves it using Nginx.

# -------- Stage 1: Build --------
# Pulling the official Node.js image for building the React app
FROM node:20.20-alpine3.22 AS builder

# Set working directory inside the docker container
WORKDIR /app

# Copy only package files first (for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy rest of code
COPY . .

# Build the app
RUN npm run build


# -------- Stage 2: Serve --------

# Here we are using ngnix because we are going to serve a static React app in the form of build, 
# so we need something to serve that build to browser and this is where ngnix is used,
# and nginx is a lightweight web server that can efficiently serve static files.
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy only build output from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the outside world that is used by nginx to serve the app. 
# This port will be mapped to a port on the host machine when we run the container, allowing us to access the app through a web browser.
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]