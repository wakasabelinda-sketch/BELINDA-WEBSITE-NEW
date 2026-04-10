import { useState, useEffect } from "react";
import "@/App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Scale, 
  Building2, 
  FileText, 
  Briefcase,
  ChevronDown,
  MessageCircle
} from "lucide-react";

// Images from design guidelines
const IMAGES = {
  hero: "https://static.prod-images.emergentagent.com/jobs/08395e50-0435-49c0-a077-ea54cebce589/images/397cd13cdde5f3b287a46ae14da0bfe305afc3eb9744b207c8dcbe05d454e469.png",
  about: "https://static.prod-images.emergentagent.com/jobs/08395e50-0435-49c0-a077-ea54cebce589/images/16faf220fa97d1082a4863d55145cf05480e62df73394eb20c18a04c90c60a73.png",
  practice: "https://static.prod-images.emergentagent.com/jobs/08395e50-0435-49c0-a077-ea54cebce589/images/85d06d890ea3be47c2f2e140872bf93191e68a87e4f4c3c0e67dac41360e1d64.png",
  contact: "https://static.prod-images.emergentagent.com/jobs/08395e50-0435-49c0-a077-ea54cebce589/images/1a59139fb59d5db588f944552cdf4a2f7eee498610cae1baca3185ca65b656ab.png",
  skyline: "https://images.unsplash.com/photo-1741991110666-88115e724741?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxuYWlyb2JpJTIwc2t5bGluZSUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzc1ODA0NTcyfDA&ixlib=rb-4.1.0&q=85"
};

// Contact information
const CONTACT = {
  phone: "0758 913 512",
  phoneFormatted: "+254758913512",
  email: "wakasabelinda@gmail.com",
  location: "Nairobi, Kenya"
};

// Practice areas data
const PRACTICE_AREAS = [
  {
    id: "commercial",
    title: "Commercial Law",
    description: "Comprehensive legal counsel for business transactions, contracts, and commercial disputes. Expert guidance on trade agreements, licensing, and regulatory compliance.",
    icon: Building2,
    featured: true
  },
  {
    id: "litigation",
    title: "Litigation",
    description: "Strategic representation in civil and commercial disputes before the High Court and subordinate courts. Committed to achieving favorable outcomes through skilled advocacy.",
    icon: Scale,
    featured: false
  },
  {
    id: "conveyancing",
    title: "Conveyancing",
    description: "Professional handling of property transactions, land transfers, and real estate documentation. Ensuring secure and legally compliant property dealings.",
    icon: FileText,
    featured: false
  },
  {
    id: "corporate",
    title: "Corporate Advisory",
    description: "Strategic legal advice for corporate governance, mergers, acquisitions, and company formations. Guiding businesses through complex legal landscapes.",
    icon: Briefcase,
    featured: false
  }
];

// FAQ data
const FAQ_DATA = [
  {
    question: "What areas of law do you specialize in?",
    answer: "I specialize in Commercial Law, Litigation, Conveyancing, and Corporate Advisory. My practice focuses on providing comprehensive legal solutions for businesses and individuals in Nairobi and throughout Kenya."
  },
  {
    question: "How do I schedule a consultation?",
    answer: "You can schedule a consultation by calling 0758 913 512, sending an email to wakasabelinda@gmail.com, or using the contact form on this website. I typically respond within 24 hours on business days."
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "Please bring any relevant documents related to your legal matter, such as contracts, correspondence, court documents, or identification papers. A summary of your situation and key questions you'd like addressed will help make the consultation productive."
  },
  {
    question: "Do you offer services outside Nairobi?",
    answer: "Yes, while my primary office is in Nairobi, I represent clients throughout Kenya. For matters outside Nairobi, we can arrange virtual consultations and coordinate with local counsel when necessary."
  },
  {
    question: "What are your fees and payment terms?",
    answer: "Fees vary depending on the nature and complexity of the matter. I offer transparent pricing and will provide a clear fee structure during our initial consultation. Payment plans can be discussed for qualifying cases."
  }
];

