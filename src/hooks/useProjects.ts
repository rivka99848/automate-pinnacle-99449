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

// Map webhook project names to existing project slugs (for merging duplicates)
const WEBHOOK_NAME_TO_EXISTING_SLUG: Record<string, string> = {
  "ניחותא": "nichuta-vacation-bot",
  "בית ספר לריקוד": "ballet-school-crm",
  "בית ספר לבלט": "ballet-school-crm",
  "בוט AI": "yisharilev-ai-bot",
  "ישרי לב": "yisharilev-ai-bot",
  "אוטומציה רפואית": "medical-automation",
};

// Default features for projects without detailed content
const getDefaultFeatures = () => [
  { text: "פתרון מותאם אישית", icon: Sparkles },
  { text: "ממשק משתמש נוח", icon: LayoutDashboard },
  { text: "תמיכה מלאה", icon: MessageCircle },
  { text: "אבטחה מתקדמת", icon: Shield },
];

// Check if webhook project name matches an existing project
const findMatchingExistingSlug = (webhookName: string): string | null => {
  // Check exact match first
  if (WEBHOOK_NAME_TO_EXISTING_SLUG[webhookName]) {
    return WEBHOOK_NAME_TO_EXISTING_SLUG[webhookName];
  }
  
  // Check if any key is included in the webhook name or vice versa
  const normalizedName = webhookName.trim().toLowerCase();
  for (const [key, slug] of Object.entries(WEBHOOK_NAME_TO_EXISTING_SLUG)) {
    const normalizedKey = key.toLowerCase();
    if (normalizedName.includes(normalizedKey) || normalizedKey.includes(normalizedName)) {
      return slug;
    }
  }
  
  return null;
};

// Check if a webhook project should be shown (filter empty/invalid projects)
const shouldShowProject = (wp: WebhookProject): boolean => {
  // Filter out empty or "No Name" projects
  if (!wp.name || wp.name.trim() === "" || wp.name === "No Name") {
    return false;
  }
  
  // Filter out projects with no content AND no images
  const hasContent = wp.content && wp.content.trim().length > 0;
  const hasImages = wp.images && wp.images.length > 0;
  
  if (!hasContent && !hasImages) {
    return false;
  }
  
  return true;
};

// Convert webhook project to Project format (for new projects only)
const mapWebhookProject = (webhookProject: WebhookProject, index: number): Project => {
  const hasContent = webhookProject.content && webhookProject.content.trim().length > 0;
  
  return {
    id: 1000 + index,
    title: webhookProject.name,
    slug: webhookProject.id,
    description: hasContent 
      ? webhookProject.content 
      : `פרויקט ${webhookProject.name}\n\nפרויקט זה נבנה במיוחד עבור הלקוח ומותאם לצרכיו הייחודיים.`,
    images: webhookProject.images.map(img => img.url), // No placeholder - empty array if no images
    features: getDefaultFeatures(),
    quote: "פרויקט מוצלח שנבנה בהתאמה מלאה לצרכי הלקוח.",
    author: "SmartBiz",
    blogLink: "",
    serviceTypes: ["custom-products"],
  };
};

// Merge webhook data into an existing project
const mergeWithExisting = (existing: Project, webhook: WebhookProject): Project => {
  const hasWebhookContent = webhook.content && webhook.content.trim().length > 0;
  const hasWebhookImages = webhook.images && webhook.images.length > 0;
  
  return {
    ...existing,
    // Use webhook description if available and existing is placeholder-like
    description: hasWebhookContent ? webhook.content : existing.description,
    // Use webhook images if available and existing uses placeholders
    images: hasWebhookImages 
      ? webhook.images.map(img => img.url)
      : existing.images.filter(img => img !== "/placeholder.svg"),
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

  // Build merged projects list
  const allProjects: Project[] = (() => {
    // Start with existing projects (possibly merged with webhook data)
    const mergedExisting = projectsData.map(existing => {
      // Check if any webhook project matches this existing project
      const matchingWebhook = (webhookProjects || []).find(wp => {
        const matchSlug = findMatchingExistingSlug(wp.name);
        return matchSlug === existing.slug;
      });
      
      if (matchingWebhook) {
        return mergeWithExisting(existing, matchingWebhook);
      }
      return existing;
    });
    
    // Add new webhook projects (those that don't match existing)
    const newWebhookProjects = (webhookProjects || [])
      .filter(wp => {
        // Filter out invalid/empty projects
        if (!shouldShowProject(wp)) return false;
        // Filter out those that match existing projects
        const matchSlug = findMatchingExistingSlug(wp.name);
        return matchSlug === null;
      })
      .map((wp, index) => mapWebhookProject(wp, index));
    
    return [...mergedExisting, ...newWebhookProjects];
  })();

  // Find project by slug (check both existing and webhook projects)
  const findProjectBySlug = (slug: string): Project | undefined => {
    // First check in allProjects (includes merged existing)
    const found = allProjects.find(p => p.slug === slug);
    if (found) return found;

    // Check if slug is an Airtable ID that matches an existing project
    if (webhookProjects) {
      const webhookProject = webhookProjects.find(wp => wp.id === slug);
      if (webhookProject) {
        const matchSlug = findMatchingExistingSlug(webhookProject.name);
        if (matchSlug) {
          // Return the merged existing project
          return allProjects.find(p => p.slug === matchSlug);
        }
        // Return as new project if valid
        if (shouldShowProject(webhookProject)) {
          const index = webhookProjects.indexOf(webhookProject);
          return mapWebhookProject(webhookProject, index);
        }
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
