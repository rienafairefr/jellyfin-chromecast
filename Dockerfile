FROM node:20-alpine AS build
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm i
COPY . ./


RUN npm run build
FROM nginx:alpine
COPY --from=build /src/dist /app/static
RUN chown -R nginx:nginx /app/static
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
