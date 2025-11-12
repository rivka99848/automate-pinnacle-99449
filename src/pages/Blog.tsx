import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "ניהול פניות בלי לאבד את הראש – מקרה אמיתי",
      excerpt: "איך בוט חכם הציל את רשת הנופש ניחותא מהצפה של שאלות ללא סוף",
      category: "בוטים",
      slug: "nichuta-bot",
    },
    {
      id: 2,
      title: "כשהעסק עובד בשבילך ולא להפך",
      excerpt: "אוטומציה מלאה לעסק רפואי שחסכה שעות עבודה כל יום",
      category: "אוטומציה",
      slug: "medical-automation",
    },
    {
      id: 3,
      title: "מערכת CRM - המדריך המלא",
      excerpt: "כל מה שצריך לדעת על מערכות CRM וכיצד לבחור את המתאימה לעסק שלכם",
      category: "CRM",
      slug: "crm-guide",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">הבלוג שלנו</span>
            </h1>
            <p className="text-2xl text-muted-foreground">
              מדריכים, סיפורים ותובנות מעולם האוטומציה
            </p>
          </div>

          {/* Blog Posts */}
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-card p-8 rounded-3xl hover-lift"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-brand-blue text-sm font-semibold mb-2">
                      {post.category}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {post.excerpt}
                    </p>
                    <Button asChild variant="outline" className="rounded-full">
                      <Link to={`/blog/${post.slug}`}>קרא עוד</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="max-w-2xl mx-auto mt-16 text-center bg-brand-darker p-12 rounded-3xl">
            <h2 className="text-3xl font-bold mb-4">הישאר מעודכן</h2>
            <p className="text-lg text-muted-foreground mb-6">
              הצטרף לניוזלטר שלנו וקבל טיפים ועדכונים ישירות למייל
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">הרשם עכשיו</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
