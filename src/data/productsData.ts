export interface Product {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: {
    original: string;
    current: string;
  };
  image: string;
  features: string[];
  beforeProblems: Array<{ title: string; description: string }>;
  afterSolutions: Array<{ title: string; description: string }>;
}

export const productsData: Product[] = [
  {
    id: 1,
    slug: "crm-system",
    name: "מערכת CRM - ניהול פרויקטים ומשימות לקוחות וכספים",
    shortDescription: "מערכת ניהול לקוחות מתקדמת שמארגנת את כל הפרויקטים, המשימות, הלקוחות והכספים במקום אחד.",
    fullDescription: "זו השקעה חד-פעמית שתחסוך לכם שעות של עבודה, תמנע אובדן לידים ולקוחות ותיתן לכם שליטה מלאה על העסק",
    price: {
      original: "8,000 ש\"ח",
      current: "2,400 ש\"ח",
    },
    image: "/src/assets/dashboard-screen.jpg",
    features: [
      "ניהול לקוחות ולידים בממשק אחד",
      "ניהול פרויקטים ומשימות",
      "מעקב אחרי כל שיחה ועסקה",
      "אוטומציות חכמות למשימות",
      "דשבורד עם תובנות בזמן אמת",
      "אינטגרציה עם יומן גוגל ו-Email",
      "שעתיים התאמה כלולים",
    ],
    beforeProblems: [
      {
        title: "ניהול מבולגן ומסורבל",
        description: "אלפי שורות בטבלה, קשה למצוא נתונים, כל המידע מפוזר",
      },
      {
        title: "אין תזכורות אוטומטיות",
        description: "אתם שוכחים משימות, מפספסים לידים ולקוחות נעלמים",
      },
      {
        title: "תיעוד ידני ומתיש",
        description: "אתם כל הזמן צריכים לעדכן נתונים, להוסיף נוסחאות ולוודא שהכול עובד",
      },
      {
        title: "בלגן בניהול לקוחות",
        description: "אין היסטוריה מסודרת, כל מידע מפוזר בקבצים שונים",
      },
    ],
    afterSolutions: [
      {
        title: "הכול במקום אחד",
        description: "מערכת חכמה שמארגנת לכם את הלידים, הלקוחות והמשימות בצורה ברורה",
      },
      {
        title: "פולואפים ותזכורות אוטומטיות",
        description: "המערכת דואגת שלא תפספסו אף ליד או משימה",
      },
      {
        title: "הכול קורה לבד",
        description: "אוטומציות מתקדמות דואגות לניהול חכם בלי שתצטרכו להתעסק בזה",
      },
      {
        title: "כרטיס לקוח מסודר",
        description: "כל המידע על כל לקוח מרוכז במקום אחד: שיחות, משימות, תשלומים ועוד",
      },
    ],
  },
];
