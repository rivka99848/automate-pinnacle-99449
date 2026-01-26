

# תוכנית: הוספת בדיקת ריפו לפני משיכת שינויים

## מה נוסיף

בשלב 9 (משיכת שינויים בעתיד) נוסיף פקודה לבדיקת ה-remote repository לפני המשיכה, כדי לוודא שמושכים מהמקום הנכון.

## השינויים

### שלב 9 - עדכון הקוד

נוסיף לפני הפקודות הקיימות:

1. **פקודת בדיקה** - `git remote -v` להצגת הריפו המחובר
2. **הסבר** - מה צריך לראות בפלט
3. **פקודת תיקון** - במקרה שהריפו לא נכון

### הקוד החדש:

```jsx
{/* Step 9 - Pull Changes */}
<Section id="step9" title="9️⃣ משיכת שינויים בעתיד" icon={RefreshCw}>
  <p className="text-gray-600 mb-4">
    כשתרצו לעדכן את האתר עם שינויים חדשים מ-GitHub:
  </p>
  
  <h4 className="font-bold text-lg mb-3 text-blue-900">א. בדיקת הריפו המחובר</h4>
  <CodeBlock code="git remote -v" />
  
  <ExpectedOutput>
    <p>צריך לראות את הריפו שלכם:</p>
    <code dir="ltr" className="block mt-2">
      origin  git@github.com:&lt;USERNAME&gt;/&lt;REPO_NAME&gt;.git (fetch)
      origin  git@github.com:&lt;USERNAME&gt;/&lt;REPO_NAME&gt;.git (push)
    </code>
  </ExpectedOutput>
  
  <WarningBox>
    <p><strong>אם הריפו לא נכון?</strong> תקנו עם:</p>
    <code dir="ltr" className="block mt-2 bg-yellow-200 p-2 rounded">
      git remote set-url origin git@github.com:&lt;USERNAME&gt;/&lt;REPO_NAME&gt;.git
    </code>
  </WarningBox>
  
  <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">ב. משיכת השינויים והפעלה מחדש</h4>
  <CodeBlock code={`cd /var/www/<PROJECT_FOLDER>
git pull origin main
docker compose down
docker compose up --build -d`} />
  
  <ChangeNote>...</ChangeNote>
  <TipsBox>...</TipsBox>
</Section>
```

## פרטים טכניים

**קובץ לעריכה:** `src/pages/DockerGuide.tsx` (שורות 428-447)

**מה יתווסף:**
- תת-כותרות (א. בדיקת הריפו, ב. משיכת השינויים)
- פקודת `git remote -v`
- `ExpectedOutput` עם הפלט הצפוי (כולל הפלייסהולדרים הדינמיים)
- `WarningBox` עם פקודת תיקון במקרה שהריפו לא נכון
- עדכון הנתיב לכלול `/var/www/` לפני שם הפרויקט

**הפלייסהולדרים הדינמיים** (`<USERNAME>`, `<REPO_NAME>`, `<PROJECT_FOLDER>`) ימשיכו לעבוד אוטומטית כי הם כבר מוגדרים בקונטקסט.

