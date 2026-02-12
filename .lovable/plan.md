
# עדכון מדריך Docker: הוספת nginx.conf

## מה משתנה

### 1. הוספת שלב חדש לפני יצירת Dockerfile - יצירת קובץ nginx.conf
בשני המסלולים (A ו-B), לפני שלב 6 (יצירת Dockerfile), יתווסף שלב חדש שמסביר ליצור קובץ `nginx.conf` עם הגדרת `try_files` לתמיכה ב-SPA routing.

### 2. עדכון ה-Dockerfile בשני המסלולים
הוספת שורה `COPY nginx.conf /etc/nginx/conf.d/default.conf` ל-Dockerfile.

## פרטים טכניים

### קובץ לעריכה: `src/pages/DockerGuide.tsx`

**שינוי 1 - מסלול A (שורות 524-562):**
- הוספת שלב "יצירת nginx.conf" לפני שלב 6 (Dockerfile)
- יכלול: פקודת `nano nginx.conf`, בלוק קוד עם תוכן הקובץ, והסבר שזה נדרש ל-SPA routing
- עדכון ה-Dockerfile בשלב 6 להכיל את השורה `COPY nginx.conf /etc/nginx/conf.d/default.conf`

**שינוי 2 - מסלול B (שורות 723-726):**
- הוספת שלב "יצירת nginx.conf" לפני שלב 6 של מסלול B
- עדכון שלב 6 של מסלול B להכיל את תוכן ה-Dockerfile המלא (כולל שורת ה-COPY) במקום רק הפניה למסלול A

**שינוי 3 - עדכון Dockerfile בשורש הפרויקט:**
- הוספת `COPY nginx.conf /etc/nginx/conf.d/default.conf` גם לקובץ `Dockerfile` בפועל

**שינוי 4 - יצירת קובץ `nginx.conf` בשורש הפרויקט** כדי שה-Docker build יעבוד

### תוכן nginx.conf:
```text
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Dockerfile מעודכן:
```text
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### סדר השלבים המעודכן במדריך:
1. שלב 5: בדיקת פורט (כמו היום)
2. **שלב 5.5 (חדש)**: יצירת קובץ nginx.conf
3. שלב 6: יצירת Dockerfile (מעודכן עם שורת COPY)
4. שלב 7: יצירת docker-compose.yml (ללא שינוי)
