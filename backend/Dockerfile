# Use the official Node.js 14 image as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the app's files to the working directory
COPY . .

# Set the app's environment variable(s)
ENV NODE_ENV production

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
