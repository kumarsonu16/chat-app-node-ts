# Use the official Node.js 14 image as a base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port your app runs on
EXPOSE 3001

# Command to run your app using Node.js
CMD ["npm", "start"]
