import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlarmClock,
  CheckCircle2,
  ChevronRight,
  Clock,
  Globe,
  Heart,
  Layers,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const PHONE = "+91 98982 81989";
const PHONE_TEL = "tel:+919898281989";
const ADDRESS =
  "201-203, Bricklane 1964, Opp Ratri Bazar, Mangal Pandey Road, Near L & T Circle, Karelibagh, Vadodara, Gujarat 390018";
const WEBSITE = "https://nextdentist.com/";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: <Smile className="w-7 h-7" />,
    title: "General Dentistry",
    description:
      "Comprehensive check-ups, fillings, extractions and preventive care to keep your smile healthy for a lifetime.",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Cosmetic Dentistry",
    description:
      "Porcelain veneers, bonding, and smile makeovers crafted to give you the confidence you deserve.",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Orthodontics",
    description:
      "Traditional braces and modern clear aligners to straighten your teeth discreetly and effectively.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements that restore your bite, speech, and full smile.",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Teeth Whitening",
    description:
      "Professional-grade whitening treatments that brighten your smile by multiple shades in a single visit.",
  },
  {
    icon: <AlarmClock className="w-7 h-7" />,
    title: "Emergency Care",
    description:
      "Prompt, compassionate emergency dental care for toothaches, broken teeth, and urgent situations.",
  },
];

