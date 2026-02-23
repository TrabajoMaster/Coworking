# ──────────────────────────────────────────────
# Frontend — React + Vite (modo desarrollo)
# ──────────────────────────────────────────────
FROM node:20-alpine

WORKDIR /app

# Copiar dependencias primero para aprovechar la caché de Docker
COPY package.json package-lock.json* ./

RUN npm install

# Copiar el resto del código fuente
COPY . .

EXPOSE 5173

# Arrancar Vite en modo desarrollo
CMD ["npm", "run", "dev"]
