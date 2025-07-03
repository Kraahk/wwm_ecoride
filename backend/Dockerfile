FROM node:24-bookworm-slim AS builder

WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./
COPY prisma ./prisma

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Générer Prisma Client
RUN npx prisma generate --schema=./prisma/schema.prisma

# Port exposé
EXPOSE 5000

# Lancer en mode dev avec ESM + ts-node
CMD ["node", "--loader", "ts-node/esm", "src/index.ts"]
