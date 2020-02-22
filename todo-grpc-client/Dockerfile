# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:10.16.0 as build-stage

# Set up environment variables
ENV WORK_DIR /app

# Set work directory
WORKDIR ${WORK_DIR}

# Copy package file to workdir
COPY package*.json ${WORK_DIR}/
RUN npm install

# Copy and build app
COPY ./ ${WORK_DIR}/
#RUN npm run test -- --browsers ChromeHeadlessNoSandbox --watch=false
ARG configuration

RUN npm run build:prod -- --output-path=./dist/out --configuration $configuration

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf