FROM node:24.11.1-trixie-slim

# Update apt and install git for VCS
RUN apt update  -y &&           \
    apt upgrade -y &&           \
    apt install -y              \
        --no-install-recommends \
        build-essential         \
        git                     \
        ssh                     \
    &&                          \
    apt autoremove &&           \
    apt clean

# Switch to the lesser privileged user
USER node