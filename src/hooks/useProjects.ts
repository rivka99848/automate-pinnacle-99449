import { useCachedData } from "./useCachedData";
import { projectsData, type Project } from "@/data/projectsData";
import { Sparkles, LayoutDashboard, MessageCircle, Shield } from "lucide-react";

// Raw webhook response format (new format)
interface RawWebhookProject {
  projectName?: string;
  name?: string;
  id?: string;
  content?: string;
  images?: string[] | { url: string }[];
  recommendationImages?: string[];
}

// Normalized internal format
interface NormalizedWebhookProject {
  id: string;
  name: string;
  content: string;
  images: string[];
  recommendationImages: string[];
}

const WEBHOOK_URL = "https://n8n.chatnaki.co.il/webhook/project";

// Map webhook project names to existing project slugs
const WEBHOOK_NAME_TO_EXISTING_SLUG: Record<string, string> = {
  "ניחותא": "nichuta-vacation-bot",
  "ניהול פניות בלי לאבד את הראש – מקרה אמיתי": "nichuta-vacation-bot",
  "ניהול פניות בלי לאבד את הראש": "nichuta-vacation-bot",
  "בית ספר לריקוד": "ballet-school-crm",
  "בית ספר לבלט": "ballet-school-crm",
  "מערכת CRM ואוטומציה לניהול בית ספר לבלט": "ballet-school-crm",
  "בוט AI": "yisharilev-ai-bot",
  "ישרי לב": "yisharilev-ai-bot",
  "בוט בינה מלאכותית מסונן": "yisharilev-ai-bot",
  "אוטומציה רפואית": "medical-automation",
  "אוטומציה מלאה לעסק רפואי עמוס בפניות": "medical-automation",
};

// Default features for projects without detailed content
const getDefaultFeatures = () => [
  { text: "פתרון מותאם אישית", icon: Sparkles },
  { text: "ממשק משתמש נוח", icon: LayoutDashboard },
  { text: "תמיכה מלאה", icon: MessageCircle },
  { text: "אבטחה מתקדמת", icon: Shield },
];

// Generate stable slug from project name
const generateSlug = (name: string): string => {
  // Simple hash function for stable ID
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `project-${Math.abs(hash).toString(36)}`;
};

// Normalize webhook project to consistent format
const normalizeWebhookProject = (raw: RawWebhookProject): NormalizedWebhookProject => {
  // Get name from projectName or name field
  const rawName = raw.projectName || raw.name || "";
  
  // Normalize images - handle both string[] and {url: string}[] formats
  const normalizedImages: string[] = [];
  if (raw.images && Array.isArray(raw.images)) {
    for (const img of raw.images) {
      if (typeof img === "string" && img.trim()) {
        normalizedImages.push(img);
      } else if (typeof img === "object" && img.url && img.url.trim()) {
        normalizedImages.push(img.url);
      }
    }
  }
  
  // Normalize recommendation images
  const normalizedRecImages: string[] = [];
  if (raw.recommendationImages && Array.isArray(raw.recommendationImages)) {
    for (const img of raw.recommendationImages) {
      if (typeof img === "string" && img.trim()) {
        normalizedRecImages.push(img);
      }
    }
  }
  
  return {
    id: raw.id || generateSlug(rawName),
    name: rawName,
    content: raw.content || "",
    images: normalizedImages,
    recommendationImages: normalizedRecImages,
  };
};

// Extract project name - use content first line if name is empty/generic
const extractProjectName = (wp: NormalizedWebhookProject): string => {
  // If we have a valid name, use it
  if (wp.name && wp.name.trim() !== "" && wp.name !== "No Name") {
    return wp.name.trim();
  }
  
  // Try to extract from content first line
  if (wp.content) {
    const firstLine = wp.content.split('\n')[0].trim();
    if (firstLine.length > 0 && firstLine.length <= 60) {
      return firstLine;
    }
  }
  
  // Fallback with ID
  return `פרויקט ${wp.id.slice(-6)}`;
};

// Find matching existing project slug
const findMatchingExistingSlug = (webhookName: string): string | null => {
  const normalizedName = webhookName.trim();
  
  // Check exact match first
  if (WEBHOOK_NAME_TO_EXISTING_SLUG[normalizedName]) {
    return WEBHOOK_NAME_TO_EXISTING_SLUG[normalizedName];
  }
  
  // Check lowercase match
  const lowerName = normalizedName.toLowerCase();
  for (const [key, slug] of Object.entries(WEBHOOK_NAME_TO_EXISTING_SLUG)) {
    if (key.toLowerCase() === lowerName) {
      return slug;
    }
    // Check if key is included in name or vice versa
    if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
      return slug;
    }
  }
  
  return null;
};

