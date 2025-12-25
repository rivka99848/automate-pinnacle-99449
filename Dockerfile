

# ---------- build ----------
FROM node:18-alpine AS build
WORKDIR /app

# מעתיקים את קבצי החבילות ומתקינים תלויות
COPY package*.json ./
RUN npm install

# מעתיקים את כל הקוד ומריצים build
COPY . .
RUN npm run build

# ---------- serve ----------
FROM nginx:alpine
# מעתיקים את הקבצים מה-build של Vite ל-Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]




