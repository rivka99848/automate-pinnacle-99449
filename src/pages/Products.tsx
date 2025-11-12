import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productsData } from "@/data/productsData";
import dashboardImage from "@/assets/dashboard-screen.jpg";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">המוצרים שלנו</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              פתרונות מוכנים שיקלו עליכם את הניהול
            </p>
          </div>

          {/* Products Grid */}
          <div className="max-w-5xl mx-auto space-y-12">
            {productsData.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in-scale hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/products/${product.slug}`} className="block">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="order-1 md:order-1">
                      <img
                        src={dashboardImage}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                      />
                    </div>

                    {/* Content */}
                    <div className="order-2 md:order-2 space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {product.name}
                      </h2>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {product.shortDescription}
                      </p>
                      
                      {/* Price */}
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground line-through text-lg">
                          {product.price.original}
                        </span>
                        <span className="text-3xl font-bold text-secondary">
                          {product.price.current}
                        </span>
                      </div>

                      <Button size="lg" className="rounded-full">
                        לפרטים מלאים
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
