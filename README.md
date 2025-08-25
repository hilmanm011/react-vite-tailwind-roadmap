# 🚀 DRX Roadmap Frontend

Frontend aplikasi **DRX Roadmap** dibuat menggunakan:

- ⚛️ [React + Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🎬 [Framer Motion](https://www.framer.com/motion/)

---

## 📦 Requirement

- [Node.js](https://nodejs.org/) **20.19+** atau **22.12+**
- [npm](https://www.npmjs.com/) / [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (opsional, kalau mau jalan via container)

---

## 🚀 Cara Menjalankan (Local Development)

1. Clone repository:

   ```bash
   git clone https://github.com/hilmanm011/react-vite-tailwind-roadmap.git
   cd drx-roadmap
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Jalankan project:

   ```bash
   npm run dev
   ```

4. Buka di browser:
   ```
   http://localhost:5173
   ```

---

## 🐳 Menjalankan dengan Docker

1. Build container:

   ```bash
   docker compose up --build
   ```

2. Akses di browser:
   ```
   http://localhost:5173
   ```

---

## 🏗️ Build untuk Production

1. Build project:

   ```bash
   npm run build
   ```

2. Preview hasil build:

   ```bash
   npm run preview
   ```

3. Atau jalankan dengan Docker (production mode):
   - Pastikan `Dockerfile` sudah menggunakan command:
     ```dockerfile
     CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
     ```
   - Lalu jalankan:
     ```bash
     docker compose up --build
     ```

---

## ✨ Fitur

- ⚡ Cepat & ringan dengan **Vite**
- 🎨 Styling modern pakai **TailwindCSS**
- 🎬 Animasi interaktif dengan **Framer Motion**
- 📱 Responsive design
- 🐳 Bisa dijalankan langsung di Docker

---

## 📜 License

MIT License © 2025
