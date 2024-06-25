FROM node AS base
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

FROM base AS development
CMD ["npm", "run", "start:dev"]

FROM base AS build
RUN npm run build

FROM node AS production
WORKDIR /app
COPY package*.json .
RUN npm install --only=production
COPY --from=build /app/dist ./dist
CMD ["npm", "run", "start:prod"]


