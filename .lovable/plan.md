

# תוכנית: מערכת פניות מבוססת חבילות

## הזרימה החדשה

```text
שלב 1: הזנת אימייל
    |
    v
שלב 2: תצוגת חבילות (מ-support3)
    כל חבילה = כרטיס עם: סוג, כמות בשימוש, כמות שנותרה, סטטוס
    |
    לחיצה על חבילה
    v
שלב 3: תצוגת פניות של החבילה (שליחת ID חבילה ל-support2)
    רשימת פניות עם: נושא, תאריך, סטטוס
    |
    לחיצה על פנייה
    v
שלב 4: פרטי פנייה + שיחה + תגובה (כמו היום)
```

## מה משתנה

### 1. עדכון `usePackageStatus.ts`
- במקום להחזיר `PackageInfo` בודד, יחזיר מערך חבילות
- כל חבילה תכלול: `id`, `סוג חבילה`, `כמות בחבילה`, `כמות פניות בשימוש לחבילה`, `כמות שנותרה`, `סטטוס חבילה`, `תאריך רכישה`, `מחיר`

### 2. עדכון `src/types/support.ts`
- הוספת interface חדש `PackageDetail` למבנה החבילה המלא
- עדכון `PackageInfo` לכלול מערך חבילות

```typescript
interface PackageDetail {
  id: string;
  package_type: string;       // סוג חבילה
  total_tickets: number;      // כמות בחבילה
  used_tickets: number;       // כמות פניות בשימוש לחבילה
  remaining_tickets: number;  // כמות שנותרה
  status: string;             // סטטוס חבילה
  purchase_date: string;      // תאריך רכישה
  price: number;              // מחיר
}
```

### 3. שינוי מהותי ב-`SupportMyTickets.tsx`
- שלב 1: אימייל (כמו היום)
- שלב 2 (חדש): תצוגת כרטיסי חבילות - כל חבילה מציגה סוג, כמות בשימוש/נותרה, סטטוס
- שלב 3: לחיצה על חבילה -> שליחת `package_id` ל-`support2` -> קבלת פניות -> הצגת רשימת פניות
- שלב 4: לחיצה על פנייה -> ניווט לדף פרטי פנייה (כמו היום)

### 4. `SupportTicketDetail.tsx` - ללא שינוי מהותי
- נשאר כמו שהוא - מציג פנייה בודדת עם תגובות ואפשרות להגיב

## עיצוב כרטיסי חבילות

כל חבילה תוצג ככרטיס עם:
- שם/סוג החבילה (כותרת)
- סטטוס (badge צבעוני)
- פס התקדמות: X בשימוש מתוך Y
- כמות שנותרה בולטת
- תאריך רכישה
- כפתור "צפייה בפניות"

## פרטים טכניים

### קבצים לעריכה:
1. **`src/types/support.ts`** - הוספת `PackageDetail` interface
2. **`src/hooks/usePackageStatus.ts`** - מיפוי מערך חבילות מלא מ-support3
3. **`src/pages/SupportMyTickets.tsx`** - שינוי מהותי: הוספת שכבת חבילות לפני פניות
4. **`src/components/support/PackageStatus.tsx`** - עדכון להצגת חבילות מרובות

### זרימת הנתונים:

**שלב חבילות:**
```
POST support3 { email }
-> [{ packages: [{ id, סוג חבילה, כמות בחבילה, כמות שנותרה, ... }] }]
```

**שלב פניות (לחיצה על חבילה):**
```
POST support2 { package_id: "recWgOOHphD4AT9dO" }
-> רשימת פניות של אותה חבילה
```

**שלב פנייה בודדת (לחיצה על פנייה):**
```
POST support2 { ticket_id: "..." }
-> פרטי פנייה + תקשורת
```

### ניהול State ב-SupportMyTickets:
```typescript
const [packages, setPackages] = useState<PackageDetail[]>([]);
const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
const [tickets, setTickets] = useState<Ticket[]>([]);
const [isLoadingPackages, setIsLoadingPackages] = useState(false);
const [isLoadingTickets, setIsLoadingTickets] = useState(false);
```

### UX:
- כשבוחרים חבילה, מוצג spinner ואז רשימת הפניות
- כפתור "חזרה לחבילות" מעל רשימת הפניות
- אם חבילה ריקה (0 פניות בשימוש) - הודעה "אין פניות בחבילה זו"
- כפתור רכישת חבילה חדשה תמיד זמין

