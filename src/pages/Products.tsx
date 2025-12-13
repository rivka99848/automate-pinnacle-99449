import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productsData } from "@/data/productsData";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Dark Background */}
      <section className="bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">המוצרים שלנו</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            פתרונות מוכנים שיקלו עליכם את הניהול ויחסכו לכם זמן יקר
          </p>
        </div>
      </section>

      {/* Products Section - Light Background */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {productsData.map((product, index) => {
              const isBurgundy = product.slug === "ticket-system";
              
              return (
                <div 
                  key={product.id}
                  className="animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Link to={`/products/${product.slug}`} className="block group">
                    <div className={`rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      isBurgundy 
                        ? 'bg-gradient-to-br from-[#2D1518] to-[#3D2023] text-white' 
                        : 'bg-white'
                    }`}>
                      <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Image */}
                        <div className="order-1">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-72 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Content */}
                        <div className="order-2 space-y-5">
                          <h2 className={`text-3xl md:text-4xl font-bold transition-colors ${
                            isBurgundy 
                              ? 'text-white group-hover:text-[#D4A574]' 
                              : 'text-gray-900 group-hover:text-primary'
                          }`}>
                            {product.name}
                          </h2>
                          <p className={`text-lg leading-relaxed ${
                            isBurgundy ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {product.shortDescription}
                          </p>
                          
                          {/* Price - Hidden for ticket-system */}
                          {!isBurgundy && (
                            <div className="flex items-center gap-4">
                              <span className="text-gray-500 line-through text-xl">
                                {product.price.original}
                              </span>
                              <span className="text-4xl font-bold bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
                                {product.price.current}
                              </span>
                            </div>
                          )}

                          <Button 
                            size="lg" 
                            className={`rounded-full mt-4 ${
                              isBurgundy 
                                ? 'bg-[#722F37] hover:bg-[#8B4049] text-white' 
                                : ''
                            }`}
                          >
                            לפרטים מלאים →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      <section className="bg-gradient-to-br from-background to-brand-darker py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">רוצים לשמוע עוד?</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            בואו נדבר על איך המוצרים שלנו יכולים לעזור לעסק שלכם
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full">
              צור קשר
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;