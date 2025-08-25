# Gunakan Node versi 20 LTS (bisa juga 22 kalau mau lebih baru)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json (atau pnpm-lock/yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file project
COPY . .

# Expose port (Vite default 5173)
EXPOSE 5173

# Jalankan Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