// Check if a webhook project should be shown as NEW project
const shouldShowAsNewProject = (wp: NormalizedWebhookProject): boolean => {
  const hasContent = wp.content.trim().length > 0;
  const hasImages = wp.images.length > 0;
  const hasRecImages = wp.recommendationImages.length > 0;
  
  // Must have at least content OR images OR recommendation images
  return hasContent || hasImages || hasRecImages;
};

// Check if images are real (not placeholders)
export const hasRealImages = (images: string[] | undefined): boolean => {
  if (!images || images.length === 0) return false;
  return images.some(img => img && img.trim() !== "" && !img.includes("placeholder"));
};

// Convert webhook project to Project format
const mapWebhookProject = (wp: NormalizedWebhookProject, index: number): Project => {
  const projectName = extractProjectName(wp);
  const hasContent = wp.content.trim().length > 0;
  
  return {
    id: 1000 + index,
    title: projectName,
    slug: wp.id,
    description: hasContent 
      ? wp.content 
      : `פרויקט ${projectName}\n\nפרויקט זה נבנה במיוחד עבור הלקוח ומותאם לצרכיו הייחודיים.`,
    images: wp.images,
    features: getDefaultFeatures(),
    quote: "פרויקט מוצלח שנבנה בהתאמה מלאה לצרכי הלקוח.",
    author: "SmartBiz",
    blogLink: "",
    serviceTypes: ["custom-products"],
    recommendationImages: wp.recommendationImages.length > 0 ? wp.recommendationImages : undefined,
  };
};

// Merge webhook data into an existing project
const mergeWithExisting = (existing: Project, wp: NormalizedWebhookProject): Project => {
  const hasWebhookContent = wp.content.trim().length > 0;
  const hasWebhookImages = wp.images.length > 0;
  const hasWebhookRecImages = wp.recommendationImages.length > 0;
  
  return {
    ...existing,
    // Use webhook content if available
    description: hasWebhookContent ? wp.content : existing.description,
    // Use webhook images if available, otherwise keep existing (filter placeholders)
    images: hasWebhookImages 
      ? wp.images
      : existing.images.filter(img => !img.includes("placeholder")),
    // Add recommendation images if available
    recommendationImages: hasWebhookRecImages 
      ? wp.recommendationImages 
      : existing.recommendationImages,
  };
};

const fetchProjectsFromWebhook = async (): Promise<RawWebhookProject[]> => {
  const response = await fetch(WEBHOOK_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`);
  }
  const data = await response.json();
  return Array.isArray(data) ? data : [];
};

export function useProjects() {
  const { data: rawWebhookProjects, loading, error, refetch } = useCachedData<RawWebhookProject[]>(
    "projects_cache_v2", // New cache key to avoid old format issues
    fetchProjectsFromWebhook,
    { cacheDurationHours: 4 }
  );

  // Normalize webhook projects
  const webhookProjects = (rawWebhookProjects || []).map(normalizeWebhookProject);

  // Build merged projects list
  const allProjects: Project[] = (() => {
    // Start with existing projects (possibly merged with webhook data)
    const mergedExisting = projectsData.map(existing => {
      // Check if any webhook project matches this existing project
      const matchingWebhook = webhookProjects.find(wp => {
        const matchSlug = findMatchingExistingSlug(wp.name);
        return matchSlug === existing.slug;
      });
      
      if (matchingWebhook) {
        return mergeWithExisting(existing, matchingWebhook);
      }
      return existing;
    });
    
    // Add new webhook projects (those that don't match existing)
    const newWebhookProjects = webhookProjects
      .filter(wp => {
        // Must have content/images to show
        if (!shouldShowAsNewProject(wp)) return false;
        // Filter out those that match existing projects
        const matchSlug = findMatchingExistingSlug(wp.name);
        return matchSlug === null;
      })
      .map((wp, index) => mapWebhookProject(wp, index));
    
    return [...mergedExisting, ...newWebhookProjects];
  })();

  // Find project by slug
  const findProjectBySlug = (slug: string): Project | undefined => {
    // First check in allProjects
    const found = allProjects.find(p => p.slug === slug);
    if (found) return found;

    // Check if slug matches a webhook project ID
    const webhookProject = webhookProjects.find(wp => wp.id === slug);
    if (webhookProject) {
      const matchSlug = findMatchingExistingSlug(webhookProject.name);
      if (matchSlug) {
        return allProjects.find(p => p.slug === matchSlug);
      }
      if (shouldShowAsNewProject(webhookProject)) {
        const index = webhookProjects.indexOf(webhookProject);
        return mapWebhookProject(webhookProject, index);
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
