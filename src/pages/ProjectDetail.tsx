import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProjectGallery from "@/components/ProjectGallery";
import { projectsData } from "@/data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/projects">← חזרה לכל הפרויקטים</Link>
            </Button>

            {/* Project Header */}
            <div className="bg-card p-8 md:p-12 rounded-3xl animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-full bg-brand-${project.color}/20 flex items-center justify-center flex-shrink-0`}
                >
                  <span className={`text-2xl font-bold text-brand-${project.color}`}>
                    {project.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project Gallery */}
              <ProjectGallery images={project.images} projectTitle={project.title} />

              {/* Features */}
              <div className="bg-brand-darker p-6 rounded-2xl mb-6">
                <h3 className="text-xl font-bold mb-4">
                  {project.color === "blue" ? "הפתרון שבנינו:" : "המערכת כוללת:"}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <blockquote
                className={`border-r-4 border-brand-${project.color} pr-6 py-4 mb-6 italic text-lg`}
              >
                "{project.quote}"
                <footer className="text-muted-foreground mt-2">– {project.author}</footer>
              </blockquote>

              {/* CTA */}
              <div className="text-center mt-12 space-y-4">
                <h2 className="text-2xl font-bold mb-4">רוצים תוצאות דומות?</h2>
                <p className="text-base text-muted-foreground mb-6">
                  בואו נדבר על איך אפשר ליישם את זה גם בעסק שלכם
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/contact">צרו קשר</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Link to={project.blogLink}>קרא את הסיפור המלא</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Related Projects Strip */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">פרויקטים נוספים</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectsData
                  .filter((p) => p.id !== project.id)
                  .map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      to={`/projects/${relatedProject.slug}`}
                      className="group"
                    >
                      <div className="bg-card rounded-2xl overflow-hidden hover-lift border border-border/50 hover:border-border transition-colors">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={relatedProject.images[0]}
                            alt={relatedProject.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="text-sm font-semibold line-clamp-2">
                            {relatedProject.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
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
