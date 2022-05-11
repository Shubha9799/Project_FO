# FROM node as build-step
# WORKDIR /foodorder
# COPY . .
# RUN npm install
# RUN npm run build
# FROM nginx:alpine
# COPY --from=build-step /foodorder/dist/* /usr/share/nginx/html

FROM node

WORKDIR /thbs-app

COPY . .

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4200

CMD ["ng","serve","--host", "0.0.0.0"]