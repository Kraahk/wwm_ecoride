# Étape 1 — Build
FROM node:24-alpine AS builder

WORKDIR /app

# Installer les dépendances
COPY package*.json ./
COPY prisma ./prisma
RUN npm install


# Copier le code source
COPY . .

# Générer Prisma Client dans l'image (Linux)
RUN npx prisma generate --schema=./prisma/schema.prisma


# Pour le hot reload
RUN npm install -D ts-node-dev

EXPOSE 5000

CMD ["npm", "run", "dev"]