import { MessageCircle, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dealership.webp";

const WHATSAPP_LINK = `https://wa.me/919207509746?text=${encodeURIComponent(
  "Hi BrandWox! I'm interested in your dealership website services."
)}`;
const FREE_AUDIT_REQUEST = `https://wa.me/919207509746?text=${encodeURIComponent(
  "Hi BrandWox! I'm interested in your free audit."
)}`;

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_LINK, "_blank");
  };

  const handleFreeAuditClick = () => {
    window.open(FREE_AUDIT_REQUEST, "_blank");
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center hero-gradient overflow-hidden">

      {/* Background */}
      {/* <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-violet-300 rounded-full blur-lg" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-300 rounded-full blur-lg" />
      </div> */}

      <div className="container relative z-10 py-8 sm:py-10 lg:py-24">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* TEXT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl w-full">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-accent/30 text-white text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full" />
              UK Dealer Website Specialists
            </div>

            {/* Heading */}
            <h1 className="text-[1.625rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 text-balance">
              Fast Websites That Make Buyers{" "}
              <span className="text-white">Call & Message You</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-xl text-white/90 mb-8 px-1">
              UK used car buyers trust speed and clarity. We build dealer sites
              that load instantly, look local-trusted, and drive enquiries from
              phones first.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

                {/* WhatsApp Button */}
                <Button
                  onClick={handleWhatsAppClick}
                  variant="whatsapp"
                  size="lg"
                  className="group shadow-[0_0_25px_rgba(37,211,102,0.4)] bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm sm:text-base px-4 sm:px-6 transition-all"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span>Message Us on WhatsApp</span>
                </Button>

                {/* Free Audit Button */}
                <Button
                  onClick={handleFreeAuditClick}
                  variant="cta"
                  size="lg"
                  className="group text-sm sm:text-base transition-all"
                >
                  <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  Free Audit
                </Button>

              </div>

              {/* Status */}
              <p className="text-white/80 text-xs sm:text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-[#25D366] rounded-full" />
                Usually replies within 5 minutes
              </p>
            </div>

            {/* Footer line */}
            <p className="mt-6 text-white/70 text-xs sm:text-sm">
              <span className="text-accent">✓</span> Concept in 48–72 hrs &nbsp;·&nbsp;
              <span className="text-accent">✓</span> Full rebuild in 5–7 days
            </p>

          </div>

          {/* IMAGE — FIX: removed loading="lazy", removed useState skeleton, added eager */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl hidden lg:block" />
              <img
                src={heroImage}
                alt="Professional car dealership showroom"
                className="relative rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl w-full object-cover aspect-[4/3] ring-1 ring-accent/20"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                width={600}
                height={450}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;