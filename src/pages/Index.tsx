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
  CheckCircle2,
  Clock,
  Award,
  Users,
  Rocket,
  Globe,
  Share2,
  MessageSquare,
  ArrowRight,
  Megaphone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Dealer Landing Page Creation",
      description:
        "High-converting single-page sites designed specifically for car dealerships to capture leads fast.",
    },
    {
      icon: Rocket,
      title: "Car Dealership Website",
      description:
        "Full custom websites with inventory management, search filters, and lead capture forms.",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Consistent posting, engaging content, and community management on Facebook and Instagram.",
    },
    {
      icon: Megaphone,
      title: "Facebook & Instagram Ads",
      description:
        "Targeted ad campaigns that reach real UK buyers in your local area and beyond.",
    },
    {
      icon: Palette,
      title: "Branding & Creative Design",
      description:
        "Professional logos, brand guidelines, and marketing materials that make you stand out.",
    },
  ];

  const testimonials = [
    {
      name: "James Mitchell",
      business: "Mitchell Motors, Manchester",
      content:
        "Brandwox transformed our online presence. We're getting 3x more enquiries every week!",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      business: "Premium Auto Sales, Birmingham",
      content:
        "The landing page they built converts like crazy. Best investment we've made this year.",
      rating: 5,
    },
    {
      name: "David Chen",
      business: "Chen's Car Centre, London",
      content:
        "Fast delivery, professional service, and real results. Highly recommend to any dealer.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      business: "Wilson Auto Group, Leeds",
      content:
        "Their social media management brought our brand to life. Our engagement has tripled!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a landing page?",
      answer:
        "Most landing pages are delivered within 24-48 hours. Full websites take 5-7 days depending on complexity.",
    },
    {
      question: "Can I request changes or revisions?",
      answer:
        "Absolutely! We offer unlimited revisions until you're 100% satisfied with your landing page or website.",
    },
    {
      question: "How much budget do I need for ads?",
      answer:
        "We recommend starting with £500-£1000/month for Facebook and Instagram ads to see meaningful results. We'll help you scale from there.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! All packages include ongoing support. We're here to help with updates, changes, and answering your questions.",
    },
    {
      question: "Will my site work on mobile?",
      answer:
        "100%. All our websites and landing pages are fully responsive and optimized for mobile, tablet, and desktop.",
    },
    {
      question: "What if I already have a website?",
      answer:
        "No problem! We can redesign it, optimize it for conversions, or create additional landing pages for specific campaigns.",
    },
    {
      question: "Do I own the website after it's built?",
      answer:
        "Yes, you own all the code, content, and designs. We can help with hosting or you can use your own provider.",
    },
    {
      question: "Can you help with SEO?",
      answer:
        "Absolutely. All our websites are built with SEO best practices, and we offer ongoing SEO services to improve your rankings.",
    },
    {
      question: "What platforms do you use for ads?",
      answer:
        "We specialize in Facebook and Instagram ads, which are the most effective for reaching UK car buyers.",
    },
    {
      question: "How do I track my results?",
      answer:
        "We set up analytics tracking and provide monthly reports showing traffic, leads, and conversion metrics.",
    },
    {
      question: "Can you manage my social media accounts?",
      answer:
        "Yes! We create content, schedule posts, engage with followers, and run targeted ad campaigns on your behalf.",
    },
    {
      question: "What makes you different from other agencies?",
      answer:
        "We specialize exclusively in the UK used car market. We understand your customers, your challenges, and what actually converts.",
    },
  ];

  function gtag(arg0: string, arg1: string, arg2: { event_category: string; event_label: string; }) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero pt-20 pb-32">
        <div className="absolute inset-0 opacity-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-highway-full-of-cars-circulating-through-the-city-34565-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 animate-fade-in">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
                Get More Car Buyers — Without Wasting Time or Money
              </h1>
              <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                We build high-converting websites, landing pages & ad systems
                for UK used car dealers.
              </p>
            </div>

            <div className="mb-12 flex flex-wrap justify-center gap-4 animate-fade-in">
              <Button
                size="lg"
                className="bg-gradient-accent shadow-glow-accent hover:shadow-xl text-lg px-8 py-6"
                onClick={() => {
                  gtag("event", "lead_click", {
                    event_category: "Lead",
                    event_label: "WhatsApp Audit Button",
                  });
                  window.open("https://wa.me/919207509746", "_blank");
                }}
              >
                Schedule Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-card"
                onClick={() => {
                  gtag("event", "demo_click", {
                    event_category: "Lead",
                    event_label: "View Demo Button",
                  });
                  window.open("https://dealerwebuk.netlify.app/", "_blank");
                }}
              >
                View Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
              <TrustBadge icon={Zap} text="Fast Delivery" />
              <TrustBadge icon={Award} text="100% Custom" />
              <TrustBadge icon={Target} text="Conversion-Focused" />
            </div>
          </div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 h-20 w-20 rounded-full bg-primary/10 animate-float" />
        <div
          className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-accent/10 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* Problem -> Solution Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Solving Real Problems for UK Dealers
            </h2>
            <p className="text-xl text-muted-foreground">
              We understand your challenges — and we have the solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Problem 1 */}
            <div className="animate-fade-in-left rounded-2xl border border-destructive/20 bg-card p-8">
              <h3 className="mb-3 text-2xl font-bold text-destructive">
                Your inventory isn't reaching the right buyers
              </h3>
              <p className="text-muted-foreground">
                Limited visibility, poor targeting, and low-quality traffic.
              </p>
            </div>
            <div className="animate-fade-in-right rounded-2xl border border-primary/20 bg-gradient-primary/5 p-8">
              <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                High-conversion landing pages
              </h3>
              <p className="text-muted-foreground">
                Designed to capture leads and showcase your best vehicles to
                qualified buyers.
              </p>
            </div>

            {/* Problem 2 */}
            <div
              className="animate-fade-in-left rounded-2xl border border-destructive/20 bg-card p-8"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="mb-3 text-2xl font-bold text-destructive">
                Your website loads slow and loses leads
              </h3>
              <p className="text-muted-foreground">
                Outdated design, poor mobile experience, and broken forms.
              </p>
            </div>
            <div
              className="animate-fade-in-right rounded-2xl border border-primary/20 bg-gradient-primary/5 p-8"
              style={{ animationDelay: "0.1s" }}
            >
              <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                Optimized dealership websites
              </h3>
              <p className="text-muted-foreground">
                Lightning-fast, mobile-friendly sites built specifically for car
                sales.
              </p>
            </div>

            {/* Problem 3 */}
            <div
              className="animate-fade-in-left rounded-2xl border border-destructive/20 bg-card p-8"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="mb-3 text-2xl font-bold text-destructive">
                Your social pages are inactive
              </h3>
              <p className="text-muted-foreground">
                No engagement, inconsistent posting, and zero brand presence.
              </p>
            </div>
            <div
              className="animate-fade-in-right rounded-2xl border border-primary/20 bg-gradient-primary/5 p-8"
              style={{ animationDelay: "0.2s" }}
            >
              <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                Social media management
              </h3>
              <p className="text-muted-foreground">
                Consistent, engaging content that builds trust and brings in
                buyers.
              </p>
            </div>

            {/* Problem 4 */}
            <div
              className="animate-fade-in-left rounded-2xl border border-destructive/20 bg-card p-8"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="mb-3 text-2xl font-bold text-destructive">
                Your ads are not bringing real customers
              </h3>
              <p className="text-muted-foreground">
                Wasted budget on clicks that don't convert into showroom visits.
              </p>
            </div>
            <div
              className="animate-fade-in-right rounded-2xl border border-primary/20 bg-gradient-primary/5 p-8"
              style={{ animationDelay: "0.3s" }}
            >
              <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                Ads that target real UK buyers
              </h3>
              <p className="text-muted-foreground">
                Data-driven campaigns optimized for local, qualified car buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to dominate your local market.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Showcase Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              See It In Action
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Check out a real landing page we built for UK car dealers
            </p>
          </div>

          <div className="mx-auto max-w-5xl animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <div className="aspect-video bg-muted">
                <iframe
                  src="https://dealerwebuk.netlify.app"
                  className="h-full w-full"
                  title="Demo Landing Page"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-gradient-accent shadow-glow-accent"
                onClick={() =>
                  window.open("https://wa.me/919207509746", "_blank")
                }
              >
                Get Your Own Landing Page
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-gradient-primary/5">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground">
              We're not just another agency — we're your growth partner.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Specialized in UK used car business",
                desc: "We only work with car dealers — we know your market inside out.",
              },
              {
                icon: Clock,
                title: "Fast delivery (24–48 hours for landing pages)",
                desc: "Get your landing page live and generating leads in days, not weeks.",
              },
              {
                icon: Award,
                title: "Proven converting designs",
                desc: "Our designs are tested and optimized to turn visitors into buyers.",
              },
              {
                icon: TrendingUp,
                title: "Data-driven ad strategies",
                desc: "Every ad is backed by real data and optimized for maximum ROI.",
              },
              {
                icon: Users,
                title: "Affordable pricing for small dealerships",
                desc: "High-quality service without the enterprise-level price tag.",
              },
              {
                icon: MessageSquare,
                title: "Dedicated support",
                desc: "Direct access to our team — no bots, no waiting, just real help.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 transition-all hover:scale-105 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="shrink-0">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              What Dealers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real UK car dealerships.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the package that fits your dealership.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="animate-scale-in">
              <PricingCard
                title="Starter"
                price="£499"
                description="Perfect for testing the waters"
                features={[
                  "1 High-converting landing page",
                  "Mobile responsive design",
                  "Contact form integration",
                  "Fast delivery (24-48 hours)",
                  "2 rounds of revisions",
                  "Basic SEO optimization",
                ]}
              />
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <PricingCard
                title="Growth"
                price="£1,299"
                description="Best for growing dealerships"
                features={[
                  "Full custom dealership website",
                  "Up to 10 pages",
                  "Social media setup & 1 month management",
                  "Basic Facebook/Instagram ads (£500 ad budget included)",
                  "Inventory showcase system",
                  "Advanced SEO",
                  "Monthly analytics report",
                ]}
                popular
              />
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <PricingCard
                title="Scale"
                price="Custom"
                description="For serious dealerships ready to dominate"
                features={[
                  "Everything in Growth package",
                  "Ongoing ad management & optimization",
                  "Full social media management",
                  "Custom branding & design",
                  "Unlimited pages & updates",
                  "Priority support",
                  "Dedicated account manager",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-primary py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl animate-fade-in">
            <h2 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              Ready to Get More Car Buyers Every Week?
            </h2>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Let's build a high-converting digital presence for your
              dealership. Book your free strategy call today.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-glow-accent hover:shadow-xl animate-bounce-subtle"
              onClick={() =>
                window.open("https://wa.me/919207509746", "_blank")
              }
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="mb-2 text-2xl font-bold text-foreground">
              Brandwox Solutions
            </h3>
            <p className="mb-4 text-muted-foreground">
              Digital Marketing for UK Used Car Dealers
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Brandwox Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
