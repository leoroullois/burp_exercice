FROM node:18-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY . .

RUN npm i -g pnpm && pnpm install
RUN pnpm run build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

CMD ["pnpm", "run", "start"]
