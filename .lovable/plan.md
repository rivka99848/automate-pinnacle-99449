
# תוכנית: עדכון מערכת הפניות

## מה צריך להשתנות

### 1. מיפוי נכון של שדות מהשרת

התגובה מ-`support2` מגיעה בשדות בעברית:
- `מזהה_פניה` -> ticket_id
- `תאריך_פניה` -> created_at
- `סטטוס_פניה` -> status
- `נושא_הפניה` -> subject
- `תוכן_פניה` -> message
- `מסמכים_מצורפים` -> attachments
- `תקשורת` -> replies (מערך)

התגובה מ-`support3` כבר כוללת נתוני חבילה מפורטים:
- `totalQuantity` -> סה"כ פניות בחבילה
- `usedQuantity` -> פניות בשימוש
- `remainingQuantity` -> פניות שנותרו

### 2. עדכון `usePackageStatus.ts` - מיפוי נתוני החבילה

למפות את `totalQuantity`, `usedQuantity`, `remainingQuantity` מהתגובה לממשק `PackageInfo`.

### 3. עדכון `PackageStatus.tsx` - תצוגת חבילה

במקום "נשארו מעט פניות", להציג:
- **X פניות בשימוש מתוך Y** (לדוגמה: "1 פניות בשימוש מתוך 10")
- **נותרו Z פניות** 

ללא הודעת אזהרה על "מעט פניות" - פשוט להציג את המספרים.

### 4. עדכון `SupportMyTickets.tsx` - מיפוי שדות עבריים

הפניות מגיעות בשדות עברית. צריך למפות אותן לממשק `Ticket` כדי להציג נכון.

### 5. עדכון `SupportTicketDetail.tsx` - שני שינויים מרכזיים

**א. מיפוי שדות עבריים:**
התגובה מ-`support2` עם `ticket_id` מחזירה גם שדות בעברית + מערך `תקשורת`.

**ב. שינוי webhook לתגובות:**
כשהלקוח עונה על פנייה, לשלוח ל-webhook החדש:
```
POST https://n8n.chatnaki.co.il/webhook/1016231e-df1b-4668-b55f-c96dcbaf5cbd
```
במקום `support3` הנוכחי.

**ג. העלאת קובץ בתגובה:**
להוסיף אפשרות להעלות קובץ (תמונה/PDF) כחלק מהתגובה, בדומה לטופס פתיחת פנייה.

## פרטים טכניים

### קבצים לעריכה:

1. **`src/hooks/usePackageStatus.ts`** - מיפוי `totalQuantity`/`usedQuantity`/`remainingQuantity`
2. **`src/types/support.ts`** - הוספת `used_tickets` ל-`PackageInfo`, הוספת URL webhook חדש לתגובות
3. **`src/components/support/PackageStatus.tsx`** - שינוי תצוגה ל"X בשימוש מתוך Y, נותרו Z"
4. **`src/pages/SupportMyTickets.tsx`** - מיפוי שדות עבריים מהתגובה
5. **`src/pages/SupportTicketDetail.tsx`** - מיפוי שדות + webhook חדש לתגובות + העלאת קובץ

### שינויים בממשק PackageInfo:
```typescript
interface PackageInfo {
  has_package: boolean;
  package_status?: string;
  remaining_tickets?: number;
  used_tickets?: number;      // חדש
  total_tickets?: number;
  package_name?: string;
  expires_at?: string;
  message?: string;
}
```

### שינוי בתצוגת PackageStatus:
- ירוק: "חבילה פעילה - 1 בשימוש מתוך 10, נותרו 9 פניות"
- אדום: "אין חבילה פעילה" או "נגמרו הפניות" (0 remaining)
- ללא הודעת "נשארו מעט" - רק מספרים

### Webhook תגובות חדש:
```
POST https://n8n.chatnaki.co.il/webhook/1016231e-df1b-4668-b55f-c96dcbaf5cbd
Body: {
  ticket_id: "...",
  message: "...",
  sender_type: "customer",
  attachments: [{ filename, content_type, data }]  // אופציונלי
}
```

### מיפוי שדות בטעינת פניות (SupportMyTickets):
```typescript
const mappedTickets = data.map(item => ({
  ticket_id: item.מזהה_פניה || item.ticket_id,
  subject: item.נושא_הפניה || item.subject,
  status: item.סטטוס_פניה || item.status,
  created_at: item.תאריך_פניה || item.created_at,
}));
```

### מיפוי שדות בטעינת פנייה בודדת (SupportTicketDetail):
```typescript
const mappedTicket = {
  ticket_id: data.מזהה_פניה || data.ticket_id,
  subject: data.נושא_הפניה || data.subject,
  message: data.תוכן_פניה || data.message,
  status: data.סטטוס_פניה || data.status,
  created_at: data.תאריך_פניה || data.created_at,
  attachments: data.מסמכים_מצורפים,
  replies: data.תקשורת || data.replies || [],
};
```
