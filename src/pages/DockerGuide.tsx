import { useState, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ChevronDown, ChevronUp, Terminal, Server, GitBranch, Package, Play, Globe, RefreshCw, CheckCircle2, AlertTriangle, Wrench, FolderCheck, Lightbulb, Key, FileCode, Shield, Settings, Edit3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Context for variable values
interface VariableValues {
  serverIp: string;
  projectFolder: string;
  githubUsername: string;
  repoName: string;
  hostPort: string;
  domainName: string;
  email: string;
}

const VariablesContext = createContext<VariableValues>({
  serverIp: "<SERVER_IP>",
  projectFolder: "<PROJECT_FOLDER>",
  githubUsername: "<USERNAME>",
  repoName: "<REPO_NAME>",
  hostPort: "<HOST_PORT>",
  domainName: "<DOMAIN_NAME>",
  email: "your_email@example.com",
});

// Function to replace placeholders with actual values
const replacePlaceholders = (text: string, values: VariableValues): string => {
  return text
    .replace(/<SERVER_IP>/g, values.serverIp || "<SERVER_IP>")
    .replace(/<PROJECT_FOLDER>/g, values.projectFolder || "<PROJECT_FOLDER>")
    .replace(/<USERNAME>/g, values.githubUsername || "<USERNAME>")
    .replace(/<REPO_NAME>/g, values.repoName || "<REPO_NAME>")
    .replace(/<HOST_PORT>/g, values.hostPort || "<HOST_PORT>")
    .replace(/<PORT>/g, values.hostPort || "<PORT>")
    .replace(/<DOMAIN_NAME>/g, values.domainName || "<DOMAIN_NAME>")
    .replace(/your_email@example\.com/g, values.email || "your_email@example.com");
};

// CodeBlock component with copy functionality
const CodeBlock = ({ code, language = "bash" }: { code: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const values = useContext(VariablesContext);
  
  const processedCode = replacePlaceholders(code, values);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(processedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Check if any placeholder was replaced with an actual value
  const hasReplacements = processedCode !== code;

  return (
    <div className="relative group my-4" dir="ltr">
      <pre className={`border rounded-lg p-4 pr-12 overflow-x-auto text-sm font-mono ${hasReplacements ? 'bg-green-50 border-green-300 text-gray-800' : 'bg-gray-200 border-gray-300 text-gray-800'}`}>
        <code>{processedCode}</code>
      </pre>
      <button
        onClick={handleCopy}
        className={`absolute top-3 right-3 p-1.5 rounded transition-colors ${hasReplacements ? 'hover:bg-green-200 text-green-700 hover:text-green-800' : 'hover:bg-gray-300 text-gray-600 hover:text-gray-800'}`}
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

// Variables input form component
const VariablesForm = ({ values, onChange }: { 
  values: VariableValues; 
  onChange: (key: keyof VariableValues, value: string) => void;
}) => {
  const fields = [
    { key: "serverIp" as const, label: "כתובת IP של השרת", placeholder: "123.45.67.89", icon: Server },
    { key: "projectFolder" as const, label: "שם תיקיית הפרויקט", placeholder: "my-website", icon: FolderCheck },
    { key: "githubUsername" as const, label: "שם משתמש GitHub", placeholder: "myusername", icon: GitBranch },
    { key: "repoName" as const, label: "שם הריפו", placeholder: "my-repo", icon: Package },
    { key: "hostPort" as const, label: "פורט (למשל 3001)", placeholder: "3001", icon: Terminal },
    { key: "domainName" as const, label: "שם הדומיין", placeholder: "example.com", icon: Globe },
    { key: "email" as const, label: "אימייל (ל-GitHub)", placeholder: "you@example.com", icon: Key },
  ];

  const filledCount = Object.values(values).filter(v => v && !v.startsWith("<") && v !== "your_email@example.com").length;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Edit3 className="h-6 w-6 text-blue-700" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900">הזן את הנתונים שלך</h3>
          <p className="text-sm text-blue-600">הפקודות במדריך יתעדכנו אוטומטית</p>
        </div>
        <div className="mr-auto bg-blue-100 px-3 py-1 rounded-full text-sm font-medium text-blue-700">
          {filledCount}/{fields.length} שדות מולאו
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fields.map(({ key, label, placeholder, icon: Icon }) => (
          <div key={key} className="space-y-1.5">
            <Label htmlFor={key} className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Icon className="h-4 w-4 text-blue-600" />
              {label}
            </Label>
            <Input
              id={key}
              value={values[key].startsWith("<") || values[key] === "your_email@example.com" ? "" : values[key]}
              onChange={(e) => onChange(key, e.target.value)}
              placeholder={placeholder}
              className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              dir="ltr"
            />
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center gap-2 text-sm text-blue-700 bg-blue-100 p-3 rounded-lg">
        <Lightbulb className="h-4 w-4 flex-shrink-0" />
        <span>ברגע שתמלא שדה, כל הפקודות במדריך יתעדכנו אוטומטית עם הערך שהזנת ויודגשו בירוק</span>
      </div>
    </div>
  );
};

const DockerGuide = () => {
  const [variableValues, setVariableValues] = useState<VariableValues>({
    serverIp: "<SERVER_IP>",
    projectFolder: "<PROJECT_FOLDER>",
    githubUsername: "<USERNAME>",
    repoName: "<REPO_NAME>",
    hostPort: "<HOST_PORT>",
    domainName: "<DOMAIN_NAME>",
    email: "your_email@example.com",
  });

  const handleVariableChange = (key: keyof VariableValues, value: string) => {
    setVariableValues(prev => ({
      ...prev,
      [key]: value || (key === "email" ? "your_email@example.com" : `<${key.toUpperCase()}>`)
    }));
  };

  const tableOfContents = [
    { id: "intro", title: "בחירת מסלול", icon: Shield },
    { id: "track-a", title: "מסלול A: עם aaPanel", icon: Settings },
    { id: "track-b", title: "מסלול B: שרת Ubuntu נקי", icon: Terminal },
    { id: "commands", title: "פקודות ניהול שימושיות", icon: Wrench },
    { id: "troubleshooting", title: "פתרון בעיות נפוצות", icon: AlertTriangle },
    { id: "tips", title: "טיפים חשובים", icon: Lightbulb },
    { id: "summary", title: "סיכום זריזות", icon: CheckCircle2 },
  ];

  return (
    <VariablesContext.Provider value={variableValues}>
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
              🚀 מדריך מלא: הרצת אתר Docker וחיבור לדומיין
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              כולל חיבור GitHub, docker-compose, SSL והכל מוכן להעתקה
            </p>
            <p className="text-gray-500 text-sm">
              מתאים ל־React / Vite / Vue / פרויקטים סטטיים, שרת Linux כללי
            </p>
          </motion.div>

          {/* Variables Form */}
          <div className="mt-12">
            <VariablesForm values={variableValues} onChange={handleVariableChange} />
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
          
          {/* Track Selection */}
          <Section id="intro" title="🎯 בחרי את המסלול המתאים לך" icon={Shield} defaultOpen>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#track-a" className="block p-6 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-colors">
                <h4 className="font-bold text-lg text-blue-900 mb-2">📘 מסלול A</h4>
                <p className="text-gray-600">שרת עם aaPanel/cPanel/Plesk</p>
              </a>
              <a href="#track-b" className="block p-6 bg-green-50 border-2 border-green-200 rounded-xl hover:bg-green-100 transition-colors">
                <h4 className="font-bold text-lg text-green-900 mb-2">📗 מסלול B</h4>
                <p className="text-gray-600">שרת Ubuntu נקי (ללא ממשק ניהול)</p>
              </a>
            </div>
          </Section>

          {/* ========== TRACK A - aaPanel ========== */}
          <div id="track-a" className="mt-8 mb-4 p-4 bg-blue-100 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-900">📘 מסלול A: עם aaPanel/cPanel</h2>
          </div>

          {/* A Step 1 - SSH Connection */}
          <Section id="a-step1" title="1️⃣ התחברות לשרת" icon={Server}>
            <CodeBlock code="ssh root@<SERVER_IP>" />
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;SERVER_IP&gt;</code> → כתובת ה-IP של השרת</p>
            </ChangeNote>
          </Section>

          {/* A Step 2 - Create Project Folder */}
          <Section id="a-step2" title="2️⃣ יצירת תיקיית פרויקט" icon={FolderCheck}>
            <CodeBlock code={`mkdir -p /www/wwwroot/<PROJECT_FOLDER>
cd /www/wwwroot/<PROJECT_FOLDER>`} />
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PROJECT_FOLDER&gt;</code> → שם הפרויקט (למשל: myapp)</p>
            </ChangeNote>
            <ExpectedOutput>
              <p>✅ בדיקה שזה עבד:</p>
              <CodeBlock code="pwd" />
              <p>אמור להחזיר: <code dir="ltr">/www/wwwroot/&lt;PROJECT_FOLDER&gt;</code></p>
            </ExpectedOutput>
          </Section>

          {/* A Step 3 - GitHub SSH Setup */}
          <Section id="a-step3" title="3️⃣ הגדרת SSH ל-GitHub (חד-פעמי)" icon={Key}>
            <CodeBlock code={`ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub`} />
            <TipsBox>
              <p>העתיקי את המפתח ל: <strong>GitHub.com → Settings → SSH Keys → New SSH key</strong></p>
            </TipsBox>
            <p className="text-gray-600 mt-4 mb-2">בדיקה:</p>
            <CodeBlock code="ssh -T git@github.com" />
            <ExpectedOutput>
              <p>✅ אמור להחזיר: <code>Hi &lt;USERNAME&gt;! You've successfully authenticated</code></p>
            </ExpectedOutput>
          </Section>

          {/* A Step 4 - Clone from GitHub */}
          <Section id="a-step4" title="4️⃣ משיכת קוד מ-GitHub" icon={GitBranch}>
            <CodeBlock code="git clone git@github.com:<USERNAME>/<REPO_NAME>.git ." />
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;USERNAME&gt;</code> → שם המשתמש ב-GitHub</p>
              <p><code className="bg-blue-200 px-1 rounded">&lt;REPO_NAME&gt;</code> → שם הריפו</p>
            </ChangeNote>
            <ExpectedOutput>
              <p>✅ בדיקה שזה הפרויקט הנכון:</p>
              <CodeBlock code="git remote -v" />
              <p>אמור להראות: <code dir="ltr">origin  git@github.com:&lt;USERNAME&gt;/&lt;REPO_NAME&gt;.git</code></p>
              <CodeBlock code="ls -la" />
              <p>אמור להראות את הקבצים: <code>package.json</code>, <code>Dockerfile</code>, וכו'</p>
            </ExpectedOutput>
          </Section>

          {/* A Step 5 - Check Port */}
          <Section id="a-step5" title="5️⃣ בדיקת פורט פנוי" icon={Terminal}>
            <CodeBlock code="lsof -i :<PORT>" />
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PORT&gt;</code> → הפורט שבו האתר ירוץ (למשל 3001)</p>
            </ChangeNote>
            <ExpectedOutput>
              <p>✅ אם הפורט פנוי: לא יחזיר כלום (טוב!)</p>
              <p>❌ אם הפורט תפוס: יראה תהליך → בחרי פורט אחר (3002, 3003...)</p>
            </ExpectedOutput>
          </Section>

          {/* A Step 6 - Create Dockerfile */}
          <Section id="a-step6" title="6️⃣ יצירת Dockerfile" icon={FileCode}>
            <CodeBlock code="nano Dockerfile" />
            <p className="text-gray-600 mb-4">תוכן לדבק (Vite/React/Vue):</p>
            <CodeBlock code={`FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`} language="dockerfile" />
            <WarningBox>
              <p>⚠️ מתאים ל-Vite/React/Vue. אם את משתמשת ב-Next.js/PHP - צריך Dockerfile שונה.</p>
              <p className="mt-2">שמירה: <code dir="ltr">Ctrl+O</code> → <code>Enter</code> → <code dir="ltr">Ctrl+X</code></p>
            </WarningBox>
          </Section>

          {/* A Step 7 - Create docker-compose.yml */}
          <Section id="a-step7" title="7️⃣ יצירת docker-compose.yml" icon={Package}>
            <CodeBlock code="nano docker-compose.yml" />
            <p className="text-gray-600 mb-4">תוכן לדבק:</p>
            <CodeBlock code={`version: '3.8'

services:
  web:
    build: .
    ports:
      - "<HOST_PORT>:80"
    restart: unless-stopped`} language="yaml" />
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;HOST_PORT&gt;</code> → הפורט על השרת (למשל 3001)</p>
            </ChangeNote>
            <WarningBox>
              <p>שמירה: <code dir="ltr">Ctrl+O</code> → <code>Enter</code> → <code dir="ltr">Ctrl+X</code></p>
            </WarningBox>
          </Section>

          {/* A Step 8 - Run the Site */}
          <Section id="a-step8" title="8️⃣ הרצת האתר" icon={Play}>
            <CodeBlock code="docker compose up --build -d" />
            <ExpectedOutput>
              <p>✅ בדיקה שהקונטיינר רץ:</p>
              <CodeBlock code="docker ps" />
              <p>אמור להראות: השורה עם הקונטיינר שלך עם <code>Up X seconds</code></p>
            </ExpectedOutput>
            <p className="text-gray-600 mt-4 mb-2">בדיקה ישירה:</p>
            <CodeBlock code="curl -I http://127.0.0.1:<HOST_PORT>" />
            <ExpectedOutput>
              <p>אמור להחזיר: <code>HTTP/1.1 200 OK</code></p>
            </ExpectedOutput>
            <TipsBox>
              <p>בדיקה בדפדפן: <code dir="ltr">http://&lt;SERVER_IP&gt;:&lt;HOST_PORT&gt;</code></p>
            </TipsBox>
          </Section>

          {/* A Step 9 - Pull Changes */}
          <Section id="a-step9" title="9️⃣ משיכת שינויים בעתיד" icon={RefreshCw}>
            <WarningBox>
              <p>⚠️ לפני משיכה - וודאי שאת בתיקייה הנכונה:</p>
            </WarningBox>
            <CodeBlock code="pwd" />
            <ExpectedOutput>
              <p>אמור להחזיר: <code dir="ltr">/www/wwwroot/&lt;PROJECT_FOLDER&gt;</code></p>
            </ExpectedOutput>
            <CodeBlock code="git remote -v" />
            <ExpectedOutput>
              <p>אמור להראות את הריפו הנכון: <code dir="ltr">origin  git@github.com:&lt;USERNAME&gt;/&lt;REPO_NAME&gt;.git</code></p>
            </ExpectedOutput>
            <h4 className="font-bold text-lg mb-3 mt-6 text-blue-900">✅ אם זה נכון - המשיכי:</h4>
            <CodeBlock code={`cd /www/wwwroot/<PROJECT_FOLDER>
git pull origin main
docker compose down
docker compose up --build -d`} />
            <ExpectedOutput>
              <p>✅ בדיקה שהעדכון עבד:</p>
              <CodeBlock code="docker ps" />
              <p>תראי שהקונטיינר <code>Created X seconds ago</code> (זמן חדש!)</p>
              <CodeBlock code="curl -I http://127.0.0.1:<HOST_PORT>" />
              <p>אמור להחזיר: <code>HTTP/1.1 200 OK</code></p>
            </ExpectedOutput>
            <TipsBox>
              <p>🚀 <strong>זהו! 4 שורות לעדכון מלא.</strong></p>
            </TipsBox>
          </Section>

          {/* A Step 10 - Domain Connection with aaPanel */}
          <Section id="a-step10" title="🔟 חיבור לדומיין + SSL" icon={Globe}>
            <h4 className="font-bold text-lg mb-3 text-blue-900">א. הגדרת DNS</h4>
            <p className="text-gray-600 mb-4">צרי רשומות A אצל ספק הדומיין:</p>
            <div className="bg-gray-200 border border-gray-300 p-4 rounded-lg my-4 font-mono text-sm" dir="ltr">
              <p>@   → &lt;SERVER_IP&gt;</p>
              <p>www → &lt;SERVER_IP&gt;</p>
            </div>

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">ב. יצירת Reverse Proxy ב-aaPanel</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>aaPanel</strong> → <strong>Website</strong> → <strong>Proxy Project</strong></li>
              <li><strong>Add Proxy</strong></li>
              <li>מלאי:
                <ul className="list-disc list-inside mr-4 mt-2 space-y-1">
                  <li><strong>Domain:</strong> <code>&lt;DOMAIN_NAME&gt;</code></li>
                  <li><strong>Add www:</strong> ✅</li>
                  <li><strong>Proxy Type:</strong> Reverse Proxy</li>
                  <li><strong>Target URL:</strong> <code dir="ltr">http://127.0.0.1:&lt;HOST_PORT&gt;</code></li>
                </ul>
              </li>
              <li><strong>Submit</strong></li>
            </ol>

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">ג. הוספת SSL</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>לחצי על שם האתר ברשימה</li>
              <li><strong>SSL</strong> → <strong>Let's Encrypt</strong></li>
              <li>סמני את הדומיינים (<code>&lt;DOMAIN_NAME&gt;</code> + <code>www.&lt;DOMAIN_NAME&gt;</code>)</li>
              <li><strong>Apply</strong></li>
            </ol>

            <div className="bg-green-100 border border-green-300 p-4 rounded-lg mt-6">
              <p className="text-green-800 font-bold text-center">🔒 זהו! האתר זמין ב-https://&lt;DOMAIN_NAME&gt;</p>
            </div>
          </Section>

          {/* Cloudflare Warning */}
          <Section id="cloudflare" title="⚠️ אזהרה חשובה - Cloudflare Proxy" icon={AlertTriangle}>
            <p className="text-gray-600 mb-4">אם הדומיין עובר דרך Cloudflare:</p>
            <WarningBox>
              <p><strong>כבי את ה-Proxy (☁️ → ⚪)</strong> עבור:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>אתרים עם WebSocket (n8n, Socket.io)</li>
                <li>Long-running connections</li>
                <li>אתרים שצריכים חיבור ישיר</li>
              </ul>
            </WarningBox>
            <p className="text-gray-600 mt-4 mb-2"><strong>איך לכבות:</strong></p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Cloudflare Dashboard → DNS</li>
              <li>לחצי על הענן הכתום ליד הדומיין</li>
              <li>הופך לאפור (DNS only)</li>
            </ol>
          </Section>

          {/* ========== TRACK B - Clean Ubuntu ========== */}
          <div id="track-b" className="mt-12 mb-4 p-4 bg-green-100 rounded-xl">
            <h2 className="text-2xl font-bold text-green-900">📗 מסלול B: שרת Ubuntu נקי (ללא aaPanel)</h2>
          </div>

          {/* B Step 1 - SSH Connection */}
          <Section id="b-step1" title="1️⃣ התחברות לשרת" icon={Server}>
            <CodeBlock code="ssh root@<SERVER_IP>" />
          </Section>

          {/* B Step 2 - Create Project Folder */}
          <Section id="b-step2" title="2️⃣ יצירת תיקיית פרויקט" icon={FolderCheck}>
            <CodeBlock code={`mkdir -p /www/wwwroot/<PROJECT_FOLDER>
cd /www/wwwroot/<PROJECT_FOLDER>`} />
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PROJECT_FOLDER&gt;</code> → שם הפרויקט</p>
            </ChangeNote>
          </Section>

          {/* B Step 3 - GitHub SSH Setup */}
          <Section id="b-step3" title="3️⃣ הגדרת SSH ל-GitHub (זהה למסלול A)" icon={Key}>
            <CodeBlock code={`ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub`} />
          </Section>

          {/* B Step 4 - Clone from GitHub */}
          <Section id="b-step4" title="4️⃣ משיכת קוד מ-GitHub" icon={GitBranch}>
            <CodeBlock code="git clone git@github.com:<USERNAME>/<REPO_NAME>.git ." />
          </Section>

          {/* B Step 5 - Check Port */}
          <Section id="b-step5" title="5️⃣ בדיקת פורט פנוי" icon={Terminal}>
            <CodeBlock code="lsof -i :<PORT>" />
          </Section>

          {/* B Step 6 - Create Dockerfile */}
          <Section id="b-step6" title="6️⃣ יצירת Dockerfile (זהה למסלול A)" icon={FileCode}>
            <CodeBlock code="nano Dockerfile" />
          </Section>

          {/* B Step 7 - Create docker-compose.yml */}
          <Section id="b-step7" title="7️⃣ יצירת docker-compose.yml (זהה למסלול A)" icon={Package}>
            <CodeBlock code="nano docker-compose.yml" />
          </Section>

          {/* B Step 8 - Run the Site */}
          <Section id="b-step8" title="8️⃣ הרצת האתר" icon={Play}>
            <CodeBlock code="docker compose up --build -d" />
          </Section>

          {/* B Step 9 - Pull Changes */}
          <Section id="b-step9" title="9️⃣ משיכת שינויים בעתיד (זהה למסלול A)" icon={RefreshCw}>
            <CodeBlock code={`cd /www/wwwroot/<PROJECT_FOLDER>
git pull origin main
docker compose down
docker compose up --build -d`} />
          </Section>

          {/* B Step 10 - Domain Connection (Manual) */}
          <Section id="b-step10" title="🔟 חיבור לדומיין + SSL (ידני)" icon={Globe}>
            <h4 className="font-bold text-lg mb-3 text-blue-900">א. הגדרת DNS (זהה למסלול A)</h4>
            <div className="bg-gray-200 border border-gray-300 p-4 rounded-lg my-4 font-mono text-sm" dir="ltr">
              <p>@   → &lt;SERVER_IP&gt;</p>
              <p>www → &lt;SERVER_IP&gt;</p>
            </div>

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">ב. ⚠️ הסרת קובץ default (חשוב מאוד!)</h4>
            <CodeBlock code="rm /etc/nginx/sites-enabled/default" />
            <WarningBox>
              <p><strong>למה?</strong> הקובץ הזה גורם לכל האתרים להופנות למקום הלא נכון!</p>
            </WarningBox>

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">ג. התקנת Nginx (אם לא מותקן)</h4>
            <CodeBlock code="apt update && apt install nginx -y" />

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">ד. יצירת קובץ הגדרות Nginx</h4>
            <CodeBlock code="nano /etc/nginx/sites-available/<DOMAIN_NAME>" />
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;DOMAIN_NAME&gt;</code> → הדומיין שלך (למשל: example.com)</p>
            </ChangeNote>
            <p className="text-gray-600 mb-4">תוכן לדבק:</p>
            <CodeBlock code={`server {
    listen 80;
    server_name <DOMAIN_NAME> www.<DOMAIN_NAME>;

    location / {
        proxy_pass http://127.0.0.1:<HOST_PORT>;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`} language="nginx" />
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;DOMAIN_NAME&gt;</code> → הדומיין שלך</p>
              <p><code className="bg-blue-200 px-1 rounded">&lt;HOST_PORT&gt;</code> → הפורט (למשל 3001)</p>
            </ChangeNote>
            <WarningBox>
              <p>שמירה: <code dir="ltr">Ctrl+O</code> → <code>Enter</code> → <code dir="ltr">Ctrl+X</code></p>
            </WarningBox>
            <ExpectedOutput>
              <p>✅ בדיקה שהקובץ נוצר:</p>
              <CodeBlock code="cat /etc/nginx/sites-available/<DOMAIN_NAME>" />
              <p>אמור להראות את התוכן שהדבקת</p>
            </ExpectedOutput>

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">ה. הפעלת ההגדרות</h4>
            <CodeBlock code={`ln -s /etc/nginx/sites-available/<DOMAIN_NAME> /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx`} />
            <ExpectedOutput>
              <p>אחרי <code>nginx -t</code> אמור להחזיר:</p>
              <code dir="ltr" className="block mt-2 bg-gray-100 p-2 rounded">nginx: configuration file /etc/nginx/nginx.conf test is successful</code>
            </ExpectedOutput>
            <p className="text-gray-600 mt-4 mb-2">בדיקה שהאתר עובד:</p>
            <CodeBlock code="curl -I http://<DOMAIN_NAME>" />
            <ExpectedOutput>
              <p>אמור להחזיר: <code>HTTP/1.1 200 OK</code> או redirect ל-HTTPS</p>
            </ExpectedOutput>

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">ו. הוספת SSL</h4>
            <CodeBlock code={`apt install certbot python3-certbot-nginx -y
certbot --nginx -d <DOMAIN_NAME> -d www.<DOMAIN_NAME>`} />
            <ExpectedOutput>
              <p>✅ בדיקה שSSL עובד:</p>
              <CodeBlock code="curl -I https://<DOMAIN_NAME>" />
              <p>אמור להחזיר: <code>HTTP/2 200</code> (שים לב ל-HTTP/2!)</p>
              <p className="mt-2">בדפדפן: <code dir="ltr">https://&lt;DOMAIN_NAME&gt;</code> → אמור להיות <strong>🔒 מנעול ירוק</strong></p>
            </ExpectedOutput>

            <div className="bg-green-100 border border-green-300 p-4 rounded-lg mt-6">
              <p className="text-green-800 font-bold text-center">🔒 זהו! האתר זמין ב-https://&lt;DOMAIN_NAME&gt;</p>
            </div>
          </Section>

          {/* ========== USEFUL COMMANDS ========== */}
          <Section id="commands" title="🛠️ פקודות ניהול שימושיות" icon={Settings}>
            <CodeBlock code={`# לוגים של קונטיינר
docker logs <container_name>
docker logs -f <container_name>  # מצב live

# כניסה לקונטיינר
docker exec -it <container_name> sh

# רשימת קונטיינרים
docker ps -a

# עצירת קונטיינר
docker compose down

# הפעלה מחדש
docker compose restart

# ניקוי images ישנים
docker image prune -a`} />
          </Section>

          {/* ========== TROUBLESHOOTING ========== */}
          <Section id="troubleshooting" title="🚨 פתרון בעיות נפוצות" icon={AlertTriangle}>
            <h4 className="font-bold text-lg mb-3 text-blue-900">בעיה: 502 Bad Gateway</h4>
            <p className="text-gray-600 mb-2">אבחון:</p>
            <CodeBlock code={`docker ps  # האם הקונטיינר רץ?
docker logs <container_name>  # מה השגיאה?
curl -I http://127.0.0.1:<HOST_PORT>  # האם עובד ישירות?`} />
            <TipsBox>
              <p><strong>פתרונות:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>קונטיינר לא רץ → <code>docker compose up -d</code></li>
                <li>פורט שגוי ב-Nginx → בדקי את proxy_pass</li>
                <li>Cloudflare חוסם → כבי Proxy</li>
              </ul>
            </TipsBox>

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">בעיה: כל האתרים מופנים לאותו מקום</h4>
            <p className="text-gray-600 mb-2">סיבה: קובץ <code>/etc/nginx/sites-enabled/default</code> עם <code>default_server</code></p>
            <CodeBlock code={`rm /etc/nginx/sites-enabled/default
systemctl reload nginx`} />

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">בעיה: שגיאת SSL (ERR_CERT_AUTHORITY_INVALID)</h4>
            <TipsBox>
              <p><strong>פתרונות:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>עם aaPanel:</strong> SSL → Let's Encrypt → Apply</li>
                <li><strong>בלי aaPanel:</strong> <code>certbot --nginx -d &lt;DOMAIN_NAME&gt;</code></li>
                <li><strong>Cloudflare:</strong> שני SSL mode ל-Full או Full (strict)</li>
              </ul>
            </TipsBox>

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">בעיה: docker compose לא עובד</h4>
            <p className="text-gray-600 mb-2">בדיקה:</p>
            <CodeBlock code="docker compose version" />
            <p className="text-gray-600 mt-4 mb-2">אם לא מותקן:</p>
            <CodeBlock code={`apt update
apt install docker-compose-plugin`} />
          </Section>

          {/* ========== TIPS ========== */}
          <Section id="tips" title="💡 טיפים חשובים" icon={Lightbulb}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">✅ תמיד עשי:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>בדיקת פורט לפני הפעלת קונטיינר חדש</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><code>docker compose up --build</code> כדי לבנות מחדש אחרי שינויים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Snapshot אחרי שהכל עובד</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><code>nginx -t</code> לפני reload</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 mb-3">❌ לעולם אל:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>תפעילי קונטיינר על פורט תפוס</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>תשכחי את ה-<code>--build</code> בעדכונים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>תשאירי <code>default_server</code> בNginx</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>תשתמשי ב-Cloudflare Proxy לWebSocket</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          {/* ========== QUICK SUMMARY ========== */}
          <Section id="summary" title="🎯 סיכום זריזות" icon={CheckCircle2}>
            <h4 className="font-bold text-lg mb-3 text-blue-900">הקמת אתר חדש:</h4>
            <CodeBlock code={`# 1. יצירת תיקייה
mkdir -p /www/wwwroot/<PROJECT_FOLDER> && cd /www/wwwroot/<PROJECT_FOLDER>

# ✅ בדיקה:
pwd  # אמור להחזיר: /www/wwwroot/<PROJECT_FOLDER>

# 2. Clone
git clone git@github.com:<USERNAME>/<REPO_NAME>.git .

# ✅ בדיקה:
git remote -v  # אמור להראות את הריפו הנכון
ls -la  # אמור להראות package.json

# 3. הרצה
docker compose up --build -d

# ✅ בדיקה:
docker ps  # אמור להראות קונטיינר רץ
curl -I http://127.0.0.1:<HOST_PORT>  # אמור להחזיר 200 OK

# 4. חיבור לדומיין (aaPanel או Nginx ידני)`} />

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">עדכון אתר קיים:</h4>
            <CodeBlock code={`# ✅ בדיקה שאת בפרויקט הנכון:
pwd  # /www/wwwroot/<PROJECT_FOLDER>
git remote -v  # הריפו הנכון

# עדכון:
cd /www/wwwroot/<PROJECT_FOLDER>
git pull origin main
docker compose up --build -d

# ✅ בדיקה:
docker ps  # תראי Created X seconds ago (זמן חדש!)
curl -I http://127.0.0.1:<HOST_PORT>  # 200 OK`} />

            <TipsBox>
              <p>🚀 <strong>זהו!</strong></p>
            </TipsBox>

            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">📝 רשימת בדיקות מהירה (Checklist)</h4>
            <p className="text-gray-600 mb-4">לפני משיכת שינויים, תמיד ריצי:</p>
            <CodeBlock code={`# 1. איפה אני?
pwd

# 2. זה הפרויקט הנכון?
git remote -v

# 3. על איזה branch?
git branch

# 4. יש שינויים לא שמורים?
git status`} />
            <ExpectedOutput>
              <p><strong>אם הכל נראה טוב</strong> ✅ → <code>git pull origin main</code></p>
            </ExpectedOutput>
          </Section>

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
    </VariablesContext.Provider>
  );
};

export default DockerGuide;
