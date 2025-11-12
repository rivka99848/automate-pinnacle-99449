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

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">הפרויקטים שלנו</span>
            </h1>
            <p className="text-2xl text-muted-foreground">
              סיפורי הצלחה של לקוחות מרוצים
            </p>
          </div>

          {/* Projects */}
          <div className="max-w-5xl mx-auto space-y-16">
            {projectsData.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-card p-8 md:p-12 rounded-3xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-brand-${project.color}/20 flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-2xl font-bold text-brand-${project.color}`}>{project.number}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">
                      {project.title}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Project Gallery */}
                <ProjectGallery images={project.images} projectTitle={project.title} />
              
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

                <blockquote className={`border-r-4 border-brand-${project.color} pr-6 py-4 mb-6 italic text-lg`}>
                  "{project.quote}"
                  <footer className="text-muted-foreground mt-2">– {project.author}</footer>
                </blockquote>

                <div className="flex gap-4">
                  <Button asChild variant="default" size="lg" className="rounded-full flex-1">
                    <Link to={`/projects/${project.slug}`}>פרטים נוספים</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full flex-1">
                    <Link to={project.blogLink}>קרא את הסיפור המלא</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">רוצים תוצאות דומות?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              בואו נדבר על איך אפשר ליישם את זה גם בעסק שלכם
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full">
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
