#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#$COPY /dist/demoangapp /usr/share/nginx/html
FROM nginx:1.13.3-alpine
RUN rm -rf /etc/nginx/nginx.conf.default && rm -rf /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy code from dist folder to nginx folder
COPY  /dist/demoangapp/ /usr/share/nginx/html
RUN chgrp -R 0 /var/cache/ /var/log/ /var/run/ && \
    chmod -R g=u /var/cache/ /var/log/ /var/run/
EXPOSE 8080
#Entry point of application
ENTRYPOINT ["nginx", "-g", "daemon off;"]


