FROM node:24.10.0-alpine
LABEL authors="Axel 'Foley' Karlsson"

WORKDIR /app

COPY . .

# We use pnpm **only** in Docker containers because speed matters.
# Outside of Docker we **only** use **npm**.
RUN corepack enable pnpm && pnpm install

CMD pnpm run unsafe:lint:fix