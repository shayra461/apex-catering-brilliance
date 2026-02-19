import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroCatering from "@/assets/hero-catering.jpg";
import heroHome from "@/assets/hero-home.jpg";
import heroHealthy from "@/assets/hero-healthy.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const steps = [
  {
    num: "01",
    title: "Choose Your Menu",
    subtitle: "Classic or Healthy",
    desc: "Select from Your Usual fast-food favourites or our Healthy Food healthy alternatives — or mix and match for your event.",
    icon: "🍔",
    details: ["Browse our full menu options", "Mix & match from both menus", "Discuss dietary requirements", "Custom options available"],
  },
  {
    num: "02",
    title: "Select Event Details",
    subtitle: "Date, Time & Guest Count",
    desc: "Tell us your event date, start time, duration, and how many guests you're expecting. We'll take it from there.",
    icon: "📅",
    details: ["Set your event date & time", "Confirm guest numbers", "Choose service type", "Select pickup or delivery"],
  },
  {
    num: "03",
    title: "We Prepare Everything Fresh",
    subtitle: "Made from Scratch on the Day",
    desc: "Our team prepares every item from scratch on the day of your event. Nothing is pre-cooked or reheated — ever.",
    icon: "👨‍🍳",
    details: ["Fresh prep on the day", "Premium quality ingredients", "Professionally presented", "Dietary options catered for"],
  },
  {
    num: "04",
    title: "Pickup or Delivery",
    subtitle: "We Come to You",
    desc: "We deliver directly to your venue or you can arrange a convenient pickup. Full service setup included.",
    icon: "🚚",
    details: ["Venue delivery available", "Full setup included", "On-time guaranteed", "Post-event cleanup"],
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main className="bg-obsidian min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
        >
          <img src={heroCatering} alt="Catering event" className="w-full h-full object-cover" />
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
            <span className="font-body text-xs tracking-luxury uppercase text-gold">Simple & Effortless</span>
            <span className="h-px w-12 bg-gradient-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-display text-5xl md:text-7xl font-bold mb-4"
          >
            Catering <span className="text-gold-gradient italic">With Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-cormorant text-xl text-foreground/70 italic"
          >
            Four simple steps to extraordinary food at your event.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">The Process</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Four Steps to <span className="text-gold-gradient italic">Excellence</span>
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className={`luxury-card rounded-lg p-8 cursor-pointer transition-all duration-300 ${activeStep === i ? "border-gold/60 shadow-gold" : ""
                  }`}
                onClick={() => setActiveStep(i)}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="font-display text-4xl font-bold text-gold/20 mb-2">{step.num}</div>
                <h3 className="font-display text-lg font-semibold mb-1">{step.title}</h3>
                <p className="font-body text-xs text-gold mb-3">{step.subtitle}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Active step detail */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-charcoal border border-gold/20 rounded-lg p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="font-display text-6xl font-bold text-gold/15 block mb-2">
                  {steps[activeStep].num}
                </span>
                <h3 className="font-display text-3xl font-bold mb-2">{steps[activeStep].title}</h3>
                <p className="font-body text-sm text-gold mb-6">{steps[activeStep].subtitle}</p>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                  {steps[activeStep].desc}
                </p>
                <ul className="space-y-3">
                  {steps[activeStep].details.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-gold flex-shrink-0" />
                      <span className="font-body text-sm text-foreground/80">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-6">{steps[activeStep].icon}</div>
                <div className="flex justify-center gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`w-8 h-1 rounded-full transition-all duration-300 ${activeStep === i ? "bg-gold w-16" : "bg-gold/30"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 bg-obsidian relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={heroHome} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">What Sets Us Apart</span>
            <h2 className="font-display text-4xl font-bold mb-12">
              Why Our Clients <span className="text-gold-gradient italic">Come Back</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { val: "100%", label: "Scratch-made food" },
                { val: "0", label: "Pre-packaged items" },
                { val: "★★★★★", label: "Client satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="luxury-card rounded-lg p-8">
                  <div className="font-display text-4xl font-bold text-gold mb-2">{stat.val}</div>
                  <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-gold rounded-sm inline-flex items-center gap-2">
              Start Your Booking <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
