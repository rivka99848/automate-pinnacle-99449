import { useCachedData } from "./useCachedData";
import { projectsData, type Project } from "@/data/projectsData";
import { Sparkles, LayoutDashboard, MessageCircle, Shield } from "lucide-react";

interface WebhookProjectImage {
  url: string;
  filename: string;
  width: number;
  height: number;
  type: string;
}

interface WebhookProject {
  id: string;
  name: string;
  createdTime: string;
  images: WebhookProjectImage[];
  content?: string;
}

const WEBHOOK_URL = "https://n8n.chatnaki.co.il/webhook/project";

// Default features for projects without detailed content
const getDefaultFeatures = () => [
  { text: "פתרון מותאם אישית", icon: Sparkles },
  { text: "ממשק משתמש נוח", icon: LayoutDashboard },
  { text: "תמיכה מלאה", icon: MessageCircle },
  { text: "אבטחה מתקדמת", icon: Shield },
];

// Convert webhook project to Project format
const mapWebhookProject = (webhookProject: WebhookProject, index: number): Project => {
  const hasContent = webhookProject.content && webhookProject.content.trim().length > 0;
  
  return {
    id: 1000 + index, // Start from 1000 to avoid conflicts with existing projects
    title: webhookProject.name,
    slug: webhookProject.id, // Use the Airtable ID as slug
    description: hasContent 
      ? webhookProject.content 
      : `פרויקט ${webhookProject.name}\n\nפרויקט זה נבנה במיוחד עבור הלקוח ומותאם לצרכיו הייחודיים.`,
    images: webhookProject.images.length > 0 
      ? webhookProject.images.map(img => img.url)
      : ["/placeholder.svg"],
    features: getDefaultFeatures(),
    quote: hasContent 
      ? "פרויקט מוצלח שנבנה בהתאמה מלאה לצרכי הלקוח."
      : "פרויקט מוצלח שנבנה בהתאמה מלאה לצרכי הלקוח.",
    author: "SmartBiz",
    blogLink: "",
    serviceTypes: ["custom-products"],
  };
};

const fetchProjectsFromWebhook = async (): Promise<WebhookProject[]> => {
  const response = await fetch(WEBHOOK_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`);
  }
  const data = await response.json();
  return Array.isArray(data) ? data : [];
};

export function useProjects() {
  const { data: webhookProjects, loading, error, refetch } = useCachedData<WebhookProject[]>(
    "projects_cache",
    fetchProjectsFromWebhook,
    { cacheDurationHours: 4 }
  );

  // Combine existing projects with webhook projects
  const allProjects: Project[] = [
    ...projectsData, // Existing projects first
    ...(webhookProjects || []).map((wp, index) => mapWebhookProject(wp, index)),
  ];

  // Find project by slug (check both existing and webhook projects)
  const findProjectBySlug = (slug: string): Project | undefined => {
    // First check existing projects
    const existingProject = projectsData.find(p => p.slug === slug);
    if (existingProject) return existingProject;

    // Then check webhook projects (using id as slug)
    if (webhookProjects) {
      const webhookIndex = webhookProjects.findIndex(wp => wp.id === slug);
      if (webhookIndex !== -1) {
        return mapWebhookProject(webhookProjects[webhookIndex], webhookIndex);
      }
    }

    return undefined;
  };

  return {
    projects: allProjects,
    loading,
    error,
    refetch,
    findProjectBySlug,
  };
}
