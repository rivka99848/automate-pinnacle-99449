

# תיקון: שימוש בקבועי וובהוק במקום כתובות hardcoded

## הבעיה

שני קבצים משתמשים בכתובות וובהוק ישירות בקוד במקום בקבועים מ-`types/support.ts`:

- **`SupportCreate.tsx`** (שורה 113): כתוב ישירות `"https://n8n.chatnaki.co.il/webhook/support1"` - חסר קבוע
- **`SupportTicketDetail.tsx`** (שורה 73): כתוב ישירות `"https://n8n.chatnaki.co.il/webhook/support2"` - במקום `SUPPORT2_WEBHOOK_URL`

## השינויים

### 1. `src/types/support.ts` - הוספת קבוע SUPPORT1
```
export const SUPPORT1_WEBHOOK_URL = "https://n8n.chatnaki.co.il/webhook/support1";
```

### 2. `src/pages/SupportCreate.tsx` - שימוש בקבוע
- ייבוא `SUPPORT1_WEBHOOK_URL` מ-`types/support`
- החלפת הכתובת הישירה בשורה 113 בקבוע

### 3. `src/pages/SupportTicketDetail.tsx` - שימוש בקבוע
- ייבוא `SUPPORT2_WEBHOOK_URL` מ-`types/support`
- החלפת הכתובת הישירה בשורה 73 בקבוע

## סיכום הוובהוקים אחרי התיקון

| קבוע | כתובת | שימוש |
|------|-------|-------|
| `SUPPORT1_WEBHOOK_URL` | `.../webhook/support1` | יצירת פנייה חדשה |
| `SUPPORT2_WEBHOOK_URL` | `.../webhook/support2` | טעינת פניות + פנייה בודדת |
| `SUPPORT3_WEBHOOK_URL` | `.../webhook/support3` | בדיקת חבילות לפי אימייל |
| `REPLY_WEBHOOK_URL` | `.../webhook/1016231e-...` | שליחת תגובה על פנייה |

