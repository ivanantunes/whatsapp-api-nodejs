FROM node:24-alpine

ARG _WORKDIR=/home/node/whatsapp
ARG PORT=3333
ENV MONGODB_URL=mongodb://mongo:27017/whatsapp_api

WORKDIR ${_WORKDIR}

RUN apk add --no-cache git
ADD . ${_WORKDIR}
RUN npm install

USER node
EXPOSE ${PORT}

CMD ["npm", "start"]