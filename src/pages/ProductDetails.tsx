import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { productsData } from "@/data/productsData";
import dashboardImage from "@/assets/dashboard-screen.jpg";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleCTAClick = async () => {
    try {
      await fetch("https://n8n.chatnaki.co.il/webhook/crm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          action: "crm_interest",
          page: "product_details",
          product: product.slug,
          timestamp: new Date().toISOString()
        }),
      });
      navigate("/contact");
    } catch (error) {
      navigate("/contact");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Image */}
          <div className="mb-12 animate-fade-in">
            <img
              src={dashboardImage}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Title & Description */}
          <div className="text-center mb-12 animate-fade-in-up space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {product.fullDescription}
            </p>
          </div>

          {/* Price Section */}
          <div className="text-center mb-16 animate-fade-in-scale">
            <div className="inline-block bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 rounded-3xl border border-secondary/20">
              <div className="text-muted-foreground line-through text-xl mb-2">
                {product.price.original}
              </div>
              <div className="text-5xl font-bold text-secondary mb-2">
                {product.price.current}
              </div>
              <p className="text-muted-foreground">תשלום חד-פעמי בלבד</p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16 animate-fade-in-scale">
            <h2 className="text-2xl font-bold mb-8 text-center">תכונות עיקריות</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Before & After Comparison */}
          <div className="mb-16 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Before */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-destructive">מה יש לכם היום?</h2>
                {product.beforeProblems.map((problem, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-base font-semibold">❌ {problem.title}</div>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                ))}
              </div>

              {/* After */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-secondary">עם המערכת שלנו:</h2>
                {product.afterSolutions.map((solution, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-base font-semibold">✅ {solution.title}</div>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center animate-fade-in-scale">
            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="text-lg px-12 py-6 rounded-full"
            >
              הגיע הזמן לעשות סדר בעסק שלכם
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
