import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Your Usual", href: "/menu-usual" },
  { label: "Healthy Food", href: "/menu-healthy" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-obsidian/95 backdrop-blur-md border-b border-gold/10 shadow-dark"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Apex SVC Catering Services"
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative font-body text-xs tracking-luxury uppercase font-medium transition-colors duration-300 group ${location.pathname === link.href
                      ? "text-gold"
                      : "text-foreground/70 hover:text-gold"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gradient-gold transition-all duration-300 ${location.pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden sm:block btn-gold rounded-sm text-xs font-body font-semibold tracking-luxury uppercase px-6 py-3"
              >
                Get a Quote
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-foreground/80 hover:text-gold transition-colors p-2"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col pt-24 px-8"
          >
            <div className="w-8 h-px bg-gradient-gold mb-10" />
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    className={`font-display text-3xl font-medium transition-colors ${location.pathname === link.href
                        ? "text-gold"
                        : "text-foreground/70 hover:text-gold"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-10">
              <Link
                to="/contact"
                className="btn-gold inline-block rounded-sm"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
