# pull the official base image
FROM node:16.15.0-alpine
# ENV NODE_VERSION 18.6.0
# set working direction
WORKDIR /src
# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
# add app
COPY . ./
EXPOSE 3000
# start app
CMD ["npm", "start"]
