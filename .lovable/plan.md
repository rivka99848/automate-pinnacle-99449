

# עדכון וובהוקים בדף פנייה ספציפית

## מצב נוכחי

| פעולה | וובהוק נוכחי |
|-------|-------------|
| טעינת פרטי פנייה | `SUPPORT2_WEBHOOK_URL` (`support2`) |
| שליחת תגובה | `REPLY_WEBHOOK_URL` (`1016231e-...`) |

## מה משתנה

| פעולה | וובהוק חדש |
|-------|-----------|
| טעינת פרטי פנייה | `1016231e-df1b-4668-b55f-c96dcbaf5cbd` |
| שליחת תגובה | `a878879d-4218-4413-9b5e-c1d987dfdf61` |

## פרטים טכניים

### 1. `src/types/support.ts` - עדכון קבועים

- שינוי שם `REPLY_WEBHOOK_URL` ל-`TICKET_DETAIL_WEBHOOK_URL` (כי עכשיו הוא משמש לטעינת פרטי פנייה)
- הוספת קבוע חדש `TICKET_REPLY_WEBHOOK_URL` עם הכתובת החדשה

```typescript
export const TICKET_DETAIL_WEBHOOK_URL = "https://n8n.chatnaki.co.il/webhook/1016231e-df1b-4668-b55f-c96dcbaf5cbd";
export const TICKET_REPLY_WEBHOOK_URL = "https://n8n.chatnaki.co.il/webhook/a878879d-4218-4413-9b5e-c1d987dfdf61";
```

### 2. `src/pages/SupportTicketDetail.tsx` - עדכון שימוש

- שורה 8: שינוי ייבוא ל-`TICKET_DETAIL_WEBHOOK_URL, TICKET_REPLY_WEBHOOK_URL`
- שורה 73: טעינת פרטי פנייה תשתמש ב-`TICKET_DETAIL_WEBHOOK_URL` (במקום `SUPPORT2_WEBHOOK_URL`)
- שליחת תגובה תשתמש ב-`TICKET_REPLY_WEBHOOK_URL` (במקום `REPLY_WEBHOOK_URL`)

### סיכום וובהוקים סופי

| קבוע | כתובת | שימוש |
|------|-------|-------|
| `SUPPORT1_WEBHOOK_URL` | `support1` | יצירת פנייה |
| `SUPPORT2_WEBHOOK_URL` | `support2` | טעינת רשימת פניות לפי חבילה |
| `SUPPORT3_WEBHOOK_URL` | `support3` | בדיקת חבילות לפי אימייל |
| `TICKET_DETAIL_WEBHOOK_URL` | `1016231e-...` | טעינת פרטי פנייה בודדת |
| `TICKET_REPLY_WEBHOOK_URL` | `a878879d-...` | שליחת תגובה על פנייה |

