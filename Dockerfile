FROM ubuntu:20.04

RUN apt update && apt install -y git && apt install -y curl && apt-get install -y xz-utils && \
    curl https://nodejs.org/dist/v14.18.1/node-v14.18.1-linux-x64.tar.xz -o node.tar.xz && \
    tar xvf ./node.tar.xz && \
    ssh-keygen -t rsa -N "" -f ~/.ssh/id_rsa

ENV PATH=$PATH:/node-v14.18.1-linux-x64/bin
