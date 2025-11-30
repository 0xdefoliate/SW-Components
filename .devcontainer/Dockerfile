FROM node:24.11.1-trixie-slim

# Install `git` for VCS
# Install `vim` to be able to edit `git commit` messages properly in terminal
RUN apt update  -y &&           \
    apt upgrade -y &&           \
    apt install -y              \
        --no-install-recommends \
        build-essential         \
        git                     \
        ssh                     \
        vim                     \
    &&                          \
    apt autoremove &&           \
    apt clean

# Switch to the lesser privileged user
USER node

# Copy the host's gitconfig just in case the IDE doesn't.
# COPY ~/.gitconfig ~/.gitconfig