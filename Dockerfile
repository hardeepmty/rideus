# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY frontend/ ./

# Expose the port the application will run on
EXPOSE 3000

# Command to start the React application
CMD ["npm", "start"]
