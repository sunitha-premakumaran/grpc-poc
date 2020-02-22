FROM node:latest

# Change shell from sh to bash
SHELL ["/bin/bash", "-c"]

# Set environment variables
ENV WORK_DIR /app/

# Set Working Directory
WORKDIR $WORK_DIR

# Set up app
COPY package*.json $WORK_DIR

RUN npm install

COPY . $WORK_DIR


EXPOSE 9000

CMD ["npm","start"]