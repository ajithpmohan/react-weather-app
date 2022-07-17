# pull official base image
FROM node:lts-alpine

# Set the working directory
ENV BASE_DIR=/app
WORKDIR $BASE_DIR

ARG NODE_ENV

# add `/app/node_modules/.bin` to $PATH
ENV PATH $BASE_DIR/node_modules/.bin:$PATH

# install yarn
RUN apk add yarn

# install app dependencies
COPY package.json $BASE_DIR/

RUN if [ "$NODE_ENV" = "development" ]; \
  then yarn install --loglevel verbose; \
  else yarn install --only=production; \
  fi

# RUN yarn install --loglevel verbose

# Copies everything over to $BASE_DIR
COPY . .

# Finally runs the application
CMD ["yarn", "start"]
