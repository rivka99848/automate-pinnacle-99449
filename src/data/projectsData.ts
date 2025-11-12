export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  images: string[];
  features: string[];
  quote: string;
  author: string;
  blogLink: string;
  color: string;
  slug: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    number: "01",
    title: "🏝 ניהול פניות אוטומטי לרשת נופש יוקרתית",
    slug: "nichuta-vacation-bot",
    description: `כששאלות כמו "יש דיל?", "פנוי בסופ״ש?" ו״מה המחיר?" לא הפסיקו להגיע – 
      מנהל רשת ניחותא מצא את עצמו קבור בהתכתבויות. הפתרון? בוט חכם עם סוכן AI 
      שמנהל את כל התקשורת עם הלקוחות – מהבירור ועד לסגירה. התוצאה: וואטסאפ שקט יותר, 
      לקוחות מרוצים יותר, והזמנות שנכנסות לבד.`,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "💬 זמינות 24/7",
      "📸 שליחת תמונות ועדכונים בזמן אמת",
      "📅 בדיקת זמינות בלחיצת כפתור",
      "🎯 הצגת מבצעים עונתיים ודילים חמים",
    ],
    quote: "הוואטסאפ הפך לשקט במובן הטוב. הלקוחות מקבלים מענה מיידי, ההזמנות נכנסות מהר יותר, ואני סוף־סוף חזרתי להשקיע בפיתוח העסק במקום ברדיפה אחרי שאלות.",
    author: "משה, מנהל רשת ניחותא",
    blogLink: "/blog/nichuta-bot",
    color: "blue",
  },
  {
    id: 2,
    number: "02",
    title: "💼 אוטומציה מלאה לעסק רפואי עמוס בפניות",
    slug: "medical-automation",
    description: `בעל עסק רפואי טובע בפניות, מיילים ומסמכים? גם הלקוח שלנו היה שם – עד שהמערכת 
      שבנינו עשתה מהפכה. טופס חכם, תיקיות אוטומטיות, ניהול משימות והתראות – הכול רץ לבד. 
      פחות התעסקות, יותר סדר ויותר זמן לעסוק במה שבאמת חשוב.`,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    features: [
      "📋 טופס פנייה מעוצב וידידותי",
      "📂 פתיחת תיקייה אוטומטית ב-Google Drive",
      "📧 שליחת מייל אישור ללקוח",
      "📅 יצירת משימה ביומן",
      "📲 התראות למייל ולוואטסאפ",
      "📑 שמירה מסודרת ב-Google Sheets",
    ],
    quote: "בתוך ימים ספורים הכאוס הפך לסדר. הפניות מתועדות אוטומטית, המסמכים נשמרים במקום אחד, והעסק חוסך שעות עבודה רבות בכל יום. חזרתי להתמקד במה שבאמת חשוב לי.",
    author: "בעל עסק רפואי",
    blogLink: "/blog/medical-automation",
    color: "green",
  },
];
