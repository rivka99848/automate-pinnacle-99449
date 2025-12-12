import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProjectGallery from "@/components/ProjectGallery";
import { projectsData } from "@/data/projectsData";
import { ExternalLink } from "lucide-react";

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

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const colorClass = getColorClass(project.serviceType);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-8 animate-fade-in">
              <Link to="/projects">← חזרה לכל הפרויקטים</Link>
            </Button>

            {/* Project Header - No number badge */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h1 
                  className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <span className={`text-${colorClass}`}>{project.title}</span>
                </h1>
                <p 
                  className="text-xl text-muted-foreground leading-relaxed whitespace-pre-line animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  {project.description}
                </p>
              </div>

              {/* Project Gallery */}
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <ProjectGallery images={project.images} projectTitle={project.title} />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - White Background */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 
                className="text-2xl font-bold mb-8 text-gray-900 animate-fade-in"
              >
                {project.serviceType === "crm" ? "הפתרון שבנינו:" : "המערכת כוללת:"}
              </h3>
              <ul className="space-y-4">
                {project.features.map((feature, i) => {
                  const IconComponent = feature.icon;
                  return (
                    <li 
                      key={i} 
                      className="flex items-center gap-4 text-gray-700 animate-fade-in hover:translate-x-[-4px] transition-transform duration-300"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className={`w-10 h-10 rounded-xl bg-${colorClass}/10 flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-5 h-5 text-${colorClass}`} />
                      </div>
                      <span className="text-lg">{feature.text}</span>
                    </li>
                  );
                })}
              </ul>

              {/* External Link Button */}
              {project.externalLink && (
                <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
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

              {/* Quote */}
              <blockquote
                className={`border-r-4 border-${colorClass} pr-6 py-4 mt-12 text-lg text-gray-700 whitespace-pre-line animate-fade-in`}
                style={{ animationDelay: "0.6s" }}
              >
                <p className="leading-relaxed">{project.quote}</p>
                <footer className={`text-${colorClass} mt-4 font-semibold`}>– {project.author}</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">רוצים תוצאות דומות?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                בואו נדבר על איך אפשר ליישם את זה גם בעסק שלכם
              </p>
              <Button 
                asChild 
                size="lg" 
                className={`rounded-full bg-${colorClass} hover:bg-${colorClass}/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
              >
                <Link to="/contact">צרו קשר</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Projects Strip - White Background */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">פרויקטים נוספים</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectsData
                  .filter((p) => p.id !== project.id)
                  .map((relatedProject, index) => {
                    const relatedColorClass = getColorClass(relatedProject.serviceType);
                    return (
                      <Link
                        key={relatedProject.id}
                        to={`/projects/${relatedProject.slug}`}
                        className="group animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={relatedProject.images[0]}
                              alt={relatedProject.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-3">
                            <h3 className={`text-sm font-semibold line-clamp-2 text-gray-900 group-hover:text-${relatedColorClass} transition-colors duration-300`}>
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
