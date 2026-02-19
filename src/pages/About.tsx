import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Star, Shield } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import freshIngredients from "@/assets/fresh-ingredients.jpg";
import heroCatering from "@/assets/hero-catering.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const values = [
  { icon: <Heart size={20} />, title: "Made with Love", desc: "Every dish is crafted with genuine care and passion for quality food." },
  { icon: <Star size={20} />, title: "Premium Standard", desc: "We never settle for less than excellence — from ingredient to presentation." },
  { icon: <Shield size={20} />, title: "Health First", desc: "Your wellbeing matters. Better ingredients, better outcomes, guilt-free enjoyment." },
];

export default function About() {
  return (
    <main className="bg-obsidian min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
        >
          <img src={heroAbout} alt="James's story" className="w-full h-full object-cover" />
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
            <span className="font-body text-xs tracking-luxury uppercase text-gold">The Story Behind Apex SVC</span>
            <span className="h-px w-12 bg-gradient-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-display text-5xl md:text-7xl font-bold mb-4"
          >
            James's <span className="text-gold-gradient italic">Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-cormorant text-xl text-foreground/70 italic max-w-xl mx-auto"
          >
            A passion for real food, born from frustration with the ordinary.
          </motion.p>
        </div>
      </section>

      {/* Story Section 1 */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-body text-xs tracking-luxury uppercase text-gold mb-6 block">The Beginning</span>
              <h2 className="font-display text-4xl font-bold mb-6">
                Frustrated with <span className="text-gold-gradient italic">Fast Food</span>
              </h2>
              <div className="space-y-5 font-cormorant text-lg text-foreground/80 italic leading-relaxed">
                <p>
                  "I grew up eating catered events where the food was just… there. Pre-cooked, reheated, 
                  mass-produced. It looked the part but tasted like nothing. I kept thinking — it doesn't 
                  have to be this way."
                </p>
                <p>
                  "Traditional fast food chains cut corners on everything — the bread, the meat, the 
                  preparation. The focus is always on speed and volume, never on quality. I wanted to 
                  challenge that."
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gold/5 rounded-lg blur-xl" />
              <img
                src={heroAbout}
                alt="James preparing food"
                className="relative rounded-lg w-full h-[450px] object-cover border border-gold/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-charcoal border border-gold/30 rounded-lg p-6 shadow-luxury">
                <div className="font-display text-3xl font-bold text-gold mb-1">10+</div>
                <div className="font-body text-xs text-muted-foreground">Years of Catering Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section 2 - Vision */}
      <section className="py-24 bg-obsidian relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gold/5 rounded-lg blur-xl" />
              <img
                src={freshIngredients}
                alt="Fresh premium ingredients"
                className="relative rounded-lg w-full h-[450px] object-cover border border-gold/20"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="font-body text-xs tracking-luxury uppercase text-gold mb-6 block">The Vision</span>
              <h2 className="font-display text-4xl font-bold mb-6">
                Guilt-Free Food at the <span className="text-gold-gradient italic">Best Price</span>
              </h2>
              <div className="space-y-5 font-cormorant text-lg text-foreground/80 italic leading-relaxed mb-8">
                <p>
                  "I started Apex SVC with one goal: to give people the food they love, made properly. 
                  Not a watered-down health version — actually delicious food that also happens to be 
                  better for you."
                </p>
                <p>
                  "Better bread. Better meat. Fresh ingredients prepped on the day. It costs a little 
                  more attention, but not necessarily more money. That's the Apex promise."
                </p>
              </div>

              <blockquote className="border-l-2 border-gold pl-6 mb-8">
                <p className="font-display text-xl italic text-foreground/90">
                  "You deserve catering that nourishes you, not just fills you up."
                </p>
                <footer className="font-body text-xs text-gold mt-2">— James, Founder of Apex SVC</footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">What We Stand For</span>
            <h2 className="font-display text-4xl font-bold">
              Our Core <span className="text-gold-gradient italic">Values</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="luxury-card rounded-lg p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto mb-5">
                  {val.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{val.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCatering} alt="Catering" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience <span className="text-gold-gradient italic">Apex Quality?</span>
            </h2>
            <p className="font-cormorant text-xl text-foreground/70 italic mb-10">
              Let James and the Apex team make your next event unforgettable.
            </p>
            <Link to="/contact" className="btn-gold rounded-sm inline-flex items-center gap-2">
              Get a Quote Today <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
