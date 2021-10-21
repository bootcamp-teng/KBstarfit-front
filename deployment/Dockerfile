FROM    node:lts-alpine as build-stage
MAINTAINER  teng
WORKDIR /app
ADD . .
RUN npm install
RUN npm run build

FROM    nginx:stable-alpine
COPY    ./settings/nginx.conf /etc/nginx/conf.d/default.conf
COPY    --from=build-stage /app/dist /usr/share/nginx/html
RUN     ls /usr/share/nginx/html
EXPOSE  8080
CMD ["nginx", "-g", "daemon off;"]