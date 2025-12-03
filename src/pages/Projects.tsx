import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProjectGallery from "@/components/ProjectGallery";
import { projectsData } from "@/data/projectsData";

const Projects = () => {
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
              {projectsData.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="block hover-lift animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors">
                    {/* Project Image */}
                    <ProjectGallery images={project.images} projectTitle={project.title} />
                    
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
              ))}
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
