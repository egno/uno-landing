FROM gitlab.unosalon.ml:4567/containers/nginx:latest

COPY /public /usr/share/nginx/html

