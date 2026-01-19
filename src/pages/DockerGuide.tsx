import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ChevronDown, ChevronUp, Terminal, Server, GitBranch, Package, Play, Globe, RefreshCw, CheckCircle2, AlertTriangle, Wrench, FolderCheck } from "lucide-react";
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
      <span>מה לשנות:</span>
    </div>
    <div className="text-blue-900">{children}</div>
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

// Iron rule box
const IronRuleBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-400 p-6 rounded-xl my-6 shadow-md">
    <div className="flex items-center gap-3 mb-4 text-amber-700 font-bold text-xl">
      <FolderCheck className="h-7 w-7" />
      <span>💡 תמיד בדקי איפה את נמצאת!</span>
    </div>
    <div className="text-amber-900">{children}</div>
  </div>
);

const DockerGuide = () => {
  const tableOfContents = [
    { id: "iron-rule", title: "חוק ברזל - בדיקת תיקייה", icon: FolderCheck },
    { id: "step1", title: "בדיקה בסיסית של השרת", icon: Server },
    { id: "step2", title: "התקנת Docker", icon: Package },
    { id: "step3", title: "התקנת Docker Compose", icon: Package },
    { id: "step4", title: "התקנת Node.js ו-NPM", icon: Terminal },
    { id: "step5", title: "יצירת תיקיית פרויקט", icon: Package },
    { id: "step6", title: "יצירת Dockerfile", icon: Terminal },
    { id: "step7", title: "יצירת docker-compose.yml", icon: Terminal },
    { id: "step8", title: "בנייה והרצה", icon: Play },
    { id: "step9", title: "בדיקת לוגים", icon: Terminal },
    { id: "step10", title: "חיבור לדומיין ב-aaPanel", icon: Globe },
    { id: "step11", title: "בדיקות אחרונות", icon: CheckCircle2 },
    { id: "github", title: "חיבור ל-GitHub (SSH)", icon: GitBranch },
    { id: "updates", title: "משיכת שינויים", icon: RefreshCw },
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
              מדריך להקמת פרויקט Docker על שרת
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              מדריך שלב-אחר-שלב עם פקודות מוכנות להעתקה
            </p>
          </motion.div>

          {/* Important Notes */}
          <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold mb-4 text-blue-900">הערות חשובות לפני שמתחילים:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-900">🔹</span>
                <span>כל מה שמופיע בתוך <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">&lt;PROJECT_NAME&gt;</code> – להחליף בשם הפרויקט שלך</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">🔹</span>
                <span>כל הפקודות רצות כ־root או משתמש עם sudo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">1️⃣</span>
                <span>ייתכן שכבר קיימים קונטיינרים שרצים על השרת – זה טבעי. לפני שמריצים קונטיינר חדש, <strong>ודאו שהפורט פנוי</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">2️⃣</span>
                <span>אם הפורט תפוס, בחרי פורט אחר או עצרי את הקונטיינר שתופס אותו</span>
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 mb-12">
            <h3 className="text-lg font-bold mb-4 text-gray-900">תוכן עניינים:</h3>
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
          
          {/* Iron Rule - Check Directory */}
          <div id="iron-rule">
            <IronRuleBox>
              <p className="mb-4 text-lg">לפני שמתחילים לעבוד עם Docker או Git, ודאו שאתם נמצאות בתיקייה של הפרויקט!</p>
              <p className="mb-4 font-medium">כל הפקודות חייבות לרוץ מתוך תיקיית האתר.</p>
              
              <p className="text-amber-800 mb-2 font-medium">בדיקה:</p>
              <CodeBlock code="pwd" />
              
              <ExpectedOutput>
                <p>הפלט צריך להראות את הנתיב לתיקיית הפרויקט, למשל:</p>
                <code dir="ltr" className="block mt-2">/home/PROJECT_NAME</code>
                <p className="mt-2">או:</p>
                <code dir="ltr" className="block mt-2">/var/www/PROJECT_NAME</code>
              </ExpectedOutput>
              
              <p className="text-amber-800 mb-2 font-medium mt-4">כדי לעבור לתיקייה:</p>
              <CodeBlock code="cd /נתיב/אל/הפרויקט" />
              
              <p className="text-amber-800 mb-2 font-medium mt-4">לאחר מכן תמיד לבדוק:</p>
              <CodeBlock code="ls" />
              
              <p className="text-amber-800 mb-2 font-medium mt-4">כדי לוודא שיש את הקבצים:</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-amber-900">
                <li><code className="bg-amber-200 px-1 rounded">Dockerfile</code></li>
                <li><code className="bg-amber-200 px-1 rounded">docker-compose.yml</code> (אם קיים)</li>
                <li><code className="bg-amber-200 px-1 rounded">package.json</code></li>
              </ul>
              
              <WarningBox>
                <p>❌ אם לא מופיעים — אתן לא בתיקייה הנכונה, אל תריצו שום פקודה!</p>
              </WarningBox>
            </IronRuleBox>
          </div>

          {/* Step 1 */}
          <Section id="step1" title="שלב 1 – בדיקה בסיסית של השרת" icon={Server} defaultOpen>
            <p className="text-gray-600 mb-4">בדיקת מערכת ההפעלה:</p>
            <CodeBlock code="uname -a" />
            
            <p className="text-gray-600 mb-4">בדיקת נפח דיסק:</p>
            <CodeBlock code="df -h" />
            
            <p className="text-gray-600 mb-4">בדיקת זיכרון:</p>
            <CodeBlock code="free -h" />
          </Section>

          {/* Step 2 */}
          <Section id="step2" title="שלב 2 – בדיקה והתקנה של Docker" icon={Package}>
            <p className="text-gray-600 mb-4">בדיקה אם Docker קיים:</p>
            <CodeBlock code="docker -v" />
            
            <ExpectedOutput>
              <code dir="ltr">Docker version 24.x.x, build xxxxxxx</code>
            </ExpectedOutput>
            
            <p className="text-gray-600 mb-4">אם אין – התקנה:</p>
            <CodeBlock code="curl -fsSL https://get.docker.com | sh" />
            
            <p className="text-gray-600 mb-4">הפעלת Docker והגדרה ל-auto start:</p>
            <CodeBlock code={`systemctl start docker
systemctl enable docker`} />
            
            <p className="text-gray-600 mb-4">בדיקה:</p>
            <CodeBlock code="docker ps" />
            
            <ExpectedOutput>
              <p>טבלה ריקה (בלי קונטיינרים) או רשימת קונטיינרים רצים</p>
            </ExpectedOutput>
          </Section>

          {/* Step 3 */}
          <Section id="step3" title="שלב 3 – בדיקה והתקנה של Docker Compose" icon={Package}>
            <p className="text-gray-600 mb-4">בדיקה:</p>
            <CodeBlock code="docker compose version" />
            
            <ExpectedOutput>
              <code dir="ltr">Docker Compose version v2.27.0</code>
            </ExpectedOutput>
            
            <p className="text-gray-600 mb-4">אם אין – התקנה:</p>
            <CodeBlock code={`mkdir -p /usr/local/lib/docker/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 \\
-o /usr/local/lib/docker/cli-plugins/docker-compose
chmod +x /usr/local/lib/docker/cli-plugins/docker-compose`} />
          </Section>

          {/* Step 4 */}
          <Section id="step4" title="שלב 4 – בדיקה והתקנה של Node.js ו-NPM" icon={Terminal}>
            <p className="text-gray-600 mb-4">בדיקה:</p>
            <CodeBlock code={`node -v
npm -v`} />
            
            <ExpectedOutput>
              <code dir="ltr">v20.x.x</code><br/>
              <code dir="ltr">10.x.x</code>
            </ExpectedOutput>
            
            <p className="text-gray-600 mb-4">אם אין – התקנה:</p>
            <CodeBlock code={`curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs`} />
          </Section>

          {/* Step 5 */}
          <Section id="step5" title="שלב 5 – יצירת תיקיית פרויקט" icon={Package}>
            <CodeBlock code={`cd /www/wwwroot
mkdir <PROJECT_NAME>
cd <PROJECT_NAME>`} />
            
            <ChangeNote>
              <p>החלף את <code className="bg-blue-200 px-1 rounded">&lt;PROJECT_NAME&gt;</code> בשם הפרויקט שלך</p>
            </ChangeNote>
          </Section>

          {/* Step 6 */}
          <Section id="step6" title="שלב 6 – יצירת Dockerfile (לא לדלג! ❗)" icon={Terminal}>
            <CodeBlock code="nano Dockerfile" />
            
            <p className="text-gray-600 mb-4">הדבקה לדוגמה (React / Next / Frontend כללי):</p>
            <CodeBlock code={`FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]`} language="dockerfile" />
            
            <WarningBox>
              <p>שמירה: <code dir="ltr">CTRL + O</code> → Enter → <code dir="ltr">CTRL + X</code></p>
            </WarningBox>
          </Section>

          {/* Step 7 */}
          <Section id="step7" title="שלב 7 – יצירת docker-compose.yml" icon={Terminal}>
            <CodeBlock code="nano docker-compose.yml" />
            
            <CodeBlock code={`version: "3.8"

services:
  app:
    build: .
    container_name: <PROJECT_NAME>
    restart: always
    ports:
      - "3000:3000"`} language="yaml" />
            
            <ChangeNote>
              <p>החלף את <code className="bg-blue-200 px-1 rounded">&lt;PROJECT_NAME&gt;</code> בשם הפרויקט שלך</p>
            </ChangeNote>
            
            <p className="text-gray-600">שמירה ויציאה.</p>
          </Section>

          {/* Step 8 */}
          <Section id="step8" title="שלב 8 – בנייה והרצה של הדוקר" icon={Play}>
            <CodeBlock code="docker compose build" />
            <CodeBlock code="docker compose up -d" />
            
            <p className="text-gray-600 mb-4">בדיקה:</p>
            <CodeBlock code="docker ps" />
            
            <ExpectedOutput>
              <p>הקונטיינר מופיע ברשימה עם סטטוס "Up"</p>
            </ExpectedOutput>
          </Section>

          {/* Step 9 */}
          <Section id="step9" title="שלב 9 – בדיקת לוגים (חובה אם משהו לא עולה)" icon={Terminal}>
            <CodeBlock code="docker logs <PROJECT_NAME>" />
            
            <p className="text-gray-600 mb-4">או:</p>
            <CodeBlock code="docker compose logs -f" />
            
            <WarningBox>
              <p>אם יש שגיאות – הלוגים יראו בדיוק מה הבעיה</p>
            </WarningBox>
          </Section>

          {/* Step 10 */}
          <Section id="step10" title="שלב 10 – חיבור לדומיין דרך aaPanel" icon={Globe}>
            <div className="space-y-4 text-gray-600">
              <p>1. פתח את aaPanel → Website</p>
              <p>2. Add site → הכנס את הדומיין</p>
              <p>3. Proxy / Reverse Proxy:</p>
              <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg" dir="ltr">
                <p>Target: <code className="bg-gray-200 px-2 py-1 rounded">http://127.0.0.1:3000</code></p>
              </div>
              <p>4. שמור</p>
            </div>
          </Section>

          {/* Step 11 */}
          <Section id="step11" title="שלב 11 – בדיקות אחרונות" icon={CheckCircle2}>
            <CodeBlock code="curl http://127.0.0.1:3000" />
            
            <p className="text-gray-600 mb-4">בדיקת פתיחת פורט:</p>
            <CodeBlock code="ss -tulnp | grep 3000" />
            
            <ExpectedOutput>
              <p>שורה שמראה שהפורט 3000 פתוח ומאזין</p>
            </ExpectedOutput>
          </Section>

          {/* GitHub Section */}
          <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">חיבור ל-GitHub</h2>
          </div>

          <Section id="github" title="חיבור השרת ל-GitHub (SSH + Clone)" icon={GitBranch}>
            <h4 className="font-bold text-lg mb-4">2.1 בדיקה אם כבר יש SSH Key</h4>
            <CodeBlock code="ls ~/.ssh" />
            
            <ExpectedOutput>
              <p>אחד או יותר מהקבצים:</p>
              <code dir="ltr">id_rsa / id_rsa.pub</code> או <code dir="ltr">id_ed25519 / id_ed25519.pub</code>
            </ExpectedOutput>
            
            <p className="text-gray-600 mb-4">✅ אם קיימים → דלג לשלב 2.3</p>
            <p className="text-gray-600 mb-4">❌ אם התיקייה ריקה או לא קיימת → צריך ליצור מפתח</p>

            <h4 className="font-bold text-lg mb-4 mt-8">2.2 יצירת SSH Key חדש</h4>
            <CodeBlock code='ssh-keygen -t ed25519 -C "your_email@example.com"' />
            
            <ChangeNote>
              <p>החלף את <code className="bg-blue-200 px-1 rounded">your_email@example.com</code> באימייל של חשבון GitHub שלך</p>
            </ChangeNote>
            
            <p className="text-gray-600 mb-4">במהלך התהליך: Enter על הכל (בלי סיסמה)</p>

            <h4 className="font-bold text-lg mb-4 mt-8">2.3 הצגת המפתח הציבורי</h4>
            <CodeBlock code="cat ~/.ssh/id_ed25519.pub" />
            
            <ExpectedOutput>
              <p>שורה ארוכה שמתחילה ב-:</p>
              <code dir="ltr">ssh-ed25519 AAAAC3...</code>
            </ExpectedOutput>
            
            <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg my-4">
              <p className="font-bold mb-2 text-gray-900">👉 את כל השורה הזו:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-600">
                <li>מעתיקים</li>
                <li>נכנסים ל-GitHub → Settings → SSH and GPG keys</li>
                <li>New SSH key → מדביקים → Save</li>
              </ol>
            </div>

            <h4 className="font-bold text-lg mb-4 mt-8">2.4 בדיקת חיבור ל-GitHub</h4>
            <CodeBlock code="ssh -T git@github.com" />
            
            <ExpectedOutput>
              <code dir="ltr">Hi username! You've successfully authenticated</code>
            </ExpectedOutput>

            <h4 className="font-bold text-lg mb-4 mt-8">2.5 יצירת תיקיית פרויקט בשרת</h4>
            <CodeBlock code={`mkdir projects
cd projects`} />

            <h4 className="font-bold text-lg mb-4 mt-8">2.6 משיכת הפרויקט מ-GitHub (Clone)</h4>
            <CodeBlock code="git clone git@github.com:USERNAME/PROJECT_NAME.git" />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">USERNAME</code> → שם המשתמש בגיטהאב</p>
              <p><code className="bg-blue-200 px-1 rounded">PROJECT_NAME</code> → שם הריפו</p>
            </ChangeNote>
          </Section>

          {/* Updates Section */}
          <Section id="updates" title="משיכת שינויים מה-GitHub (עדכונים)" icon={RefreshCw}>
            <h4 className="font-bold text-lg mb-4">בדיקה מאיזו תיקייה עובדים</h4>
            <CodeBlock code="pwd" />
            
            <ExpectedOutput>
              <code dir="ltr">.../projects/project-name</code>
            </ExpectedOutput>

            <h4 className="font-bold text-lg mb-4 mt-8">משיכת שינויים</h4>
            <CodeBlock code="git pull" />

            <h4 className="font-bold text-lg mb-4 mt-8">בנייה מחדש והרצה</h4>
            <CodeBlock code={`docker stop <PROJECT_NAME>
docker rm <PROJECT_NAME>
docker build -t <PROJECT_NAME> .
docker run -d -p 3000:3000 --name <PROJECT_NAME> <PROJECT_NAME>`} />
          </Section>

          {/* Summary */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-green-700">סיכום – מה בדקנו שיש בשרת ✅</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Docker",
                "Docker Compose", 
                "Node.js",
                "NPM",
                "בניית Image",
                "הרצת Container",
                "חיבור ל-aaPanel",
                "SSH + GitHub",
                "משיכת שינויים"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <Button asChild className="mb-4">
            <Link to="/contact">צור קשר</Link>
          </Button>
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Smartbiz. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  );
};

export default DockerGuide;
