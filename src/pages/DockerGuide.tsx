import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ChevronDown, ChevronUp, Terminal, Server, GitBranch, Package, Play, Globe, RefreshCw, CheckCircle2, AlertTriangle, Wrench, FolderCheck, Info } from "lucide-react";
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

// Directory reminder box - appears before critical steps
const DirectoryReminder = () => (
  <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 my-4 flex items-center gap-3">
    <FolderCheck className="h-5 w-5 text-amber-600 flex-shrink-0" />
    <span className="text-amber-800 text-sm">
      ⚠️ לפני הפקודה הבאה – וודאו שאתם בתיקיית הפרויקט: <code className="bg-amber-200 px-1 rounded">pwd</code>
    </span>
  </div>
);

// Options box - for showing two parallel options
const OptionsBox = ({ 
  optionA, 
  optionB,
  note
}: { 
  optionA: { title: string; content: React.ReactNode };
  optionB: { title: string; content: React.ReactNode };
  note?: string;
}) => (
  <div className="my-6">
    {note && (
      <div className="bg-purple-100 border-r-4 border-purple-500 p-4 rounded-lg mb-4">
        <div className="flex items-center gap-2 text-purple-800 font-bold">
          <Info className="h-5 w-5" />
          <span>{note}</span>
        </div>
      </div>
    )}
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5">
        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">א׳</span>
          {optionA.title}
        </h4>
        {optionA.content}
      </div>
      <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-5">
        <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
          <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">ב׳</span>
          {optionB.title}
        </h4>
        {optionB.content}
      </div>
    </div>
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
      <span>💡 חוק ברזל: תמיד בדקי איפה את נמצאת!</span>
    </div>
    <div className="text-amber-900">{children}</div>
  </div>
);

