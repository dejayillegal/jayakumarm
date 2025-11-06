
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "JOURNEY", href: "#timeline" },
    { label: "CONTACT", href: "#footer" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-auto ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b-2 border-primary/30 shadow-lg"
          : "bg-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer pointer-events-auto z-[110]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="logo-link"
          >
            <Terminal className="w-6 h-6 text-primary animate-pulse-orange" />
            <div className="font-mono">
              <div className="text-lg font-bold text-primary group-hover:animate-flicker">
                JM<span className="text-foreground">.DEV</span>
              </div>
              <div className="text-xs text-muted-foreground">
                {'>'} SYSTEM_ACTIVE
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 pointer-events-auto" data-testid="nav-desktop">
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="pointer-events-auto"
              >
                <Button
                  asChild
                  variant="ghost"
                  className="font-mono text-sm hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer pointer-events-auto"
                  data-testid={`nav-item-${i}`}
                >
                  <a href={item.href} className="pointer-events-auto">
                    <span className="text-primary mr-1">{'>'}</span>
                    {item.label}
                  </a>
                </Button>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary hover:bg-primary/10 cursor-pointer pointer-events-auto z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 border-t-2 border-primary/30 pt-4"
            data-testid="nav-mobile"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <Button
                  key={item.label}
                  asChild
                  variant="ghost"
                  className="font-mono text-sm justify-start hover:text-primary hover:bg-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-item-${i}`}
                >
                  <a href={item.href}>
                    <span className="text-primary mr-2">{'>'}</span>
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
