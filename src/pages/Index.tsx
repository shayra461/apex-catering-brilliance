import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Star, Users, Utensils, Leaf, ArrowRight, CheckCircle } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import heroHealthy from "@/assets/hero-healthy.jpg";
import heroCatering from "@/assets/hero-catering.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Index() {
  const usps = [
    { icon: <Utensils size={22} />, title: "Scratch-Made", desc: "Every item prepared from scratch — no shortcuts, no shortcuts, no compromise." },
    { icon: <Leaf size={22} />, title: "Better Ingredients", desc: "Premium quality meats, fresher produce, and artisan breads you can taste the difference in." },
    { icon: <Star size={22} />, title: "Guilt-Free Flavour", desc: "All the taste you love, without the regret. Catering that nourishes and satisfies." },
    { icon: <Users size={22} />, title: "Any Event Size", desc: "Birthdays, corporate events, family gatherings — we scale to your needs." },
  ];

  const steps = [
    { num: "01", title: "Choose Your Menu", desc: "Select from Your Usual classics or our Healthy Food healthy options." },
    { num: "02", title: "Set Your Date & Count", desc: "Tell us your event date, time, and how many guests to expect." },
    { num: "03", title: "We Prep Everything Fresh", desc: "Your food is made from scratch on the day — never reheated, always fresh." },
    { num: "04", title: "Pickup or Delivery", desc: "We deliver to your venue or you can arrange pickup. Easy and stress-free." },
  ];

  const clients = [
    { icon: "🏢", label: "Corporate Events" },
    { icon: "🎂", label: "Birthday Parties" },
    { icon: "👨‍👩‍👧", label: "Family Gatherings" },
    { icon: "🎓", label: "Graduations" },
    { icon: "💍", label: "Engagements" },
    { icon: "🏫", label: "School Events" },
  ];

  return (
    <main className="bg-obsidian min-h-screen">
      <Navigation />

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/1234567890?text=Hi%20Apex%20SVC!%20I'd%20like%20to%20get%20a%20quote%20for%20catering."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <img
            src={heroHome}
            alt="Apex SVC luxury catering spread"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-gradient-gold" />
            <span className="font-body text-xs tracking-luxury uppercase text-gold">Premium Catering Services</span>
            <span className="h-px w-12 bg-gradient-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            Healthy Twist on Your<br />
            <span className="text-gold-gradient italic">Usual Catering</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="font-cormorant text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto font-light italic"
          >
            Scratch-made, fresh, guilt-free catering for events of every size.
            Premium flavours. No compromise on quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/menu-usual" className="btn-gold rounded-sm">
              View Menu
            </Link>
            <Link to="/contact" className="btn-outline-gold rounded-sm">
              Get a Quote
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs tracking-luxury uppercase text-foreground/50">Scroll</span>
          <ChevronDown size={18} className="text-gold animate-bounce" />
        </motion.div>
      </section>

      {/* ── USP SECTION ── */}
      <section className="py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-dark opacity-50" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">Why Choose Apex SVC</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Not Your Average <span className="text-gold-gradient italic">Catering</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="luxury-card rounded-lg p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto mb-5">
                  {usp.icon}
                </div>
                <h3 className="font-display text-lg font-semibold mb-3">{usp.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU PREVIEW ── */}
      <section className="py-28 bg-obsidian">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">Our Menus</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Two Menus. <span className="text-gold-gradient italic">One Standard.</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Your Usual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative rounded-lg overflow-hidden h-[480px] cursor-pointer"
            >
              <img
                src={heroHome}
                alt="Your Usual Menu"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-body text-xs tracking-luxury uppercase text-gold block mb-3">Classic Favourites</span>
                <h3 className="font-display text-3xl font-bold mb-3">Your Usual</h3>
                <p className="font-body text-sm text-foreground/70 mb-6 max-w-xs">
                  Premium burgers, hotdogs & griddle items made from scratch — better than anything you've had before.
                </p>
                <Link
                  to="/menu-usual"
                  className="btn-gold rounded-sm inline-flex items-center gap-2 text-xs"
                >
                  View Menu <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Helly Food */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative rounded-lg overflow-hidden h-[480px] cursor-pointer"
            >
              <img
                src={heroHealthy}
                alt="Healthy Food - Healthy Menu"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-body text-xs tracking-luxury uppercase text-gold block mb-3">Healthy Alternatives</span>
                <h3 className="font-display text-3xl font-bold mb-3">Healthy Food</h3>
                <p className="font-body text-sm text-foreground/70 mb-6 max-w-xs">
                  Fresh, nutritious meals that don't compromise on flavour. Better bread, better meat, better you.
                </p>
                <Link
                  to="/menu-healthy"
                  className="btn-gold rounded-sm inline-flex items-center gap-2 text-xs"
                >
                  View Menu <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/3 blur-3xl" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">Simple Process</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              How It <span className="text-gold-gradient italic">Works</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gold/20 z-0" />
                )}
                <div className="relative z-10">
                  <div className="font-display text-5xl font-bold text-gold/20 mb-4">{step.num}</div>
                  <h3 className="font-display text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Link to="/how-it-works" className="btn-outline-gold rounded-sm inline-flex items-center gap-2">
              Learn More <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-28 bg-obsidian">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">Visual Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Feast Your <span className="text-gold-gradient italic">Eyes</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[heroCatering, heroHome, heroHealthy].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative rounded-lg overflow-hidden group h-72 md:h-80"
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/gallery" className="btn-outline-gold rounded-sm inline-flex items-center gap-2">
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CLIENT TYPES ── */}
      <section className="py-28 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">We Cater For</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Every <span className="text-gold-gradient italic">Occasion</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={client.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="luxury-card rounded-lg p-6 text-center group"
              >
                <div className="text-3xl mb-3">{client.icon}</div>
                <p className="font-body text-xs text-muted-foreground group-hover:text-gold transition-colors">{client.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <motion.div className="absolute inset-0">
          <img src={heroCatering} alt="Catering event" className="w-full h-full object-cover" />
        </motion.div>
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-6 block">Ready to Elevate Your Event?</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Let's Create Something<br />
              <span className="text-gold-gradient italic">Extraordinary</span>
            </h2>
            <p className="font-cormorant text-xl text-foreground/70 mb-10 italic">
              Scratch-made food for your next event. Get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold rounded-sm">
                Request a Quote
              </Link>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold rounded-sm inline-flex items-center justify-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
