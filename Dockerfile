FROM nginxinc/nginx-unprivileged 
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/demoangapp /usr/share/nginx/html