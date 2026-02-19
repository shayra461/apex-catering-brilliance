import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Leaf } from "lucide-react";
import heroHelly from "@/assets/hero-helly.jpg";
import freshIngredients from "@/assets/fresh-ingredients.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const hellyItems = [
  {
    name: "Lean Turkey Burger",
    desc: "Lean ground turkey patty, avocado, spinach, tomato, and herb aioli on a whole-grain bun.",
    price: "From $13",
    tag: "High Protein",
  },
  {
    name: "Grilled Chicken Stack",
    desc: "Marinated grilled chicken breast, roasted peppers, cucumber, and Greek yogurt sauce.",
    price: "From $12",
    tag: "Low Calorie",
  },
  {
    name: "Fresh Salad Bowl",
    desc: "Mixed greens, cherry tomatoes, red onion, cucumber, and your choice of protein with lemon vinaigrette.",
    price: "From $11",
    tag: "Veg Friendly",
  },
  {
    name: "Helly Protein Dog",
    desc: "Chicken sausage in a whole-wheat bun with fresh salsa, spinach, and mustard.",
    price: "From $9",
    tag: "Lighter Option",
  },
  {
    name: "Power Wrap",
    desc: "Whole wheat tortilla with grilled chicken, quinoa, roasted veg, and tahini dressing.",
    price: "From $11",
    tag: "High Protein",
  },
  {
    name: "Veggie Smash",
    desc: "Black bean & sweet potato patty, roasted red pepper, baby greens, and avocado on multigrain bun.",
    price: "From $10",
    tag: "Plant-Based",
  },
];

const differentiators = [
  "Better bread — whole grain, multigrain, artisan options",
  "Better meat — lean cuts, fresh-ground, no fillers",
  "Fresh produce — sourced daily for maximum nutrition",
  "No shortcuts — everything is made to order from scratch",
  "Lower calorie options without sacrificing flavour",
  "Suitable for health-conscious corporate events",
];

export default function MenuHelly() {
  return (
    <main className="bg-obsidian min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <img src={heroHelly} alt="Helly Food Healthy Menu" className="w-full h-full object-cover" />
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
            <span className="font-body text-xs tracking-luxury uppercase text-gold flex items-center gap-2">
              <Leaf size={12} /> Healthy Alternatives
            </span>
            <span className="h-px w-12 bg-gradient-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-display text-5xl md:text-7xl font-bold mb-4"
          >
            Helly <span className="text-gold-gradient italic">Food</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-cormorant text-xl md:text-2xl text-foreground/70 italic max-w-xl mx-auto"
          >
            Guilt-free catering that actually tastes amazing. Fresh, nourishing, and premium.
          </motion.p>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">Our Philosophy</span>
              <h2 className="font-display text-4xl font-bold mb-6">
                The Difference is in the <span className="text-gold-gradient italic">Details</span>
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                Traditional fast food cuts corners — we don't. Helly Food was born from a belief that you shouldn't 
                have to choose between eating well and enjoying your food. Better ingredients, better preparation, 
                better results.
              </p>
              <ul className="space-y-3">
                {differentiators.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground/80">{d}</span>
                  </li>
                ))}
              </ul>
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
                src={freshIngredients}
                alt="Fresh ingredients"
                className="relative rounded-lg w-full h-[500px] object-cover border border-gold/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">Healthy Menu</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Clean, Fresh & <span className="text-gold-gradient italic">Delicious</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hellyItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="luxury-card rounded-lg p-7 group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 rounded-full px-3 py-1 text-gold text-xs font-body">
                    <Leaf size={11} /> {item.tag}
                  </span>
                  <span className="font-body text-sm text-gold font-medium">{item.price}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-6 pt-6 border-t border-gold/10">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle size={13} className="text-gold" />
                    <span className="font-body text-xs">Always made fresh to order</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact" className="btn-gold rounded-sm inline-flex items-center gap-2">
              Book Helly Food Catering <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
