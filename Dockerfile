# 1. Base image 
FROM node:20-alpine

# 2. Create app directory inside container
WORKDIR /app

# 3. Copy package files first (for caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm ci --only=production

# 5. Copy rest of the app
COPY . .

# 6. App listens on this port
EXPOSE 3000

# 7. Command to run app
CMD ["npm", "start"]
