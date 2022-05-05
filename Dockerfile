FROM node as build-step
WORKDIR /foodorder
COPY . .
RUN npm install
RUN npm run build
FROM nginx:alpine
COPY --from=build-step /foodorder/dist/* /usr/share/nginx/html