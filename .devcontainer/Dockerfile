FROM node:24.11.1-trixie-slim

WORKDIR /src

# Update apt and install git for VCS
RUN apt update -y && apt upgrade -y && apt install -y --no-install-recommends build-essential git && apt autoremove && apt clean

RUN chown -R node /src

# Switch to the lesser privileged user
USER node