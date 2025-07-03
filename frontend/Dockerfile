# Étape 1 : build l'app Vite
FROM node:24-bookworm-slim AS builder

WORKDIR /app

# Copie uniquement les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Nettoie npm cache et installe proprement
RUN npm install && npm cache clean --force

# Copie le reste du code
COPY . .

EXPOSE 5173
ENV CHOKIDAR_USEPOLLING=true

CMD ["npm", "run", "dev"]