const WHY_US = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Experienced Team",
    description:
      "Our highly qualified dental professionals bring years of specialized expertise to every procedure.",
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Advanced Technology",
    description:
      "State-of-the-art digital X-rays, 3D imaging, and modern equipment for precise, comfortable treatments.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Comfortable Environment",
    description:
      "A warm, calming clinic designed to ease dental anxiety and make every visit a pleasant experience.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Affordable Care",
    description:
      "Transparent pricing and flexible payment plans so premium dental care fits every family's budget.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── NAV ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            data-ocid="nav.link"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center shadow-sm">
              <Smile className="w-5 h-5 text-white" />
            </div>
            <span
              className={`font-display font-bold text-xl tracking-tight transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Next Dentist
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 ${
                  scrolled
                    ? "text-foreground hover:bg-secondary hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href={PHONE_TEL} data-ocid="nav.primary_button">
              <Button
                size="sm"
                className="ml-3 gold-gradient text-white border-0 hover:opacity-90 shadow-sm font-semibold"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Call Us
              </Button>
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-border shadow-card"
            >
              <div className="container px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid="nav.link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={PHONE_TEL}
                  data-ocid="nav.primary_button"
                  className="mt-2"
                >
                  <Button className="w-full gold-gradient text-white border-0 font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now — {PHONE}
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-dental.dim_1200x600.jpg')",
          }}
        />
        <div className="absolute inset-0 hero-gradient" />

        {/* Decorative circles */}
        <div className="absolute top-24 right-12 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute bottom-20 left-8 w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 bg-white/15 text-white border-white/25 backdrop-blur-sm text-xs tracking-widest uppercase font-semibold px-4 py-1.5">
                <Clock className="w-3 h-3 mr-1.5" /> Vadodara's Trusted Dental
                Clinic
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight text-balance mb-6"
            >
              Your Smile, <span className="text-accent">Our Passion</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Expert dental care in Karelibagh, Vadodara. From routine check-ups
              to complete smile transformations — we make every visit
              comfortable and every result exceptional.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={PHONE_TEL} data-ocid="hero.primary_button">
                <Button
                  size="lg"
                  className="gold-gradient text-white border-0 hover:opacity-90 shadow-glow font-semibold text-base px-8 h-13"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </a>
              <a href="#services" data-ocid="hero.secondary_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-medium text-base px-8 h-13"
                >
                  Our Services
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-4 max-w-lg"
          >
            {[
              { value: "5000+", label: "Happy Patients" },
              { value: "15+", label: "Years Experience" },
              { value: "6", label: "Specialties" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15"
              >
                <div className="font-display text-2xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-widest uppercase text-primary mb-3"
            >
              What We Offer
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight"
            >
              Comprehensive Dental{" "}
              <span className="text-primary">Services</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto"
            >
              From preventive care to advanced cosmetic procedures, we offer a
              full spectrum of dental treatments under one roof.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                data-ocid={`services.item.${i + 1}`}
                className="group relative bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/4 -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why-us" className="py-24 section-fade">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-widest uppercase text-primary mb-3"
            >
              Our Difference
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight"
            >
              Why Choose <span className="text-primary">Next Dentist?</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                data-ocid={`why.item.${i + 1}`}
                className="text-center p-8 bg-card rounded-2xl border border-border shadow-xs hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-primary rounded-2xl px-8 py-10 md:py-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
          >
            <div className="flex-1">
              <p className="text-primary-foreground/80 text-lg italic leading-relaxed">
                &ldquo;The best dental experience I've ever had. The team is so
                professional and caring. My smile has never looked
                better!&rdquo;
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                ))}
                <span className="text-primary-foreground/70 text-sm ml-1">
                  — Priya S., Vadodara
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a href={PHONE_TEL} data-ocid="why.primary_button">
                <Button
                  size="lg"
                  className="gold-gradient text-white border-0 hover:opacity-90 font-semibold px-8"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-widest uppercase text-primary mb-3"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold text-foreground"
            >
              Visit Us Today
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg mt-4 max-w-md mx-auto"
            >
              We'd love to help you achieve the smile of your dreams. Reach out
              anytime.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-col gap-5"
            >
              {/* Phone */}
              <motion.a
                variants={fadeUp}
                href={PHONE_TEL}
                data-ocid="contact.link"
                className="group flex items-start gap-5 bg-card border border-border rounded-2xl p-6 shadow-xs hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Phone
                  </p>
                  <p className="font-display font-semibold text-xl text-foreground">
                    {PHONE}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Call us anytime for appointments
                  </p>
                </div>
              </motion.a>

              {/* Address */}
              <motion.div
                variants={fadeUp}
                data-ocid="contact.card"
                className="flex items-start gap-5 bg-card border border-border rounded-2xl p-6 shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Address
                  </p>
                  <p className="font-medium text-foreground leading-relaxed">
                    {ADDRESS}
                  </p>
                </div>
              </motion.div>

              {/* Website */}
              <motion.a
                variants={fadeUp}
                href={WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.link"
                className="group flex items-start gap-5 bg-card border border-border rounded-2xl p-6 shadow-xs hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Website
                  </p>
                  <p className="font-display font-semibold text-xl text-primary underline-offset-2 hover:underline">
                    nextdentist.com
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Visit our official website
                  </p>
                </div>
              </motion.a>
            </motion.div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary rounded-2xl p-10 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                  <Smile className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Ready for a Healthier Smile?
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Don't wait for the perfect time — your dental health matters
                  today. Call us now to schedule your appointment with our
                  expert team.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Free initial consultation",
                    "Flexible appointment slots",
                    "Family-friendly environment",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-primary-foreground/90 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={PHONE_TEL} data-ocid="contact.primary_button">
                <Button
                  size="lg"
                  className="w-full gold-gradient text-white border-0 hover:opacity-90 font-semibold text-base h-13 shadow-md"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now — {PHONE}
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
                  <Smile className="w-4 h-4 text-white" />
                </div>
                <span className="font-display text-lg font-bold text-white">
                  Next Dentist
                </span>
              </div>
              <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
                Your trusted dental partner in Vadodara. Exceptional care,
                comfortable environment, beautiful smiles.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-ocid="footer.link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact mini */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={PHONE_TEL}
                    data-ocid="footer.link"
                    className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {PHONE}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-primary-foreground/60 text-sm">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>Karelibagh, Vadodara, Gujarat 390018</span>
                </li>
                <li>
                  <a
                    href={WEBSITE}
                    data-ocid="footer.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    nextdentist.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
            <span>
              &copy; {new Date().getFullYear()} Next Dentist. All rights
              reserved.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/70 transition-colors"
            >
              Built with <Heart className="w-3 h-3 inline text-accent" /> using
              caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
