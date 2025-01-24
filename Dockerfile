FROM oven/bun:1.1.9 AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN bun i --frozen-lockfile

FROM oven/bun:1.1.9 AS production-dependencies-env
COPY ./package.json bun.lockb /app/
WORKDIR /app
RUN bun i --frozen-lockfile

FROM oven/bun:1.1.9 AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN bun run build

FROM oven/bun:1.1.9
COPY ./package.json bun.lockb /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app

CMD ["bun", "run", "start"]