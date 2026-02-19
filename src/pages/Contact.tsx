import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  eventDate: z.string().min(1, "Please select an event date"),
  eventType: z.enum(["birthday", "corporate", "wedding", "graduation", "family", "school", "other"], {
    required_error: "Please select an event type",
  }),
  guests: z.string().min(1, "Please enter guest count"),
  menu: z.enum(["usual", "helly", "both"], { required_error: "Please select a menu" }),
  message: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Quote request:", data);
    setSubmitted(true);
  };

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
          <img src={heroContact} alt="Contact hero" className="w-full h-full object-cover" />
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
            <span className="font-body text-xs tracking-luxury uppercase text-gold">Let's Talk</span>
            <span className="h-px w-12 bg-gradient-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-display text-5xl md:text-7xl font-bold mb-4"
          >
            Get a <span className="text-gold-gradient italic">Quote</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-cormorant text-xl text-foreground/70 italic"
          >
            Tell us about your event and we'll craft the perfect menu for you.
          </motion.p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-body text-xs tracking-luxury uppercase text-gold mb-4 block">Contact Info</span>
                <h2 className="font-display text-3xl font-bold mb-8">
                  We'd Love to <span className="text-gold-gradient italic">Hear From You</span>
                </h2>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: <Phone size={16} />, label: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                    { icon: <Mail size={16} />, label: "Email Us", value: "hello@apexsvc.com", href: "mailto:hello@apexsvc.com" },
                    { icon: <MapPin size={16} />, label: "Service Area", value: "Serving Your Region & Surrounding Areas", href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-body text-xs text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-body text-sm hover:text-gold transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-body text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/1234567890?text=Hi%20Apex%20SVC!%20I'd%20like%20to%20get%20a%20catering%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold rounded-sm inline-flex items-center gap-2 w-full justify-center"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="luxury-card rounded-lg p-8"
              >
                {submitted ? (
                  <div className="text-center py-16">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle size={60} className="text-gold mx-auto mb-6" />
                    </motion.div>
                    <h3 className="font-display text-3xl font-bold mb-4">
                      Quote Request <span className="text-gold-gradient italic">Received!</span>
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Thank you! We'll be in touch within 24 hours to discuss your event.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h3 className="font-display text-2xl font-bold mb-6">
                      Request a <span className="text-gold-gradient italic">Quote</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-2 block">
                          Full Name *
                        </label>
                        <input
                          {...register("name")}
                          placeholder="John Smith"
                          className="w-full bg-obsidian border border-gold/20 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder:text-muted-foreground/50"
                        />
                        {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-2 block">
                          Email *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-obsidian border border-gold/20 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder:text-muted-foreground/50"
                        />
                        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-2 block">
                          Phone *
                        </label>
                        <input
                          {...register("phone")}
                          placeholder="+1 234 567 890"
                          className="w-full bg-obsidian border border-gold/20 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder:text-muted-foreground/50"
                        />
                        {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>}
                      </div>

                      {/* Event Date */}
                      <div>
                        <label className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-2 block">
                          Event Date *
                        </label>
                        <input
                          {...register("eventDate")}
                          type="date"
                          className="w-full bg-obsidian border border-gold/20 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors text-foreground/80"
                        />
                        {errors.eventDate && <p className="text-xs text-red-400 mt-1">{errors.eventDate.message}</p>}
                      </div>

                      {/* Event Type */}
                      <div>
                        <label className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-2 block">
                          Event Type *
                        </label>
                        <select
                          {...register("eventType")}
                          className="w-full bg-obsidian border border-gold/20 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors text-foreground/80"
                        >
                          <option value="">Select event type</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="wedding">Wedding / Engagement</option>
                          <option value="graduation">Graduation</option>
                          <option value="family">Family Gathering</option>
                          <option value="school">School Event</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.eventType && <p className="text-xs text-red-400 mt-1">{errors.eventType.message}</p>}
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-2 block">
                          Number of Guests *
                        </label>
                        <input
                          {...register("guests")}
                          placeholder="e.g. 50"
                          className="w-full bg-obsidian border border-gold/20 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder:text-muted-foreground/50"
                        />
                        {errors.guests && <p className="text-xs text-red-400 mt-1">{errors.guests.message}</p>}
                      </div>
                    </div>

                    {/* Menu */}
                    <div>
                      <label className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-2 block">
                        Menu Preference *
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { val: "usual", label: "Your Usual" },
                          { val: "helly", label: "Helly Food" },
                          { val: "both", label: "Both Menus" },
                        ].map((opt) => (
                          <label key={opt.val} className="cursor-pointer">
                            <input {...register("menu")} type="radio" value={opt.val} className="peer sr-only" />
                            <div className="peer-checked:border-gold peer-checked:text-gold border border-gold/20 rounded-sm px-4 py-3 text-center font-body text-xs transition-all duration-200 text-muted-foreground hover:border-gold/40 cursor-pointer">
                              {opt.label}
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.menu && <p className="text-xs text-red-400 mt-1">{errors.menu.message}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="font-body text-xs tracking-luxury uppercase text-muted-foreground mb-2 block">
                        Additional Details
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Tell us more about your event, dietary requirements, or special requests..."
                        className="w-full bg-obsidian border border-gold/20 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors placeholder:text-muted-foreground/50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold rounded-sm w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Request a Quote"}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
