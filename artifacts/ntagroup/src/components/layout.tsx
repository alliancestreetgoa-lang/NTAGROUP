import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, Globe, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products & Trading" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled || location !== "/"
            ? "bg-white/90 backdrop-blur-md border-border/40 text-foreground py-3 shadow-sm"
            : "bg-transparent border-transparent text-white py-5"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2 z-50">
            <div className={cn("flex flex-col", isScrolled || location !== "/" ? "text-primary" : "text-white")}>
              <span className="font-serif text-2xl font-black tracking-wider leading-none">NTAGROUP</span>
              <span className="text-[0.6rem] font-sans font-bold tracking-[0.2em] uppercase text-accent">Global Trading</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location === link.href ? "text-accent font-semibold" : ""
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className={cn(
                "rounded-none font-semibold uppercase tracking-wider text-xs px-6 py-5",
                isScrolled || location !== "/"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden z-50", isScrolled || location !== "/" || mobileMenuOpen ? "text-primary" : "text-white")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={cn(
                "text-2xl font-serif font-bold text-primary hover:text-accent transition-colors",
                location === link.href ? "text-accent" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-none font-semibold uppercase tracking-wider mt-4">
            <Link href="/contact" onClick={closeMenu}>
              Partner With Us
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-primary text-primary-foreground pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex flex-col text-white mb-6">
                <span className="font-serif text-3xl font-black tracking-wider leading-none">NTAGROUP</span>
                <span className="text-[0.65rem] font-sans font-bold tracking-[0.2em] uppercase text-accent mt-1">Global Commodities</span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
                A heavyweight, trusted intermediary in the global commodities supply chain, bridging supply with international demand.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 text-white border-b border-primary-foreground/10 pb-4">Our Business</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li><Link href="/products" className="hover:text-accent transition-colors">Chemical Fertilizers</Link></li>
                <li><Link href="/products" className="hover:text-accent transition-colors">LNG Trading</Link></li>
                <li><Link href="/products" className="hover:text-accent transition-colors">Refined Oil Products</Link></li>
                <li><Link href="/products" className="hover:text-accent transition-colors">Crude Oil Trading</Link></li>
                <li><Link href="/products" className="hover:text-accent transition-colors">Petrochemicals</Link></li>
                <li><Link href="/products" className="hover:text-accent transition-colors">Grains & Legumes</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 text-white border-b border-primary-foreground/10 pb-4">Company</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                <li><span className="hover:text-accent transition-colors cursor-pointer">Global Reach</span></li>
                <li><span className="hover:text-accent transition-colors cursor-pointer">Careers</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 text-white border-b border-primary-foreground/10 pb-4">Headquarters</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-accent shrink-0" />
                  <span>Dubai, United Arab Emirates<br/>Global Trade Center</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>+971 4 123 4567</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-8 rounded-none border-primary-foreground/20 text-white hover:bg-white hover:text-primary transition-colors w-full">
                <Link href="/contact">Make an Inquiry</Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} NTAGROUP. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
