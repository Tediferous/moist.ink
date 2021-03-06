# build environment
FROM node:12.11.1-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent
COPY . /app
RUN npm run build

# production environment
FROM dorfeuille/gcloud-certbot:latest
ENV CERTBOT_EMAIL ted@moist.ink
ENV ENVSUBST_VARS FQDN
ENV FQDN moist.ink
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
EXPOSE 443
#CMD ["nginx", "-g", "daemon off;"]

#docker run -it -p 80:80 --rm sample:prod
