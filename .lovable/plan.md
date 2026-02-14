

# תיקון: ticket_id ריק + שמירה לוקאלית של נתוני פניות

## הבעיה

1. **ticket_id מגיע undefined** - כשלוחצים "צפייה" על פנייה, הניווט שולח `ticket_id=undefined` כי המיפוי של השדה `מזהה_פניה` מה-API לא תואם (ייתכן ששם השדה שונה)
2. **אין שמירה לוקאלית** - נתוני הפניות שנטענו מרשימת החבילות לא נשמרים, ולכן בדף הפנייה הספציפית אין גישה אליהם

## הפתרון

### 1. הוספת console.log לדיבוג שמות השדות
ב-`SupportMyTickets.tsx` - הוספת לוג של ה-raw data שחוזר מה-API כדי לזהות את שמות השדות הנכונים מהוובהוק

### 2. שמירת פניות ב-localStorage
כשהפניות נטענות בהצלחה מה-API ב-`SupportMyTickets.tsx`, לשמור אותן ב-`localStorage` תחת מפתח כמו `support_tickets_{package_id}`

### 3. שמירת פנייה נבחרת ב-localStorage
כשלוחצים "צפייה" על פנייה ספציפית, לשמור את כל פרטי הפנייה ב-`localStorage` תחת מפתח `support_selected_ticket` לפני הניווט

### 4. עדכון `SupportTicketDetail.tsx`
- בטעינה ראשונית, לנסות לקרוא את הפנייה מ-localStorage
- לשלוח את ה-ticket_id לוובהוק `TICKET_DETAIL_WEBHOOK_URL` לקבלת פרטים מלאים
- fallback: אם אין ticket_id ב-URL, לנסות לקרוא מה-localStorage

## פרטים טכניים

### קובץ `src/pages/SupportMyTickets.tsx`

**שינוי 1 - דיבוג (שורה 64):**
```typescript
const rawData = await response.json();
console.log("Raw tickets data from API:", rawData);
```

**שינוי 2 - שמירה לוקאלית של פניות (אחרי שורה 72):**
```typescript
setTickets(mappedTickets);
// שמירה לוקאלית
localStorage.setItem(`support_tickets_${packageId}`, JSON.stringify(mappedTickets));
```

**שינוי 3 - שמירת פנייה לפני ניווט (שורה 285):**
```typescript
onClick={() => {
  // שמירת הפנייה הנבחרת לוקאלית
  localStorage.setItem("support_selected_ticket", JSON.stringify(ticket));
  navigate(`/support/ticket?ticket_id=${ticket.ticket_id}&email=${encodeURIComponent(email)}`);
}}
```

### קובץ `src/pages/SupportTicketDetail.tsx`

**שינוי 1 - קריאת fallback מ-localStorage:**
בפונקציית טעינת הפנייה, אם `ticket_id` חסר מה-URL, לנסות לקרוא מ-localStorage:
```typescript
const ticketId = searchParams.get("ticket_id");
if (!ticketId || ticketId === "undefined") {
  // ניסיון לקרוא מ-localStorage
  const saved = localStorage.getItem("support_selected_ticket");
  if (saved) {
    const savedTicket = JSON.parse(saved);
    // להשתמש ב-savedTicket.ticket_id
  }
}
```

### תוצאה צפויה
- הפניות יישמרו לוקאלית מרגע הטעינה מהחבילה
- לחיצה על "צפייה" תשמור את הפנייה הנבחרת ותעביר ID תקין
- ה-console.log יעזור לזהות את שמות השדות הנכונים אם המיפוי עדיין לא עובד
