import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ChevronDown, ChevronUp, Terminal, Server, GitBranch, Package, Play, Globe, RefreshCw, CheckCircle2, AlertTriangle, Wrench, FolderCheck, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// CodeBlock component with copy functionality
const CodeBlock = ({ code, language = "bash" }: { code: string; language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4" dir="ltr">
      <pre className="bg-gray-200 border border-gray-300 rounded-lg p-4 pr-12 overflow-x-auto text-sm text-gray-800 font-mono">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded hover:bg-gray-300 transition-colors text-gray-600 hover:text-gray-800"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
};

// Expected output box
const ExpectedOutput = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-green-100 border-r-4 border-green-500 p-4 rounded-lg my-4">
    <div className="flex items-center gap-2 mb-2 text-green-700 font-bold">
      <CheckCircle2 className="h-5 w-5" />
      <span>מה אמור לחזור?</span>
    </div>
    <div className="text-green-900">{children}</div>
  </div>
);

// Warning box
const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-yellow-100 border-r-4 border-yellow-500 p-4 rounded-lg my-4">
    <div className="flex items-center gap-2 mb-2 text-yellow-700 font-bold">
      <AlertTriangle className="h-5 w-5" />
      <span>שים לב!</span>
    </div>
    <div className="text-yellow-900">{children}</div>
  </div>
);

// Change note box
const ChangeNote = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue-100 border-r-4 border-blue-500 p-4 rounded-lg my-4">
    <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold">
      <Wrench className="h-5 w-5" />
      <span>🔧 מה להחליף:</span>
    </div>
    <div className="text-blue-900">{children}</div>
  </div>
);

// Tips box
const TipsBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-purple-100 border-r-4 border-purple-500 p-4 rounded-lg my-4">
    <div className="flex items-center gap-2 mb-2 text-purple-700 font-bold">
      <Lightbulb className="h-5 w-5" />
      <span>💡 טיפ:</span>
    </div>
    <div className="text-purple-900">{children}</div>
  </div>
);

