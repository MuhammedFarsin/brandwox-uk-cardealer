// FULL, CLEAN, OPTIMIZED LANDING PAGE WITH ZERO LAG
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TrustBadge } from "@/components/TrustBadge";

import {
  Zap,
  Target,
  Palette,
  TrendingUp,
  Clock,
  Award,
  Rocket,
  Globe,
  ArrowRight,
  Megaphone,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// 🔥 PERFORMANCE: prevent initial animation lag
const useHeroReady = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);
  return ready;
};

const Index = () => {
  const ready = useHeroReady(); // polished hook

  const fade = ready ? "animate-fade-in opacity-100" : "opacity-0";
  const fadeUp = ready ? "animate-fade-in-up opacity-100" : "opacity-0";

  // SERVICES
  const services = [
    {
      icon: Globe,
      title: "Dealer Landing Page Creation",
      description:
        "High-converting single-page sites designed specifically for UK used car dealerships.",
    },
    {
      icon: Rocket,
      title: "Car Dealership Website",
      description:
        "Full custom dealership websites with inventory display and lead capture.",
    },
    {
      icon: Megaphone,
      title: "Facebook & Instagram Ads",
      description:
        "Targeted Meta Ad campaigns that generate real UK buyer enquiries fast.",
    },
    {
      icon: Palette,
      title: "Branding & Creative Design",
      description:
        "Professional brand identity, consistent visuals, and premium layouts.",
    },
  ];

  // TESTIMONIALS
  const testimonials = [
    {
      name: "James Mitchell",
      business: "Mitchell Motors, Manchester",
      content:
        "Brandwox helped us generate consistent enquiries every single week.",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      business: "Premium Auto Sales, Birmingham",
      content: "Clean design, fast delivery, and genuinely better enquiries.",
      rating: 5,
    },
    {
      name: "David Chen",
      business: "Chen's Car Centre, London",
      content: "Our dealership website now looks premium and loads instantly.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      business: "Wilson Auto Group, Leeds",
      content:
        "Our online presence finally matches our business quality. Amazing work!",
      rating: 5,
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "How long does it take to build a landing page?",
      answer: "Most landing pages are delivered within 24-48 hours.",
    },
    {
      question: "Can I request revisions?",
      answer: "Yes, we offer unlimited revisions until you're satisfied.",
    },
    {
      question: "Do you provide support?",
      answer: "Yes, all packages include ongoing support and updates.",
    },
    {
      question: "Is it mobile-friendly?",
      answer: "100%. All landing pages and websites are fully responsive.",
    },
    {
      question: "What makes you different?",
      answer:
        "We specialize ONLY in UK used car dealers — we understand the niche.",
    },
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />

      {/* HERO SECTION — now instant without lag */}
      <section
        id="home"
        className="relative overflow-hidden pt-40 pb-32 bg-gradient-to-br from-[#0A4DFF]/10 via-[#FFC700]/10 to-white"
      >
        {!ready ? (
          <HeroSkeleton />
        ) : (
          <div className="container mx-auto px-4 relative z-10">
            <div className={`max-w-4xl mx-auto text-center ${fade}`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                More Buyer Enquiries for UK Used Car Dealers — Fast.
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10">
                High-converting landing pages, dealer websites, and Meta ads
                that generate real enquiries.
              </p>

              <div
                className={`flex flex-wrap justify-center gap-4 mb-10 ${fadeUp}`}
              >
                <a href="https://wa.me/919207509746" target="_blank">
                  <Button className="px-8 py-6 text-lg bg-[#0A4DFF] text-white hover:bg-[#083FCC]">
                    Get Your Dealer Landing Page
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 hover:bg-card"
                  onClick={() =>
                    window.open("https://dealerwebuk.netlify.app/", "_blank")
                  }
                >
                  View Demo
                </Button>
              </div>

              <div className={`flex flex-wrap justify-center gap-4 ${fadeUp}`}>
                <TrustBadge icon={Zap} text="Fast Delivery (24–48 hrs)" />
                <TrustBadge icon={Award} text="100% Custom Designs" />
                <TrustBadge icon={Target} text="Conversion-Focused" />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-white via-[#0A4DFF]/5 to-[#FFC700]/10"
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${fade}`}>
            About Brandwox
          </h2>

          <p className={`text-lg md:text-xl text-muted-foreground mb-6 ${fadeUp}`}>
            Brandwox helps UK used car dealers get more buyer enquiries with
            high-converting landing pages, modern dealer websites, and targeted
            Meta ads.
          </p>

          <p className={`text-lg md:text-xl text-muted-foreground ${fadeUp}`}>
            Everything we build is clean, fast, mobile-friendly, custom, and
            delivered within 24–48 hours.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${fade}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Premium digital solutions for UK used car dealerships.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className={fadeUp}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See It In Action</h2>
          <p className="text-xl text-muted-foreground mb-10">
            A real dealer landing page built with our framework.
          </p>

          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border shadow-xl animate-fade-in-up">
            <div className="relative group cursor-pointer">
              <img
                src="/website-preview.png"
                alt="Dealer Landing Page Preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              <button
                onClick={() =>
                  window.open("https://dealerwebuk.netlify.app/", "_blank")
                }
                className="
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-white text-black font-semibold
                  px-6 py-3 rounded-full shadow-lg hover:scale-105 transition
                "
              >
                View Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section
        id="why"
        className="py-24 bg-gradient-to-br from-[#0A4DFF]/5 via-transparent to-[#FFC700]/10"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${fade}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground">
              We specialize exclusively in the UK used car market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Target,
                title: "Specialists in UK Used Car Dealers",
                desc: "We understand your buyers, your market, and what actually converts.",
              },
              {
                icon: Clock,
                title: "Fast Turnaround (24–48 Hours)",
                desc: "Your landing page goes live fast so you can start getting enquiries.",
              },
              {
                icon: Award,
                title: "Conversion Optimized",
                desc: "Our pages are designed to turn visitors into real enquiries.",
              },
              {
                icon: TrendingUp,
                title: "Ad Strategies That Work",
                desc: "Data-driven Meta ads for qualified UK car buyers.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 p-6 rounded-xl border bg-card/80 backdrop-blur-sm ${fadeUp}`}
              >
                <div className="shrink-0">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${fade}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Dealers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from UK used car dealerships.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <div key={i} className={fadeUp}>
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${fade}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple & Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose a plan that fits your dealership.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
            <div className={fadeUp}>
              <PricingCard
                title="Starter"
                price="£499"
                description="Perfect for new dealerships"
                features={[
                  "1 Landing Page",
                  "Mobile-Responsive",
                  "Fast Delivery (24–48 hrs)",
                  "Basic SEO",
                  "2 Revisions",
                ]}
              />
            </div>

            <div className={fadeUp} style={{ animationDelay: "0.1s" }}>
              <PricingCard
                title="Growth"
                price="£1,299"
                description="Best for growing dealers"
                popular
                features={[
                  "Full Website",
                  "Inventory Page",
                  "Lead Forms",
                  "SEO Setup",
                  "1 Month Ads Setup",
                  "Monthly Report",
                ]}
              />
            </div>

            <div className={fadeUp} style={{ animationDelay: "0.2s" }}>
              <PricingCard
                title="Scale"
                price="Custom"
                description="For serious dealerships"
                features={[
                  "Everything in Growth",
                  "Full Social Management",
                  "Ad Management",
                  "Unlimited Pages",
                  "Dedicated Manager",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className={`text-center mb-16 ${fade}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know before getting started.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className={`px-6 py-4 rounded-lg border bg-card/80 ${fadeUp}`}
              >
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="contact"
        className="relative py-24 bg-gradient-to-br from-[#0A4DFF] via-[#083FCC] to-[#021F66] text-white text-center"
      >
        <div className={`container mx-auto px-4 relative z-10 ${fade}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get More Buyer Enquiries?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Chat with us on WhatsApp and get your dealership growing.
          </p>

          <Button
            size="lg"
            className="bg-[#FFC700] hover:bg-[#E5B400] text-black text-lg px-10 py-6"
            onClick={() => window.open("https://wa.me/919207509746", "_blank")}
          >
            Chat on WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-12 bg-card text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">Brandwox</h3>
        <p className="text-muted-foreground mb-4">
          UK Used Car Dealer Marketing
        </p>
        <p className="text-muted-foreground text-sm">
          © 2025 Brandwox. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;



// -------------------------------------------------------------------
// 🔥 HERO SKELETON (DROP THIS INTO SAME FILE OR SEPARATE COMPONENT)
// -------------------------------------------------------------------

function HeroSkeleton() {
  return (
    <div className="container mx-auto px-4 pt-40 pb-32 max-w-4xl animate-pulse">
      <div className="mx-auto text-center">
        <div className="h-10 w-72 bg-gray-300/40 mx-auto rounded mb-4"></div>
        <div className="h-8 w-96 bg-gray-300/30 mx-auto rounded mb-6"></div>

        <div className="flex justify-center gap-4 mb-10">
          <div className="h-12 w-48 bg-gray-300/30 rounded-xl"></div>
          <div className="h-12 w-40 bg-gray-300/30 rounded-xl"></div>
        </div>

        <div className="flex justify-center gap-6">
          <div className="h-8 w-40 bg-gray-300/20 rounded-lg"></div>
          <div className="h-8 w-40 bg-gray-300/20 rounded-lg"></div>
          <div className="h-8 w-40 bg-gray-300/20 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
