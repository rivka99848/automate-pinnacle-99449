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
    { id: "step1", title: "התחברות לשרת ב-SSH", icon: Server },
    { id: "step2", title: "יצירת תיקייה לפרויקט", icon: FolderCheck },
    { id: "step3", title: "הגדרת SSH ל-GitHub (חד-פעמי)", icon: Key },
    { id: "step4", title: "משיכת קוד מ-GitHub", icon: GitBranch },
    { id: "step5", title: "בדיקת פורט פנוי", icon: Terminal },
    { id: "step6", title: "יצירת Dockerfile", icon: FileCode },
    { id: "step7", title: "יצירת docker-compose.yml", icon: Package },
    { id: "step8", title: "הרצת האתר", icon: Play },
    { id: "step9", title: "משיכת שינויים בעתיד", icon: RefreshCw },
    { id: "step10", title: "חיבור לדומיין", icon: Globe },
    { id: "step11", title: "פקודות שימושיות", icon: Settings },
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
              🔹 מדריך Plug & Play: הרצת אתר ב-Docker וחיבור לדומיין
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
          
          {/* Step 1 - SSH Connection */}
          <Section id="step1" title="1️⃣ התחברות לשרת דרך SSH" icon={Server} defaultOpen>
            <CodeBlock code="ssh root@<SERVER_IP>" />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;SERVER_IP&gt;</code> → כתובת ה-IP של השרת שלך</p>
            </ChangeNote>
          </Section>

          {/* Step 2 - Create Project Folder */}
          <Section id="step2" title="2️⃣ יצירת תיקייה לפרויקט" icon={FolderCheck}>
            <CodeBlock code={`mkdir <PROJECT_FOLDER>
cd <PROJECT_FOLDER>`} />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PROJECT_FOLDER&gt;</code> → שם התיקייה</p>
            </ChangeNote>
          </Section>

          {/* Step 3 - GitHub SSH Setup */}
          <Section id="step3" title="3️⃣ הגדרת SSH ל-GitHub (חד-פעמי)" icon={Key}>
            <p className="text-gray-600 mb-4">
              אם זו הפעם הראשונה שאתם מתחברים ל-GitHub מהשרת הזה:
            </p>
            
            <CodeBlock code={`ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub`} />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">your_email@example.com</code> → האימייל שלכם ב-GitHub</p>
            </ChangeNote>
            
            <TipsBox>
              <p>העתיקו את המפתח שמופיע והוסיפו אותו ב:</p>
              <p className="mt-2"><strong>GitHub.com → Settings → SSH Keys → New SSH key</strong></p>
            </TipsBox>
          </Section>

          {/* Step 4 - Clone from GitHub */}
          <Section id="step4" title="4️⃣ משיכת קוד מ-GitHub" icon={GitBranch}>
            <CodeBlock code="git clone git@github.com:<USERNAME>/<REPO_NAME>.git ." />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;USERNAME&gt;</code> → שם המשתמש שלכם ב-GitHub</p>
              <p><code className="bg-blue-200 px-1 rounded">&lt;REPO_NAME&gt;</code> → שם הריפו שלכם</p>
            </ChangeNote>
          </Section>

          {/* Step 5 - Check Port */}
          <Section id="step5" title="5️⃣ בדיקת פורט פנוי" icon={Terminal}>
            <CodeBlock code="lsof -i :<PORT>" />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PORT&gt;</code> → הפורט שבו האתר ירוץ (למשל 3001)</p>
            </ChangeNote>
            
            <ExpectedOutput>
              <p>אם הפלט <strong>ריק</strong> → הפורט פנוי ✅</p>
            </ExpectedOutput>
          </Section>

          {/* Step 6 - Create Dockerfile */}
          <Section id="step6" title="6️⃣ יצירת Dockerfile" icon={FileCode}>
            <CodeBlock code="nano Dockerfile" />
            
            <p className="text-gray-600 mb-4">הדביקו את התוכן הבא:</p>
            
            <CodeBlock code={`# ---------- build ----------
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- serve ----------
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`} language="dockerfile" />
            
            <WarningBox>
              <p>⚠️ מתאים ל-Vite/React/Vue. אם אתם משתמשים ב-Next.js/PHP - צריך Dockerfile שונה.</p>
              <p className="mt-2">שמירה ויציאה: <code dir="ltr">CTRL+X</code> → <code>Y</code> → <code>Enter</code></p>
            </WarningBox>
          </Section>

          {/* Step 7 - Create docker-compose.yml */}
          <Section id="step7" title="7️⃣ יצירת docker-compose.yml" icon={Package}>
            <CodeBlock code="nano docker-compose.yml" />
            
            <p className="text-gray-600 mb-4">הדביקו את התוכן הבא:</p>
            
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
              <p>שמירה ויציאה: <code dir="ltr">CTRL+X</code> → <code>Y</code> → <code>Enter</code></p>
            </WarningBox>
          </Section>

          {/* Step 8 - Run the Site */}
          <Section id="step8" title="8️⃣ הרצת האתר" icon={Play}>
            <CodeBlock code="docker compose up --build -d" />
            
            <ExpectedOutput>
              <p>גשו ל: <code dir="ltr">http://&lt;SERVER_IP&gt;:&lt;HOST_PORT&gt;</code></p>
            </ExpectedOutput>
          </Section>

          {/* Step 9 - Pull Changes */}
          <Section id="step9" title="9️⃣ משיכת שינויים בעתיד" icon={RefreshCw}>
            <p className="text-gray-600 mb-4">
              כשתרצו לעדכן את האתר עם שינויים חדשים מ-GitHub:
            </p>
            
            <CodeBlock code={`cd <PROJECT_FOLDER>
git pull origin main
docker compose down
docker compose up --build -d`} />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;PROJECT_FOLDER&gt;</code> → הנתיב לתיקייה</p>
              <p><code className="bg-blue-200 px-1 rounded">main</code> → ה-branch שאתם רוצים למשוך</p>
            </ChangeNote>
            
            <TipsBox>
              <p>🚀 <strong>זהו! 4 שורות לעדכון מלא.</strong></p>
            </TipsBox>
          </Section>

          {/* Step 10 - Domain Connection */}
          <Section id="step10" title="🔟 חיבור לדומיין" icon={Globe}>
            
            <h4 className="font-bold text-lg mb-3 text-blue-900">א. הגדרת DNS</h4>
            <p className="text-gray-600 mb-4">
              צרו רשומות A אצל ספק הדומיין:
            </p>
            
            <div className="bg-gray-200 border border-gray-300 p-4 rounded-lg my-4 font-mono text-sm" dir="ltr">
              <p>@   → &lt;SERVER_IP&gt;</p>
              <p>www → &lt;SERVER_IP&gt;</p>
            </div>
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;SERVER_IP&gt;</code> → כתובת ה-IP של השרת</p>
            </ChangeNote>
            
            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">ב. התקנת Nginx</h4>
            <CodeBlock code={`apt update && apt install nginx -y
nano /etc/nginx/sites-available/<DOMAIN_NAME>`} />
            
            <p className="text-gray-600 mb-4">הדביקו את התוכן הבא:</p>
            
            <CodeBlock code={`server {
    listen 80;
    server_name <DOMAIN_NAME> www.<DOMAIN_NAME>;

    location / {
        proxy_pass http://localhost:<HOST_PORT>;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`} language="nginx" />
            
            <ChangeNote>
              <p><code className="bg-blue-200 px-1 rounded">&lt;DOMAIN_NAME&gt;</code> → הדומיין שלכם (למשל example.com)</p>
              <p><code className="bg-blue-200 px-1 rounded">&lt;HOST_PORT&gt;</code> → הפורט (למשל 3001)</p>
            </ChangeNote>
            
            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">ג. הפעלת ההגדרות</h4>
            <CodeBlock code={`ln -s /etc/nginx/sites-available/<DOMAIN_NAME> /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx`} />
            
            <ExpectedOutput>
              <p>הפקודה <code>nginx -t</code> צריכה להחזיר: <code dir="ltr">syntax is ok</code></p>
            </ExpectedOutput>
            
            <h4 className="font-bold text-lg mb-3 mt-8 text-blue-900">ד. הוספת SSL (HTTPS)</h4>
            <CodeBlock code={`apt install certbot python3-certbot-nginx -y
certbot --nginx -d <DOMAIN_NAME> -d www.<DOMAIN_NAME>`} />
            
            <div className="bg-green-100 border border-green-300 p-4 rounded-lg mt-6">
              <p className="text-green-800 font-bold text-center">
                🔒 זהו! האתר זמין ב-https://&lt;DOMAIN_NAME&gt;
              </p>
            </div>
          </Section>

          {/* Step 11 - Useful Commands */}
          <Section id="step11" title="🛠️ פקודות שימושיות" icon={Settings}>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2 text-gray-700"># צפייה בלוגים</h4>
                <CodeBlock code="docker logs <container_name>" />
              </div>
              
              <div>
                <h4 className="font-bold mb-2 text-gray-700"># כניסה לקונטיינר</h4>
                <CodeBlock code="docker exec -it <container_name> sh" />
              </div>
              
              <div>
                <h4 className="font-bold mb-2 text-gray-700"># רשימת קונטיינרים</h4>
                <CodeBlock code="docker ps -a" />
              </div>
              
              <div>
                <h4 className="font-bold mb-2 text-gray-700"># עצירת אתר</h4>
                <CodeBlock code="docker compose down" />
              </div>
              
              <div>
                <h4 className="font-bold mb-2 text-gray-700"># הפעלה מחדש</h4>
                <CodeBlock code="docker compose restart" />
              </div>
            </div>
          </Section>

          {/* Tips Section */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-700">💡 טיפים חשובים</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>תמיד בדקו שהפורט פנוי לפני הרצה</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>ה-<code className="bg-purple-200 px-1 rounded">--build</code> ב-<code className="bg-purple-200 px-1 rounded">docker compose up</code> חשוב - זה בונה מחדש את השינויים</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>אם משהו לא עובד: <code className="bg-purple-200 px-1 rounded">docker logs</code> מראה את השגיאות</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>לעדכון אתר: רק 4 שורות (שלב 9)</span>
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
                "הגדרנו SSH ל-GitHub",
                "משכנו מ-GitHub",
                "בדקנו פורט פנוי",
                "יצרנו Dockerfile",
                "יצרנו docker-compose",
                "הרצנו את האתר",
                "הגדרנו DNS",
                "התקנו Nginx",
                "הוספנו SSL"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-medium">
                🎉 כל הכבוד! הפרויקט שלכם רץ על השרת עם HTTPS ומוכן לעולם.
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
    </VariablesContext.Provider>
  );
};

export default DockerGuide;
