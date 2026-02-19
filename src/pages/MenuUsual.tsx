import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroUsual from "@/assets/hero-usual.jpg";
import galleryBurger from "@/assets/gallery-burger.jpg";
import heroHome from "@/assets/hero-home.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const menuItems = [
  {
    name: "The Apex Burger",
    desc: "Double beef smash patty, American cheese, caramelized onions, signature sauce on a brioche bun.",
    price: "From $12",
    badge: "Bestseller",
    img: galleryBurger,
  },
  {
    name: "Classic Cheeseburger",
    desc: "Juicy beef patty, cheddar, lettuce, tomato, pickles, and house mustard on a toasted bun.",
    price: "From $10",
    badge: null,
    img: heroHome,
  },
  {
    name: "Gourmet Hotdog",
    desc: "All-beef frank in a steamed brioche bun with crispy onions, relish, and mustard.",
    price: "From $8",
    badge: null,
    img: heroUsual,
  },
  {
    name: "Griddle Dog",
    desc: "Griddle-seared hotdog with caramelized onions, jalapeños, and cheese sauce.",
    price: "From $9",
    badge: "Fan Favourite",
    img: heroHome,
  },
  {
    name: "Double Smash",
    desc: "Two thin smash patties, double cheese, special sauce, pickles, and shredded lettuce.",
    price: "From $14",
    badge: null,
    img: galleryBurger,
  },
  {
    name: "Loaded Fries",
    desc: "Golden crispy fries loaded with cheese sauce, crispy onions, and your choice of topping.",
    price: "From $7",
    badge: null,
    img: heroHome,
  },
];

export default function MenuUsual() {
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
          <img src={heroUsual} alt="Your Usual Menu" className="w-full h-full object-cover" />
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
            <span className="font-body text-xs tracking-luxury uppercase text-gold">Classic Favourites</span>
            <span className="h-px w-12 bg-gradient-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-display text-5xl md:text-7xl font-bold mb-4"
          >
            Your <span className="text-gold-gradient italic">Usual</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-cormorant text-xl md:text-2xl text-foreground/70 italic"
          >
            Premium fast-food classics. Scratch-made. Always.
          </motion.p>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="bg-charcoal py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold mb-4">
                Fast food — <span className="text-gold-gradient italic">elevated.</span>
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                We didn't reinvent the wheel — we just made it better. Every burger, hotdog, and griddle item 
                starts from scratch with premium ingredients. Better bread, better meat, better everything.
              </p>
            </div>
            <div className="flex gap-8 text-center">
              {[["100%", "Scratch-Made"], ["Fresh", "Every Day"], ["Premium", "Ingredients"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-bold text-gold">{val}</div>
                  <div className="font-body text-xs text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">The Menu</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Our <span className="text-gold-gradient italic">Signature Items</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="luxury-card rounded-lg overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="btn-gold rounded-sm text-xs py-1 px-3">{item.badge}</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                    <span className="font-body text-sm text-gold font-medium whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-cormorant text-lg text-muted-foreground italic mb-8">
              Catering packages available for all group sizes. Pricing based on guest count.
            </p>
            <Link to="/contact" className="btn-gold rounded-sm inline-flex items-center gap-2">
              Get a Custom Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
