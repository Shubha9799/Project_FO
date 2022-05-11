#development phase docker file

FROM node

WORKDIR /thbs-app

COPY . .

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4200

CMD ["ng","serve","--host", "0.0.0.0"]