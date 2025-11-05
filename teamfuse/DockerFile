# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy only Prisma schema first, and generate here
COPY prisma ./prisma

# ✅ Set PRISMA_GENERATE_PATH properly
ENV PRISMA_CLIENT_OUTPUT=./src/generated/prisma

RUN npx prisma generate --schema=./prisma/schema.prisma

# Copy full project AFTER prisma generate
COPY . .

#  Build the app
RUN npm run build

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]