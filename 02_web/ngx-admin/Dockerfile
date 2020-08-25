
FROM node:alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#Linux setup
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python \
    && npm install --quiet node-gyp -g \
    && apk update \
    && apk add --update alpine-sdk \
    && apk del alpine-sdk \
    && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
    && npm cache verify \
    && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Angular CLI
RUN npm install -g @angular/cli

CMD npm install \
    && ng serve --host 0.0.0.0