import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import heroCatering from "@/assets/hero-catering.jpg";
import heroHome from "@/assets/hero-home.jpg";
import heroHelly from "@/assets/hero-helly.jpg";
import heroUsual from "@/assets/hero-usual.jpg";
import heroAbout from "@/assets/hero-about.jpg";
import galleryBurger from "@/assets/gallery-burger.jpg";
import freshIngredients from "@/assets/fresh-ingredients.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const galleryImages = [
  { src: heroCatering, alt: "Luxury catering event setup", span: "col-span-2 row-span-2" },
  { src: heroUsual, alt: "Gourmet burger close-up", span: "" },
  { src: heroHelly, alt: "Fresh healthy food spread", span: "" },
  { src: heroHome, alt: "Premium burger selection", span: "" },
  { src: heroAbout, alt: "Chef preparing food", span: "" },
  { src: galleryBurger, alt: "Artisan cheeseburger", span: "" },
  { src: freshIngredients, alt: "Fresh ingredients", span: "" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="bg-obsidian min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
        >
          <img src={heroCatering} alt="Gallery hero" className="w-full h-full object-cover" />
        </motion.div>
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-gradient-gold" />
            <span className="font-body text-xs tracking-luxury uppercase text-gold">Visual Journey</span>
            <span className="h-px w-12 bg-gradient-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-display text-5xl md:text-7xl font-bold mb-4"
          >
            Our <span className="text-gold-gradient italic">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-cormorant text-xl text-foreground/70 italic"
          >
            Cinematic food photography — every dish tells a story.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">Food Photography</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Crafted with <span className="text-gold-gradient italic">Passion</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          {/* Masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${img.span}`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-gold/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second gallery row */}
      <section className="py-16 bg-obsidian">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[heroHelly, heroHome, heroAbout].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="relative h-72 overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/30 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Gallery lightbox"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
