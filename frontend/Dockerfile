# Étape 1 : build l'app Vite
FROM node:24-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Étape 2 : servir les fichiers statiques avec nginx
FROM nginx:alpine

# Copier les fichiers de build dans nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Remplacer la config nginx si besoin (optionnel)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
