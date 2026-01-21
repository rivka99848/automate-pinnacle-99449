import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-8"
          >
            <span className="text-[12rem] md:text-[16rem] font-bold leading-none bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink bg-clip-text text-transparent select-none">
              404
            </span>
            
            {/* Decorative glow effect */}
            <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-bold leading-none bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink bg-clip-text text-transparent blur-3xl opacity-30 -z-10">
              404
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            אופס! הדף לא נמצא
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-8 max-w-md mx-auto"
          >
            נראה שהדף שחיפשת לא קיים או שהועבר למקום אחר. 
            בוא נחזיר אותך לדרך הנכונה.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-l from-brand-blue to-brand-purple hover:opacity-90 text-white px-8 gap-2"
            >
              <Link to="/">
                <Home className="w-5 h-5" />
                חזרה לדף הבית
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-blue/30 hover:bg-brand-blue/10 px-8 gap-2"
            >
              <Link to="/contact">
                <ArrowRight className="w-5 h-5" />
                צור קשר
              </Link>
            </Button>
          </motion.div>

          {/* Decorative Search Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16"
          >
            <Search className="w-16 h-16 text-muted-foreground/20 mx-auto" />
          </motion.div>

          {/* Attempted Path Display */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 text-sm text-muted-foreground/50 font-mono"
            dir="ltr"
          >
            {location.pathname}
          </motion.p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
