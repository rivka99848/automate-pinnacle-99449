import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import smartbizLogo from "@/assets/smartbiz-logo.gif";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center h-20 relative">
          {/* Logo - Right side (RTL) */}
          <NavLink to="/" className="absolute right-4 flex items-center">
            <img src={smartbizLogo} alt="Smartbiz - פשוט מהנבל חכם" className="h-12" />
          </NavLink>

          {/* Navigation - Center */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
              activeClassName="!text-primary font-bold border-b-2 border-primary pb-1"
            >
              בית
            </NavLink>
            <NavLink
              to="/services" 
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
              activeClassName="!text-primary font-bold border-b-2 border-primary pb-1"
            >
              שירותים
            </NavLink>
            <NavLink
              to="/products" 
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
              activeClassName="!text-primary font-bold border-b-2 border-primary pb-1"
            >
              מוצרים
            </NavLink>
            <NavLink 
              to="/projects" 
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
              activeClassName="!text-primary font-bold border-b-2 border-primary pb-1"
            >
              פרויקטים
            </NavLink>
          </div>

          {/* CTA Button - Left side */}
          <div className="absolute left-4 flex items-center">
            <Button asChild variant="secondary" size="lg" className="rounded-full">
              <NavLink to="/contact">צור קשר</NavLink>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
