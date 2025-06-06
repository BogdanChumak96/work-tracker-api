FROM node:24-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i nest -g && npm install
COPY . .
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
EXPOSE 3000
CMD ["node", "dist/main.js"]