// Navigation links
const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      data-testid="header"
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "header-glass border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="font-serif font-bold text-2xl text-legal-text"
            data-testid="logo"
          >
            BW.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="font-sans text-sm font-medium text-legal-text hover:text-legal-gold transition-colors gold-underline"
                data-testid={`nav-${link.label.toLowerCase()}-link`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection("#contact"); }}
              className="bg-legal-text text-white px-6 py-3 font-sans text-sm font-medium hover:bg-legal-gold transition-colors"
              data-testid="nav-contact-button"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-legal-text" />
            ) : (
              <Menu className="w-6 h-6 text-legal-text" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-legal-bg border-t border-legal-border"
          data-testid="mobile-menu"
        >
          <nav className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="font-sans text-base font-medium text-legal-text py-2 border-b border-legal-border"
                data-testid={`mobile-nav-${link.label.toLowerCase()}-link`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto"
      data-testid="hero-section"
    >
      <div className="grid grid-cols-12 gap-8 items-center min-h-[80vh]">
        {/* Left Content */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <div className="space-y-6 animate-fade-in-up">
            <p className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-legal-gold">
              Belinda Wakasa, Advocate of the High Court of Kenya
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-none font-bold text-legal-text">
              Advocating for Truth & Corporate Excellence
            </h1>
            <p className="font-sans text-base md:text-lg text-legal-text-muted leading-relaxed max-w-xl">
              Providing exceptional legal representation in commercial disputes, corporate advisory, 
              and property transactions across Kenya. Committed to protecting your interests with 
              integrity and expertise.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-200">
            <a
              href="#contact"
              onClick={(e) => { 
                e.preventDefault(); 
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); 
              }}
              className="bg-legal-text text-white px-8 py-4 font-sans text-sm font-medium inline-flex items-center gap-2 btn-primary"
              data-testid="hero-cta-button"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${CONTACT.phoneFormatted}`}
              className="border border-legal-text text-legal-text px-8 py-4 font-sans text-sm font-medium inline-flex items-center gap-2 hover:bg-legal-text hover:text-white transition-colors"
              data-testid="hero-call-button"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="hidden lg:flex items-center gap-2 pt-12 animate-fade-in animation-delay-500">
            <ChevronDown className="w-5 h-5 text-legal-gold animate-bounce" />
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-legal-text-muted">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-span-12 lg:col-span-5 animate-fade-in animation-delay-300">
          <div className="image-zoom">
            <img
              src={IMAGES.hero}
              alt="Scales of Justice"
              className="w-full h-auto object-contain"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-legal-bg-alt"
      data-testid="about-section"
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="col-span-12 lg:col-span-5">
            <div className="image-zoom gold-overlay">
              <img
                src={IMAGES.about}
                alt="Legal Gavel"
                className="w-full h-auto object-cover"
                data-testid="about-image"
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-legal-gold">
                About
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-legal-text">
                Dedicated Legal Counsel in Nairobi
              </h2>
            </div>

            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-legal-text-muted leading-relaxed">
                Belinda Wakasa is an Advocate of the High Court of Kenya with extensive experience 
                in commercial litigation, corporate law, and property transactions. Based in Nairobi, 
                she provides strategic legal advice to businesses and individuals navigating complex 
                legal challenges.
              </p>
              <p className="font-sans text-base md:text-lg text-legal-text-muted leading-relaxed">
                With a commitment to excellence and client-focused service, Belinda combines thorough 
                legal knowledge with practical business acumen. Her approach emphasizes clear 
                communication, strategic thinking, and achieving results that protect her clients' 
                interests.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-legal-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-legal-text">10+</p>
                <p className="font-sans text-sm text-legal-text-muted mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-legal-text">500+</p>
                <p className="font-sans text-sm text-legal-text-muted mt-1">Cases Handled</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-legal-text">98%</p>
                <p className="font-sans text-sm text-legal-text-muted mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Practice Areas Section
const PracticeAreasSection = () => {
  return (
    <section
      id="practice"
      className="py-24 md:py-32"
      data-testid="practice-section"
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="space-y-4 mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-legal-gold">
            Expertise
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-legal-text">
            Practice Areas
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured Card - Commercial Law */}
          <div
            className="md:col-span-7 border border-legal-border bg-white p-8 md:p-12 bento-card relative overflow-hidden group"
            data-testid="practice-commercial-card"
          >
            <div className="relative z-10 space-y-6">
              <Building2 className="w-10 h-10 text-legal-gold" strokeWidth={1.5} />
              <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight text-legal-text">
                Commercial Law
              </h3>
              <p className="font-sans text-base text-legal-text-muted leading-relaxed max-w-md">
                Comprehensive legal counsel for business transactions, contracts, and commercial 
                disputes. Expert guidance on trade agreements, licensing, and regulatory compliance.
              </p>
              <a
                href="#contact"
                onClick={(e) => { 
                  e.preventDefault(); 
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); 
                }}
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-legal-gold hover:text-legal-gold-hover transition-colors"
                data-testid="practice-commercial-link"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            {/* Background Image */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity">
              <img
                src={IMAGES.practice}
                alt=""
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>

          {/* Litigation Card */}
          <div
            className="md:col-span-5 border border-legal-border bg-white p-8 md:p-12 bento-card"
            data-testid="practice-litigation-card"
          >
            <div className="space-y-6">
              <Scale className="w-10 h-10 text-legal-gold" strokeWidth={1.5} />
              <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight text-legal-text">
                Litigation
              </h3>
              <p className="font-sans text-base text-legal-text-muted leading-relaxed">
                Strategic representation in civil and commercial disputes before the High Court 
                and subordinate courts. Committed to achieving favorable outcomes through skilled advocacy.
              </p>
              <a
                href="#contact"
                onClick={(e) => { 
                  e.preventDefault(); 
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); 
                }}
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-legal-gold hover:text-legal-gold-hover transition-colors"
                data-testid="practice-litigation-link"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Conveyancing Card */}
          <div
            className="md:col-span-5 border border-legal-border bg-white p-8 md:p-12 bento-card"
            data-testid="practice-conveyancing-card"
          >
            <div className="space-y-6">
              <FileText className="w-10 h-10 text-legal-gold" strokeWidth={1.5} />
              <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight text-legal-text">
                Conveyancing
              </h3>
              <p className="font-sans text-base text-legal-text-muted leading-relaxed">
                Professional handling of property transactions, land transfers, and real estate 
                documentation. Ensuring secure and legally compliant property dealings.
              </p>
              <a
                href="#contact"
                onClick={(e) => { 
                  e.preventDefault(); 
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); 
                }}
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-legal-gold hover:text-legal-gold-hover transition-colors"
                data-testid="practice-conveyancing-link"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Corporate Advisory Card */}
          <div
            className="md:col-span-7 border border-legal-border bg-white p-8 md:p-12 bento-card"
            data-testid="practice-corporate-card"
          >
            <div className="space-y-6">
              <Briefcase className="w-10 h-10 text-legal-gold" strokeWidth={1.5} />
              <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight text-legal-text">
                Corporate Advisory
              </h3>
              <p className="font-sans text-base text-legal-text-muted leading-relaxed max-w-md">
                Strategic legal advice for corporate governance, mergers, acquisitions, and company 
                formations. Guiding businesses through complex legal landscapes with expertise and precision.
              </p>
              <a
                href="#contact"
                onClick={(e) => { 
                  e.preventDefault(); 
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); 
                }}
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-legal-gold hover:text-legal-gold-hover transition-colors"
                data-testid="practice-corporate-link"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-legal-bg-alt"
      data-testid="faq-section"
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-12">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <p className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-legal-gold">
              FAQ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-legal-text">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-base text-legal-text-muted leading-relaxed">
              Find answers to common questions about legal services and working with an advocate.
            </p>
          </div>

          {/* Accordion */}
          <div className="col-span-12 lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-0" data-testid="faq-accordion">
              {FAQ_DATA.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-0 border-b border-legal-border"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger
                    className="font-serif text-lg md:text-xl text-legal-text py-6 hover:no-underline hover:text-legal-gold transition-colors text-left"
                    data-testid={`faq-trigger-${index}`}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="font-sans text-base text-legal-text-muted pb-6 leading-relaxed"
                    data-testid={`faq-content-${index}`}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Legal Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      data-testid="contact-section"
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-12">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-legal-gold">
                Get in Touch
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-legal-text">
                Schedule a Consultation
              </h2>
              <p className="font-sans text-base text-legal-text-muted leading-relaxed">
                Ready to discuss your legal needs? Contact us today to schedule a consultation 
                and learn how we can assist you.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href={`tel:${CONTACT.phoneFormatted}`}
                className="flex items-center gap-4 group"
                data-testid="contact-phone-link"
              >
                <div className="w-12 h-12 border border-legal-border flex items-center justify-center group-hover:border-legal-gold transition-colors">
                  <Phone className="w-5 h-5 text-legal-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-sm text-legal-text-muted">Phone</p>
                  <p className="font-sans text-base font-medium text-legal-text">{CONTACT.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 group"
                data-testid="contact-email-link"
              >
                <div className="w-12 h-12 border border-legal-border flex items-center justify-center group-hover:border-legal-gold transition-colors">
                  <Mail className="w-5 h-5 text-legal-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-sm text-legal-text-muted">Email</p>
                  <p className="font-sans text-base font-medium text-legal-text">{CONTACT.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-legal-border flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-legal-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-sm text-legal-text-muted">Location</p>
                  <p className="font-sans text-base font-medium text-legal-text">{CONTACT.location}</p>
                </div>
              </div>
            </div>

            {/* Abstract Image */}
            <div className="hidden lg:block mt-8">
              <img
                src={IMAGES.contact}
                alt="Abstract Gold Lines"
                className="w-full max-w-xs opacity-50"
                data-testid="contact-abstract-image"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-12 lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="font-sans text-sm font-medium text-legal-text block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="contact-input"
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label className="font-sans text-sm font-medium text-legal-text block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="contact-input"
                    data-testid="contact-email-input"
                  />
                </div>
              </div>

              <div>
                <label className="font-sans text-sm font-medium text-legal-text block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 7XX XXX XXX"
                  className="contact-input"
                  data-testid="contact-phone-input"
                />
              </div>

              <div>
                <label className="font-sans text-sm font-medium text-legal-text block mb-2">
                  How can we help? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Please describe your legal matter..."
                  className="contact-input resize-none"
                  data-testid="contact-message-input"
                />
              </div>

              <button
                type="submit"
                className="bg-legal-text text-white px-8 py-4 font-sans text-sm font-medium inline-flex items-center gap-2 btn-primary w-full md:w-auto justify-center"
                data-testid="contact-form-submit"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-20 bg-legal-text text-legal-bg footer-skyline"
      style={{
        backgroundImage: `url(${IMAGES.skyline})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}
      data-testid="footer"
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <p className="font-serif font-bold text-3xl">BW.</p>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Belinda Wakasa, Advocate of the High Court of Kenya. Providing excellence 
              in legal services across Nairobi and throughout Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-2 space-y-4">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-legal-gold">
              Quick Links
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); 
                  }}
                  className="font-sans text-sm text-white/70 hover:text-legal-gold transition-colors"
                  data-testid={`footer-${link.label.toLowerCase()}-link`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Practice Areas */}
          <div className="col-span-6 md:col-span-3 space-y-4">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-legal-gold">
              Practice Areas
            </p>
            <nav className="flex flex-col gap-3">
              {PRACTICE_AREAS.map((area) => (
                <a
                  key={area.id}
                  href="#practice"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.querySelector("#practice")?.scrollIntoView({ behavior: "smooth" }); 
                  }}
                  className="font-sans text-sm text-white/70 hover:text-legal-gold transition-colors"
                  data-testid={`footer-practice-${area.id}-link`}
                >
                  {area.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-3 space-y-4">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-legal-gold">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${CONTACT.phoneFormatted}`}
                className="font-sans text-sm text-white/70 hover:text-legal-gold transition-colors flex items-center gap-2"
                data-testid="footer-phone-link"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-sans text-sm text-white/70 hover:text-legal-gold transition-colors flex items-center gap-2"
                data-testid="footer-email-link"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                {CONTACT.email}
              </a>
              <p className="font-sans text-sm text-white/70 flex items-center gap-2">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                {CONTACT.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-white/50">
            © {currentYear} Belinda Wakasa, Advocate. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/50">
            Advocate of the High Court of Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Floating Button
const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${CONTACT.phoneFormatted.replace("+", "")}?text=${encodeURIComponent("Hello, I would like to inquire about your legal services.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-whatsapp text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center whatsapp-pulse"
      aria-label="Contact on WhatsApp"
      data-testid="whatsapp-floating-button"
    >
      <MessageCircle className="w-6 h-6" fill="white" strokeWidth={0} />
    </a>
  );
};

// Main App Component
function App() {
  return (
    <div className="bg-legal-bg min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