// Collapsible section
const Section = ({ 
  id, 
  title, 
  icon: Icon, 
  children,
  defaultOpen = false
}: { 
  id: string; 
  title: string; 
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div id={id} className="border border-gray-300 rounded-xl overflow-hidden mb-4 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 transition-colors text-right"
      >
        <div className="flex items-center gap-3">
          <Icon className="h-6 w-6 text-blue-900" />
          <span className="text-lg font-bold text-blue-900">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="p-6 bg-white"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const DockerGuide = () => {
  const tableOfContents = [
    { id: "step1", title: "התחברות לשרת ב-SSH", icon: Server },
    { id: "step2", title: "יצירת תיקייה לפרויקט", icon: FolderCheck },
    { id: "step3", title: "חיבור ל-GitHub", icon: GitBranch },
    { id: "step4", title: "בדיקת פורט פנוי", icon: Terminal },
    { id: "step5", title: "יצירת Dockerfile", icon: Terminal },
    { id: "step6", title: "בניית Docker Image", icon: Package },
    { id: "step7", title: "הרצת הקונטיינר", icon: Play },
    { id: "step8", title: "משיכת שינויים מ-Git", icon: RefreshCw },
    { id: "step9", title: "חיבור לדומיין (Nginx)", icon: Globe },
    { id: "step10", title: "בדיקה אחרונה", icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900" dir="rtl">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              מדריך מקיף: העלאת אתר לשרת עם Docker
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              כולל חיבור GitHub, בדיקות פורט, משיכת שינויים וחיבור לדומיין
            </p>
            <p className="text-gray-500 text-sm">
              מתאים ל־React / Vite / פרויקטים סטטיים, שרת Linux כללי
            </p>
          </motion.div>

          {/* Important Notes */}
          <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 mb-8 mt-8">
            <h3 className="text-lg font-bold mb-4 text-blue-900">📋 הערות חשובות לפני שמתחילים:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-900">🔹</span>
                <span>כל מה שמופיע בתוך <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">&lt;...&gt;</code> – להחליף בערך האמיתי שלכם</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">🔹</span>
                <span>כל הפקודות רצות כ־root או משתמש עם sudo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">🔹</span>
                <span>הפקודות מוכנות להעתקה – לחצו על אייקון ההעתקה</span>
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 mb-12">
            <h3 className="text-lg font-bold mb-4 text-gray-900">📑 תוכן עניינים:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-900"
                >
                  <item.icon className="h-4 w-4 text-blue-900" />
                  <span className="text-blue-900/70">{index + 1}.</span>
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* Step 1 - SSH Connection */}
          <Section id="step1" title="1️⃣ התחברות לשרת ב-SSH" icon={Server} defaultOpen>
            <p className="text-gray-600 mb-4">
              מתחילים בהתחברות לשרת מהמחשב שלכם.
            </p>
            
            <CodeBlock code="ssh root@<SERVER_IP>" />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;SERVER_IP&gt;</code> → כתובת ה-IP של השרת שלכם</p>
            </ChangeNote>
            
            <ExpectedOutput>
              <p>התחברות מוצלחת לשרת ומעבר לשורת פקודה חדשה</p>
            </ExpectedOutput>
          </Section>

          {/* Step 2 - Create Project Folder */}
          <Section id="step2" title="2️⃣ יצירת תיקייה לפרויקט" icon={FolderCheck}>
            <p className="text-gray-600 mb-4">
              יוצרים תיקייה חדשה לפרויקט ונכנסים אליה.
            </p>
            
            <CodeBlock code={`mkdir <PROJECT_NAME>
cd <PROJECT_NAME>`} />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PROJECT_NAME&gt;</code> → שם התיקייה / האתר שלכם</p>
            </ChangeNote>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">בדיקה:</h4>
            <CodeBlock code="ls" />
            
            <ExpectedOutput>
              <p>התיקייה ריקה בשלב זה (עד שנמשוך מגיט)</p>
            </ExpectedOutput>
          </Section>

          {/* Step 3 - GitHub Connection */}
          <Section id="step3" title="3️⃣ חיבור ל-GitHub" icon={GitBranch}>
            <p className="text-gray-600 mb-4">
              מושכים את הפרויקט מ-GitHub לתוך התיקייה שיצרנו.
            </p>
            
            <CodeBlock code="git clone git@github.com:<USERNAME>/<REPO_NAME>.git ." />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;USERNAME&gt;</code> → שם המשתמש שלכם ב-GitHub</p>
              <p><code className="bg-blue-200 px-1 rounded">&lt;REPO_NAME&gt;</code> → שם הריפו שלכם</p>
            </ChangeNote>
            
            <TipsBox>
              <p>הנקודה בסוף (<code>.</code>) אומרת "תמשוך לתיקייה הנוכחית" ולא ליצור תת-תיקייה</p>
            </TipsBox>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">בדיקה:</h4>
            <CodeBlock code="ls" />
            
            <ExpectedOutput>
              <p>רשימת קבצי הפרויקט (package.json, src/, וכו׳)</p>
            </ExpectedOutput>
          </Section>

          {/* Step 4 - Check Port */}
          <Section id="step4" title="4️⃣ בדיקת פורט פנוי" icon={Terminal}>
            <p className="text-gray-600 mb-4">
              לפני הרצת Docker, בודקים שהפורט שנרצה להשתמש בו פנוי.
            </p>
            
            <CodeBlock code="lsof -i :<PORT>" />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PORT&gt;</code> → הפורט שבו תרצו שהאתר ירוץ (למשל 3001)</p>
            </ChangeNote>
            
            <ExpectedOutput>
              <p>אם הפלט <strong>ריק</strong> → הפורט פנוי ✅</p>
              <p>אם יש פלט → הפורט תפוס, בחרו פורט אחר</p>
            </ExpectedOutput>
            
            <TipsBox>
              <p>פורטים נפוצים: 3000, 3001, 3002, 8080, 8081</p>
            </TipsBox>
          </Section>

          {/* Step 5 - Create Dockerfile */}
          <Section id="step5" title="5️⃣ יצירת Dockerfile" icon={Terminal}>
            <p className="text-gray-600 mb-4">
              יוצרים קובץ הגדרות שמסביר ל-Docker איך לבנות את האתר.
            </p>
            
            <CodeBlock code="nano Dockerfile" />
            
            <p className="text-gray-600 mb-4">הדביקו את התוכן הבא:</p>
            
            <CodeBlock code={`# ---------- Build ----------
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- Serve ----------
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`} language="dockerfile" />
            
            <WarningBox>
              <p>שמירה ויציאה: <code dir="ltr">CTRL+X</code> → <code>Y</code> → <code>Enter</code></p>
            </WarningBox>
          </Section>

          {/* Step 6 - Build Docker Image */}
          <Section id="step6" title="6️⃣ בניית Docker Image" icon={Package}>
            <p className="text-gray-600 mb-4">
              בונים את ה-Image של הפרויקט (זה לוקח כמה דקות בפעם הראשונה).
            </p>
            
            <CodeBlock code="docker build -t <PROJECT_NAME> ." />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PROJECT_NAME&gt;</code> → שם האתר/פרויקט</p>
            </ChangeNote>
            
            <ExpectedOutput>
              <p>סדרת שלבים שמסתיימת ב: <code dir="ltr">Successfully built...</code></p>
            </ExpectedOutput>
          </Section>

          {/* Step 7 - Run Container */}
          <Section id="step7" title="7️⃣ הרצת הקונטיינר" icon={Play}>
            <p className="text-gray-600 mb-4">
              מריצים את הקונטיינר עם הפורט שבדקנו שפנוי.
            </p>
            
            <CodeBlock code="docker run -d -p <PORT>:80 --name <PROJECT_NAME> <PROJECT_NAME>" />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PORT&gt;</code> → הפורט שבדקתם פנוי (למשל 3001)</p>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PROJECT_NAME&gt;</code> → שם האתר/פרויקט</p>
            </ChangeNote>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">בדיקה שהקונטיינר רץ:</h4>
            <CodeBlock code="docker ps" />
            
            <ExpectedOutput>
              <p>טבלה שמראה את הקונטיינר עם סטטוס <code>"Up"</code></p>
            </ExpectedOutput>
          </Section>

          {/* Step 8 - Pull Changes */}
          <Section id="step8" title="8️⃣ משיכת שינויים מה-Git בעתיד" icon={RefreshCw}>
            <p className="text-gray-600 mb-4">
              כשתרצו לעדכן את האתר עם שינויים חדשים מ-GitHub:
            </p>
            
            <CodeBlock code={`cd /path/to/<PROJECT_NAME>
git pull origin main
docker restart <PROJECT_NAME>`} />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PROJECT_NAME&gt;</code> → שם הפרויקט</p>
              <p><code className="bg-blue-200 px-1 rounded">main</code> → ה-branch שאתם רוצים למשוך</p>
            </ChangeNote>
            
            <WarningBox>
              <p>אם שיניתם את ה-Dockerfile או package.json, צריך לבנות מחדש:</p>
            </WarningBox>
            
            <CodeBlock code={`docker stop <PROJECT_NAME>
docker rm <PROJECT_NAME>
docker build -t <PROJECT_NAME> .
docker run -d -p <PORT>:80 --name <PROJECT_NAME> <PROJECT_NAME>`} />
          </Section>

          {/* Step 9 - Domain Connection */}
          <Section id="step9" title="9️⃣ חיבור לדומיין (ללא aaPanel)" icon={Globe}>
            <p className="text-gray-600 mb-4">
              הגדרת Nginx כ-Reverse Proxy כדי שהאתר יהיה נגיש דרך דומיין.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">9.1 התקנת Nginx:</h4>
            <CodeBlock code={`sudo apt update
sudo apt install nginx -y`} />
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">9.2 יצירת קובץ קונפיגורציה לדומיין:</h4>
            <CodeBlock code="sudo nano /etc/nginx/sites-available/<DOMAIN>" />
            
            <p className="text-gray-600 mb-4">הדביקו את התוכן הבא:</p>
            
            <CodeBlock code={`server {
    listen 80;
    server_name <DOMAIN>;

    location / {
        proxy_pass http://localhost:<PORT>;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`} language="nginx" />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;DOMAIN&gt;</code> → הדומיין שלכם (למשל <code>mysite.com</code>)</p>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PORT&gt;</code> → הפורט שבו הקונטיינר רץ (למשל 3001)</p>
            </ChangeNote>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">9.3 הפעלת הקונפיגורציה:</h4>
            <CodeBlock code={`sudo ln -s /etc/nginx/sites-available/<DOMAIN> /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx`} />
            
            <ExpectedOutput>
              <p>הפקודה <code>nginx -t</code> צריכה להחזיר: <code dir="ltr">syntax is ok</code></p>
            </ExpectedOutput>
          </Section>

          {/* Step 10 - Final Check */}
          <Section id="step10" title="🔟 בדיקה אחרונה" icon={CheckCircle2}>
            <p className="text-gray-600 mb-4">
              בקרו בדפדפן בכתובת:
            </p>
            
            <div className="bg-gray-200 border border-gray-300 p-4 rounded-lg my-4 text-center" dir="ltr">
              <code className="text-lg">http://&lt;DOMAIN&gt;</code>
            </div>
            
            <ExpectedOutput>
              <p>אם הכול נכון – האתר מופיע! 🎉</p>
            </ExpectedOutput>
          </Section>

          {/* Tips Section */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-700">💡 טיפים חשובים</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>ודאו שהקונטיינר רץ בפורט פנוי – בדקו לפני כל ריצה</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>כשמושכים שינויים מ-GitHub, תמיד עשו <code className="bg-purple-200 px-1 rounded">git pull</code> לפני <code className="bg-purple-200 px-1 rounded">docker restart</code></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>בדקו שה-DNS של הדומיין מצביע ל-IP הנכון של השרת</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>לצפייה בלוגים של הקונטיינר: <code className="bg-purple-200 px-1 rounded" dir="ltr">docker logs &lt;PROJECT_NAME&gt;</code></span>
              </li>
            </ul>
          </div>

          {/* Summary */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-green-700">✅ סיכום – מה עשינו</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "התחברנו לשרת",
                "יצרנו תיקייה",
                "משכנו מ-GitHub",
                "בדקנו פורט פנוי",
                "יצרנו Dockerfile",
                "בנינו Image",
                "הרצנו קונטיינר",
                "הגדרנו Nginx",
                "חיברנו דומיין"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-medium">
                🎉 כל הכבוד! הפרויקט שלכם רץ על השרת ומוכן לעולם.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4">
          <Link to="/contact">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">
              צור קשר
            </Button>
          </Link>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SmartBiz. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DockerGuide;
