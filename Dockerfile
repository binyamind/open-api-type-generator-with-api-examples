FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npx tsc

FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=builder /app/build ./build

COPY src/contracts ./src/contracts

EXPOSE 5000

CMD ["node", "build/server.js"]

