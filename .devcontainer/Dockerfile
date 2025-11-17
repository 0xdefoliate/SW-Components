FROM node:24.11.1-trixie-slim

WORKDIR /src

# Create non-root user
RUN groupadd -r developer_group && useradd -r -g developer_group developer

# Update apt and install git for VCS
RUN apt update -y && apt install -y --no-install-recommends build-essential git && apt autoremove && apt clean

COPY package*.json .

# Switch to the lesser privileged user
USER developer

RUN npm install