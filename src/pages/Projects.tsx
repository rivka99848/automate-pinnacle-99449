import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProjectGallery from "@/components/ProjectGallery";
import { useProjects, hasRealImages } from "@/hooks/useProjects";
import { Skeleton } from "@/components/ui/skeleton";

const Projects = () => {
  const { projects, loading } = useProjects();

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32">
        {/* Hero */}
        <div className="container mx-auto px-4 pb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">הפרויקטים שלנו</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              סיפורי הצלחה של לקוחות מרוצים
            </p>
          </div>
        </div>

        {/* Projects Section - White Background */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200">
                    <Skeleton className="aspect-video w-full" />
                    <div className="p-4 space-y-2">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-9 w-full rounded-full" />
                    </div>
                  </div>
                ))
              ) : (
              projects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="block hover-lift animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors">
                    {/* Project Image - only show if has real images */}
                    {hasRealImages(project.images) ? (
                      <ProjectGallery images={project.images} projectTitle={project.title} />
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary/30">{project.title.charAt(0)}</span>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-4 space-y-2">
                      <h2 className="text-lg font-bold text-gray-900">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <Button variant="secondary" size="sm" className="rounded-full w-full">
                        קרא עוד
                      </Button>
                    </div>
                  </div>
                </Link>
              ))
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">רוצים תוצאות דומות?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              בואו נדבר על איך אפשר ליישם את זה גם בעסק שלכם
            </p>
            <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6 rounded-full">
              <Link to="/contact">צרו קשר</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
