# build environment
FROM node:12.11.1-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm run build

# production environment
#FROM staticfloat/nginx-certbot:latest
#ENV CERTBOT_EMAIL ted@moist.ink
#ENV ENVSUBST_VARS FQDN
#ENV FQDN moist.ink
FROM nginx:1.17
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY private /private
EXPOSE 80
EXPOSE 443
#CMD ["nginx", "-g", "daemon off;"]

#docker run -it -p 80:80 --rm sample:prod