const DockerGuide = () => {
  const tableOfContents = [
    { id: "intro", title: "חיבור לפרויקט והכנת סביבת עבודה", icon: FolderCheck },
    { id: "step1", title: "התחברות לשרת ובדיקה בסיסית", icon: Server },
    { id: "step2", title: "חיבור ל-GitHub (SSH)", icon: GitBranch },
    { id: "step3", title: "יצירת / משיכת תיקיית הפרויקט", icon: Package },
    { id: "step4", title: "בדיקה שאנחנו בתיקייה הנכונה", icon: FolderCheck },
    { id: "step5", title: "בדיקה והתקנת Docker", icon: Package },
    { id: "step6", title: "בדיקה והתקנת Docker Compose", icon: Package },
    { id: "step7", title: "בדיקה והתקנת Node.js ו-NPM", icon: Terminal },
    { id: "step8", title: "יצירת Dockerfile", icon: Terminal },
    { id: "step9", title: "יצירת docker-compose.yml", icon: Terminal },
    { id: "step10", title: "בנייה והרצה של הדוקר", icon: Play },
    { id: "step11", title: "בדיקת לוגים", icon: Terminal },
    { id: "step12", title: "חיבור לדומיין ב-aaPanel", icon: Globe },
    { id: "step13", title: "בדיקות אחרונות", icon: CheckCircle2 },
    { id: "updates", title: "משיכת שינויים (עדכונים)", icon: RefreshCw },
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
            <p className="text-xl text-gray-600 mb-4">
              מדריך שלב-אחר-שלב עם פקודות מוכנות להעתקה
            </p>
            <p className="text-gray-500 text-sm">
              מתאים לכל סוגי השרתים: aaPanel, VPS, AWS, DigitalOcean ועוד
            </p>
          </motion.div>

          {/* Important Notes */}
          <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 mb-8 mt-8">
            <h3 className="text-lg font-bold mb-4 text-blue-900">📋 הערות חשובות לפני שמתחילים:</h3>
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
                <span className="text-blue-900">🔹</span>
                <span><strong>Git הוא הבסיס</strong> – ממנו נבנה האתר, לכן הוא מופיע לפני Docker</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-900">⚠️</span>
                <span>ייתכן שכבר קיימים קונטיינרים שרצים על השרת – לפני שמריצים קונטיינר חדש, <strong>ודאו שהפורט פנוי</strong></span>
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
          
          {/* Intro - Project Setup Overview */}
          <div id="intro">
            <IronRuleBox>
              <p className="mb-4 text-lg">כל העבודה מתבצעת מתוך תיקיית הפרויקט!</p>
              <p className="mb-4">לפני כל פקודה טכנית (Docker, npm, git) – וודאו שאתם בתיקייה הנכונה.</p>
              
              <p className="text-amber-800 mb-2 font-medium">איך בודקים?</p>
              <CodeBlock code="pwd" />
              
              <ExpectedOutput>
                <p>הפלט צריך להראות את הנתיב לתיקיית הפרויקט, למשל:</p>
                <code dir="ltr" className="block mt-2">/home/projects/PROJECT_NAME</code>
                <p className="mt-2">או:</p>
                <code dir="ltr" className="block mt-2">/www/wwwroot/PROJECT_NAME</code>
              </ExpectedOutput>
              
              <p className="text-amber-800 mb-2 font-medium mt-4">ואז לבדוק שהקבצים קיימים:</p>
              <CodeBlock code="ls" />
              
              <p className="text-amber-800 mb-2 font-medium mt-4">קבצים שחייבים להופיע (אחרי שמשכנו מגיט):</p>
              <ul className="list-disc list-inside space-y-1 mr-4 text-amber-900">
                <li><code className="bg-amber-200 px-1 rounded">package.json</code></li>
                <li><code className="bg-amber-200 px-1 rounded">Dockerfile</code> (ניצור בהמשך אם אין)</li>
                <li><code className="bg-amber-200 px-1 rounded">docker-compose.yml</code> (ניצור בהמשך אם אין)</li>
              </ul>
              
              <WarningBox>
                <p>❌ אם הקבצים לא מופיעים — אתם לא בתיקייה הנכונה. אל תריצו שום פקודה!</p>
              </WarningBox>
            </IronRuleBox>
          </div>

          {/* Step 1 - Server Connection */}
          <Section id="step1" title="שלב 1 – התחברות לשרת ובדיקה בסיסית" icon={Server} defaultOpen>
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> מתחברים לשרת דרך SSH כדי להריץ פקודות. אחרי החיבור, בודקים שהשרת תקין.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">1.1 התחברות לשרת</h4>
            <p className="text-gray-600 mb-2">מהמחשב שלך, פתחי Terminal והריצי:</p>
            <CodeBlock code="ssh root@YOUR_SERVER_IP" />
            <ChangeNote>
              <p>החליפי <code className="bg-blue-200 px-1 rounded">YOUR_SERVER_IP</code> בכתובת ה-IP של השרת שלך</p>
            </ChangeNote>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">1.2 בדיקת מערכת ההפעלה</h4>
            <p className="text-gray-600 mb-2">לוודא שהשרת עובד:</p>
            <CodeBlock code="uname -a" />
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">1.3 בדיקת נפח דיסק</h4>
            <p className="text-gray-600 mb-2">לוודא שיש מספיק מקום:</p>
            <CodeBlock code="df -h" />
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">1.4 בדיקת זיכרון</h4>
            <p className="text-gray-600 mb-2">לוודא שיש מספיק RAM:</p>
            <CodeBlock code="free -h" />
            
            <ExpectedOutput>
              <p>אם כל הפקודות עבדו ללא שגיאות – השרת תקין ומוכן לעבודה.</p>
            </ExpectedOutput>
          </Section>

          {/* Step 2 - GitHub Connection (MOVED FROM END) */}
          <Section id="step2" title="שלב 2 – חיבור ל-GitHub (SSH)" icon={GitBranch}>
            <p className="text-gray-600 mb-4">
              <strong>למה עכשיו?</strong> Git הוא הבסיס שממנו נמשוך את הפרויקט. בלי חיבור ל-GitHub, לא נוכל להוריד את הקוד.
            </p>
            
            <h4 className="font-bold text-lg mb-4 text-blue-900">2.1 בדיקה אם כבר יש SSH Key</h4>
            <CodeBlock code="ls ~/.ssh" />
            
            <ExpectedOutput>
              <p>אחד או יותר מהקבצים:</p>
              <code dir="ltr">id_rsa / id_rsa.pub</code> או <code dir="ltr">id_ed25519 / id_ed25519.pub</code>
            </ExpectedOutput>
            
            <p className="text-gray-600 mb-4">✅ אם קיימים → דלגו לשלב 2.3</p>
            <p className="text-gray-600 mb-4">❌ אם התיקייה ריקה או לא קיימת → צריך ליצור מפתח</p>

            <h4 className="font-bold text-lg mb-4 mt-8 text-blue-900">2.2 יצירת SSH Key חדש</h4>
            <CodeBlock code='ssh-keygen -t ed25519 -C "your_email@example.com"' />
            
            <ChangeNote>
              <p>החליפו את <code className="bg-blue-200 px-1 rounded">your_email@example.com</code> באימייל של חשבון GitHub שלכם</p>
            </ChangeNote>
            
            <p className="text-gray-600 mb-4">במהלך התהליך: Enter על הכל (בלי סיסמה)</p>

            <h4 className="font-bold text-lg mb-4 mt-8 text-blue-900">2.3 הצגת המפתח הציבורי</h4>
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

            <h4 className="font-bold text-lg mb-4 mt-8 text-blue-900">2.4 בדיקת חיבור ל-GitHub</h4>
            <CodeBlock code="ssh -T git@github.com" />
            
            <ExpectedOutput>
              <code dir="ltr">Hi username! You've successfully authenticated</code>
            </ExpectedOutput>
            
            <WarningBox>
              <p>אם מקבלים "Permission denied" – המפתח לא נוסף נכון ל-GitHub. חזרו לשלב 2.3.</p>
            </WarningBox>
          </Section>

          {/* Step 3 - Create or Clone Project Folder (SPLIT INTO TWO OPTIONS) */}
          <Section id="step3" title="שלב 3 – יצירת / משיכת תיקיית הפרויקט" icon={Package}>
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> אנחנו צריכים תיקייה שבה יישב הפרויקט. יש שתי דרכים להשיג אותה.
            </p>
            
            <OptionsBox
              note="⚠️ בחרו רק אחת מהאפשרויות – לא את שתיהן!"
              optionA={{
                title: "יצירת תיקייה ידנית",
                content: (
                  <div>
                    <p className="text-gray-600 mb-3 text-sm">מתאים אם אין עדיין ריפו ב-GitHub או שתרצו להעלות קבצים ידנית.</p>
                    <CodeBlock code={`cd /www/wwwroot
mkdir <PROJECT_NAME>
cd <PROJECT_NAME>`} />
                    <ChangeNote>
                      <p className="text-sm">החליפו <code className="bg-blue-200 px-1 rounded">&lt;PROJECT_NAME&gt;</code> בשם הפרויקט</p>
                    </ChangeNote>
                  </div>
                )
              }}
              optionB={{
                title: "משיכת הפרויקט מ-GitHub (Clone)",
                content: (
                  <div>
                    <p className="text-gray-600 mb-3 text-sm">מתאים אם הפרויקט כבר קיים ב-GitHub – הדרך המומלצת!</p>
                    <CodeBlock code={`cd /www/wwwroot
git clone git@github.com:USERNAME/PROJECT_NAME.git
cd PROJECT_NAME`} />
                    <ChangeNote>
                      <p className="text-sm"><code className="bg-purple-200 px-1 rounded">USERNAME</code> → שם המשתמש בגיטהאב</p>
                      <p className="text-sm"><code className="bg-purple-200 px-1 rounded">PROJECT_NAME</code> → שם הריפו</p>
                    </ChangeNote>
                  </div>
                )
              }}
            />
          </Section>

          {/* Step 4 - Verify Directory */}
          <Section id="step4" title="שלב 4 – בדיקה שאנחנו בתיקייה הנכונה" icon={FolderCheck}>
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> זה השלב הקריטי ביותר! רוב הבעיות קורות כי מריצים פקודות מהתיקייה הלא נכונה.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">4.1 בדיקת מיקום נוכחי</h4>
            <CodeBlock code="pwd" />
            
            <ExpectedOutput>
              <code dir="ltr">/www/wwwroot/PROJECT_NAME</code>
              <p className="mt-2">או נתיב דומה שמסתיים בשם הפרויקט שלכם</p>
            </ExpectedOutput>

            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">4.2 בדיקת תוכן התיקייה</h4>
            <CodeBlock code="ls -la" />
            
            <ExpectedOutput>
              <p>רשימת קבצים שכוללת לפחות:</p>
              <ul className="list-disc list-inside mt-2">
                <li><code>package.json</code></li>
                <li>תיקיית <code>src/</code> או <code>pages/</code></li>
              </ul>
            </ExpectedOutput>
            
            <WarningBox>
              <p>❌ אם אתם רואים תיקייה ריקה או קבצים לא מוכרים – אתם לא במקום הנכון!</p>
              <p className="mt-2">פתרון: <code className="bg-yellow-200 px-1 rounded">cd /www/wwwroot/PROJECT_NAME</code></p>
            </WarningBox>
          </Section>

          {/* Step 5 - Docker Installation */}
          <Section id="step5" title="שלב 5 – בדיקה והתקנת Docker" icon={Package}>
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> Docker מאפשר להריץ את האפליקציה בצורה מבודדת ואחידה על כל שרת.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">5.1 בדיקה אם Docker קיים</h4>
            <CodeBlock code="docker -v" />
            
            <ExpectedOutput>
              <code dir="ltr">Docker version 24.x.x, build xxxxxxx</code>
            </ExpectedOutput>
            
            <p className="text-gray-600 mb-4">✅ אם קיבלתם גרסה → דלגו לשלב 6</p>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">5.2 התקנת Docker (אם אין)</h4>
            <CodeBlock code="curl -fsSL https://get.docker.com | sh" />
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">5.3 הפעלת Docker והגדרה להפעלה אוטומטית</h4>
            <CodeBlock code={`systemctl start docker
systemctl enable docker`} />
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">5.4 בדיקה שהכל עובד</h4>
            <CodeBlock code="docker ps" />
            
            <ExpectedOutput>
              <p>טבלה (ריקה או עם קונטיינרים) – ללא שגיאות</p>
            </ExpectedOutput>
          </Section>

          {/* Step 6 - Docker Compose */}
          <Section id="step6" title="שלב 6 – בדיקה והתקנת Docker Compose" icon={Package}>
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> Docker Compose מקל על ניהול קונטיינרים עם קובץ הגדרות אחד.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">6.1 בדיקה</h4>
            <CodeBlock code="docker compose version" />
            
            <ExpectedOutput>
              <code dir="ltr">Docker Compose version v2.27.0</code>
            </ExpectedOutput>
            
            <p className="text-gray-600 mb-4">✅ אם קיבלתם גרסה → דלגו לשלב 7</p>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">6.2 התקנה (אם אין)</h4>
            <CodeBlock code={`mkdir -p /usr/local/lib/docker/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 \\
-o /usr/local/lib/docker/cli-plugins/docker-compose
chmod +x /usr/local/lib/docker/cli-plugins/docker-compose`} />
          </Section>

          {/* Step 7 - Node.js */}
          <Section id="step7" title="שלב 7 – בדיקה והתקנת Node.js ו-NPM" icon={Terminal}>
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> Node.js נדרש לבניית פרויקטים של React/Next.js לפני שמריצים אותם ב-Docker.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">7.1 בדיקה</h4>
            <CodeBlock code={`node -v
npm -v`} />
            
            <ExpectedOutput>
              <code dir="ltr">v20.x.x</code><br/>
              <code dir="ltr">10.x.x</code>
            </ExpectedOutput>
            
            <p className="text-gray-600 mb-4">✅ אם קיבלתם גרסאות → דלגו לשלב 8</p>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">7.2 התקנה (אם אין)</h4>
            <CodeBlock code={`curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs`} />
          </Section>

          {/* Step 8 - Create Dockerfile */}
          <Section id="step8" title="שלב 8 – יצירת Dockerfile (לא לדלג! ❗)" icon={Terminal}>
            <DirectoryReminder />
            
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> ה-Dockerfile מגדיר איך לבנות את האפליקציה ולהריץ אותה.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">8.1 בדיקה אם כבר קיים Dockerfile</h4>
            <CodeBlock code="ls Dockerfile" />
            <p className="text-gray-600 mb-4">אם הקובץ קיים ומתאים → דלגו לשלב 9</p>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">8.2 יצירת Dockerfile</h4>
            <CodeBlock code="nano Dockerfile" />
            
            <p className="text-gray-600 mb-4">הדביקו את התוכן הבא (לפרויקט React / Next / Frontend):</p>
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

          {/* Step 9 - Create docker-compose.yml */}
          <Section id="step9" title="שלב 9 – יצירת docker-compose.yml" icon={Terminal}>
            <DirectoryReminder />
            
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> קובץ זה מגדיר את ההגדרות של הקונטיינר: שם, פורט, התנהגות בהפעלה מחדש.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">9.1 בדיקה אם כבר קיים</h4>
            <CodeBlock code="ls docker-compose.yml" />
            <p className="text-gray-600 mb-4">אם הקובץ קיים ומתאים → דלגו לשלב 10</p>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">9.2 יצירת הקובץ</h4>
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
              <p>החליפו את <code className="bg-blue-200 px-1 rounded">&lt;PROJECT_NAME&gt;</code> בשם הפרויקט שלכם</p>
            </ChangeNote>
            
            <p className="text-gray-600">שמירה ויציאה: <code dir="ltr">CTRL + O</code> → Enter → <code dir="ltr">CTRL + X</code></p>
          </Section>

          {/* Step 10 - Build and Run */}
          <Section id="step10" title="שלב 10 – בנייה והרצה של הדוקר" icon={Play}>
            <DirectoryReminder />
            
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> זה השלב שבו הכל מתחבר – בונים את ה-Image ומריצים את הקונטיינר.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">10.1 בדיקת פורט פנוי</h4>
            <p className="text-gray-600 mb-2">לפני שמריצים, וודאו שהפורט 3000 לא תפוס:</p>
            <CodeBlock code="ss -tulnp | grep 3000" />
            <p className="text-gray-600 mb-4">אם הפלט ריק → הפורט פנוי ✅</p>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">10.2 בנייה</h4>
            <CodeBlock code="docker compose build" />
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">10.3 הרצה</h4>
            <CodeBlock code="docker compose up -d" />
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">10.4 בדיקה</h4>
            <CodeBlock code="docker ps" />
            
            <ExpectedOutput>
              <p>הקונטיינר מופיע ברשימה עם סטטוס <code>"Up"</code></p>
            </ExpectedOutput>
          </Section>

          {/* Step 11 - Logs */}
          <Section id="step11" title="שלב 11 – בדיקת לוגים (חובה אם משהו לא עולה)" icon={Terminal}>
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> אם הקונטיינר לא עולה או נופל, הלוגים יראו בדיוק מה הבעיה.
            </p>
            
            <CodeBlock code="docker logs <PROJECT_NAME>" />
            
            <p className="text-gray-600 mb-4">או לצפייה בזמן אמת:</p>
            <CodeBlock code="docker compose logs -f" />
            
            <ChangeNote>
              <p>החליפו את <code className="bg-blue-200 px-1 rounded">&lt;PROJECT_NAME&gt;</code> בשם הקונטיינר שלכם</p>
            </ChangeNote>
            
            <WarningBox>
              <p>אם יש שגיאות – הלוגים יראו בדיוק מה הבעיה. חפשו שורות עם "error" או "failed".</p>
            </WarningBox>
          </Section>

          {/* Step 12 - Domain */}
          <Section id="step12" title="שלב 12 – חיבור לדומיין דרך aaPanel" icon={Globe}>
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> כדי שהאתר יהיה נגיש דרך דומיין ולא רק דרך IP:PORT.
            </p>
            
            <div className="space-y-4 text-gray-600">
              <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                <p className="font-bold mb-3 text-blue-900">השלבים ב-aaPanel:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>פתחו את aaPanel → Website</li>
                  <li>Add site → הכניסו את הדומיין</li>
                  <li>לכו ל-Proxy / Reverse Proxy</li>
                  <li>הגדירו Target:</li>
                </ol>
                <div className="bg-gray-200 border border-gray-300 p-3 rounded-lg mt-3" dir="ltr">
                  <code>http://127.0.0.1:3000</code>
                </div>
                <p className="mt-3">5. שמרו</p>
              </div>
            </div>
          </Section>

          {/* Step 13 - Final Checks */}
          <Section id="step13" title="שלב 13 – בדיקות אחרונות" icon={CheckCircle2}>
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> לוודא שהכל עובד לפני שמסיימים.
            </p>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">13.1 בדיקת תגובה מהשרת</h4>
            <CodeBlock code="curl http://127.0.0.1:3000" />
            
            <ExpectedOutput>
              <p>תוכן HTML של האתר (או לפחות תגובה כלשהי)</p>
            </ExpectedOutput>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">13.2 בדיקת פורט פתוח</h4>
            <CodeBlock code="ss -tulnp | grep 3000" />
            
            <ExpectedOutput>
              <p>שורה שמראה שהפורט 3000 פתוח ומאזין</p>
            </ExpectedOutput>
            
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">13.3 בדיקה מהדפדפן</h4>
            <p className="text-gray-600">
              פתחו את הדומיין בדפדפן ובדקו שהאתר נטען כראוי.
            </p>
          </Section>

          {/* Updates Section */}
          <div className="mt-12 mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">📦 עדכון הפרויקט</h2>
            <p className="text-gray-600">כשיש שינויים ב-GitHub ורוצים לעדכן את השרת</p>
          </div>
          
          <Section id="updates" title="משיכת שינויים מה-GitHub (עדכונים)" icon={RefreshCw}>
            <DirectoryReminder />
            
            <p className="text-gray-600 mb-4">
              <strong>למה?</strong> כשעובדים עם Git, כל עדכון בקוד מחייב משיכה לשרת ובנייה מחדש.
            </p>
            
            <h4 className="font-bold text-lg mb-4 text-blue-900">1. וידוא מיקום</h4>
            <CodeBlock code="pwd" />
            
            <ExpectedOutput>
              <code dir="ltr">/www/wwwroot/PROJECT_NAME</code>
            </ExpectedOutput>

            <h4 className="font-bold text-lg mb-4 mt-8 text-blue-900">2. משיכת השינויים</h4>
            <CodeBlock code="git pull" />

            <h4 className="font-bold text-lg mb-4 mt-8 text-blue-900">3. בנייה מחדש והרצה</h4>
            <CodeBlock code={`docker stop <PROJECT_NAME>
docker rm <PROJECT_NAME>
docker compose build
docker compose up -d`} />
            
            <ChangeNote>
              <p>החליפו את <code className="bg-blue-200 px-1 rounded">&lt;PROJECT_NAME&gt;</code> בשם הקונטיינר שלכם</p>
            </ChangeNote>
            
            <ExpectedOutput>
              <p>הקונטיינר עולה מחדש עם הקוד המעודכן</p>
            </ExpectedOutput>
          </Section>

          {/* Summary */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-green-700">✅ סיכום – מה עשינו</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "התחברנו לשרת",
                "חיברנו GitHub",
                "משכנו/יצרנו פרויקט",
                "התקנו Docker",
                "התקנו Docker Compose",
                "התקנו Node.js",
                "יצרנו Dockerfile",
                "בנינו והרצנו",
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
