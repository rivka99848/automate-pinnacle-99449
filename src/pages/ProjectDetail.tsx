import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProjectGallery from "@/components/ProjectGallery";
import { projectsData } from "@/data/projectsData";
import { ExternalLink, Quote } from "lucide-react";

// Color mapping based on serviceType
const getColorClass = (serviceType: string) => {
  switch (serviceType) {
    case "crm":
      return "brand-blue";
    case "bots":
      return "secondary";
    case "automation":
      return "brand-purple";
    default:
      return "brand-blue";
  }
};

// Parse description to identify and style subheadings
const parseDescription = (description: string, colorClass: string) => {
  const lines = description.split('\n');
  const elements: JSX.Element[] = [];
  let currentParagraph: string[] = [];
  let bulletItems: string[] = [];
  let elementIndex = 0;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        elements.push(
          <p key={`p-${elementIndex++}`} className="text-lg text-muted-foreground leading-relaxed mb-4">
            {text}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  const flushBulletList = () => {
    if (bulletItems.length > 0) {
      elements.push(
        <ul key={`ul-${elementIndex++}`} className="space-y-3 mb-6">
          {bulletItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-muted-foreground">
              <span className={`w-2 h-2 rounded-full bg-${colorClass} mt-2.5 flex-shrink-0`}></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      bulletItems = [];
    }
  };

  // Subheading patterns (Hebrew)
  const subheadingPatterns = [
    'האתגר',
    'הפתרון',
    'תוצאות והישגים',
    'התוצאה',
    'השורה התחתונה',
    'תובנה לסיום',
    'מקרה לקוח',
    'תהליך הזרימה',
  ];

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    
    // Skip empty lines but flush current content
    if (!trimmedLine) {
      flushBulletList();
      flushParagraph();
      return;
    }

    // Check if it's a subheading
    const isSubheading = subheadingPatterns.some(pattern => 
      trimmedLine.startsWith(pattern) || trimmedLine.includes(pattern + ':')
    );

    if (isSubheading) {
      flushBulletList();
      flushParagraph();
      
      elements.push(
        <h3 
          key={`h3-${elementIndex++}`} 
          className={`text-2xl md:text-3xl font-bold text-${colorClass} mt-12 mb-6 flex items-center gap-3`}
        >
          <span className={`w-1 h-8 bg-${colorClass} rounded-full`}></span>
          {trimmedLine}
        </h3>
      );
      return;
    }

    // Check for bullet points
    if (trimmedLine.startsWith('•')) {
      flushParagraph();
      bulletItems.push(trimmedLine.replace('•', '').trim());
      return;
    }

    // Check for numbered items (1. 2. etc)
    if (/^\d+\./.test(trimmedLine)) {
      flushParagraph();
      bulletItems.push(trimmedLine);
      return;
    }

    // Regular text - add to current paragraph
    currentParagraph.push(trimmedLine);
  });

  // Flush any remaining content
  flushBulletList();
  flushParagraph();

  return elements;
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const colorClass = getColorClass(project.serviceTypes[0]);

  // Split description for hero intro (first paragraph before empty line)
  const firstEmptyLineIndex = project.description.indexOf('\n\n');
  const heroIntro = firstEmptyLineIndex > 0 
    ? project.description.slice(0, firstEmptyLineIndex).trim()
    : project.description.split('\n').slice(0, 3).join('\n').trim();

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32">
        {/* Hero Section with gradient background */}
        <div className={`bg-gradient-to-b from-${colorClass}/5 to-transparent pb-16`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Back Button */}
              <Button asChild variant="ghost" className="mb-8 animate-fade-in">
                <Link to="/projects">← חזרה לכל הפרויקטים</Link>
              </Button>

              {/* Project Header */}
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in leading-tight"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <span className={`text-${colorClass}`}>{project.title}</span>
                  </h1>
                  <p 
                    className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in max-w-3xl whitespace-pre-line"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {heroIntro}
                  </p>
                </div>

                {/* Project Gallery */}
                <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <ProjectGallery images={project.images} projectTitle={project.title} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none animate-fade-in">
                {parseDescription(project.description, colorClass)}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - Enhanced Grid */}
        <div className={`bg-gradient-to-b from-${colorClass}/5 via-${colorClass}/10 to-${colorClass}/5 py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <h3 className={`text-3xl md:text-4xl font-bold text-${colorClass} sticky top-32`}>
                    {project.serviceTypes.includes("crm") ? "הפתרון שבנינו" : "המערכת כוללת"}
                    <div className={`w-16 h-1 bg-${colorClass} rounded-full mt-4`}></div>
                  </h3>
                </div>
                
                <div className="md:w-2/3">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => {
                      const IconComponent = feature.icon;
                      return (
                        <div 
                          key={i} 
                          className="bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 animate-fade-in group"
                          style={{ animationDelay: `${i * 0.08}s` }}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-${colorClass}/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className={`w-6 h-6 text-${colorClass}`} />
                            </div>
                            <span className="text-base md:text-lg font-medium leading-relaxed">{feature.text}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* External Link Button */}
              {project.externalLink && (
                <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <Button 
                    asChild 
                    size="lg" 
                    className={`rounded-full bg-${colorClass} hover:bg-${colorClass}/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                  >
                    <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      לצפייה בפרויקט
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quote Section - Enhanced Design */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div 
                className={`relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50 animate-fade-in`}
                style={{ animationDelay: "0.6s" }}
              >
                {/* Decorative Quote Mark */}
                <Quote className={`absolute top-6 right-6 w-12 h-12 text-${colorClass}/20`} />
                
                <blockquote className="relative">
                  <div className="prose prose-lg max-w-none">
                    {parseDescription(project.quote, colorClass)}
                  </div>
                  <footer className={`mt-8 pt-6 border-t border-border/50`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-${colorClass}/20 flex items-center justify-center`}>
                        <span className={`text-${colorClass} font-bold text-xl`}>
                          {project.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className={`text-lg font-semibold text-${colorClass}`}>{project.author}</div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`py-20 bg-gradient-to-b from-transparent via-${colorClass}/5 to-transparent`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">רוצים תוצאות דומות?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                בואו נדבר על איך אפשר ליישם את זה גם בעסק שלכם
              </p>
              <Button 
                asChild 
                size="lg" 
                className={`rounded-full bg-${colorClass} hover:bg-${colorClass}/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-10 py-6`}
              >
                <Link to="/contact">צרו קשר</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Projects Strip */}
        <div className="bg-card py-16 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">פרויקטים נוספים</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectsData
                  .filter((p) => p.id !== project.id)
                  .map((relatedProject, index) => {
                    const relatedColorClass = getColorClass(relatedProject.serviceTypes[0]);
                    return (
                      <Link
                        key={relatedProject.id}
                        to={`/projects/${relatedProject.slug}`}
                        className="group animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={relatedProject.images[0]}
                              alt={relatedProject.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-3">
                            <h3 className={`text-sm font-semibold line-clamp-2 group-hover:text-${relatedColorClass} transition-colors duration-300`}>
                              {relatedProject.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;