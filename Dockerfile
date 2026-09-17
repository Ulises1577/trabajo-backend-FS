FROM node:20-alpine

WORKDIR /app

# Copiar archivos de dependencias para aprovechar la cache de capas de Docker
COPY package*.json ./

RUN npm install

# Copiar el resto del código
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
