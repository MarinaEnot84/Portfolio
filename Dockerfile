# # Используем официальный образ Node.js
# FROM node:22-alpine

# # Устанавливаем рабочую директорию
# WORKDIR /app

# # Копируем package.json и package-lock.json
# COPY package*.json ./

# # Обновляем все пакеты Alpine (+ кеш очищаем)
# RUN apk update && apk upgrade --no-cache && \
#     rm -rf /var/cache/apk/*

# # Устанавливаем зависимости
# RUN npm install

# # Копируем остальные файлы проекта
# COPY . .

# # Собираем приложение
# RUN npm run build

# # Указываем порт, на котором будет работать приложение
# EXPOSE 3000

# # Запускаем приложение
# CMD ["npm", "start"]
# Шаг 1: Установка зависимостей

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Шаг 2: Сборка приложения
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Шаг 3: Запуск
FROM node:22-alpine AS runner
WORKDIR /app

ENV ENV=production

# Копируем только необходимое
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]