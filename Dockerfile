FROM nginx
COPY . /usr/share/nginx/html
COPY landing.conf /etc/nginx/conf.d/default.conf
