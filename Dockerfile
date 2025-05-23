# Etapa de build
FROM node:18 AS build
WORKDIR /angular-docker
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Etapa de producción: Nginx sirve el frontend
FROM nginx:alpine
COPY --from=build /angular-docker/dist/angular-docker /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
