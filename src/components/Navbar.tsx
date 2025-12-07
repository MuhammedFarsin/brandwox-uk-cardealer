import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// Full logo (desktop)
import logo_with_name from "/icon.png";
// Icon only (mobile)
import logo from "/logo-icon.png";

import {
  Home,
  Info,
  Settings2,
  PoundSterling,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [shadow, setShadow] = useState(false);
  const [shrink, setShrink] = useState(false);

  const navItems = [
    { label: "Home", id: "home", icon: Home },
    { label: "About", id: "about", icon: Info },
    { label: "Services", id: "services", icon: Settings2 },
    { label: "Pricing", id: "pricing", icon: PoundSterling },
    { label: "FAQ", id: "faq", icon: HelpCircle },
  ];

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 10);
      setShrink(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section active detection
  useEffect(() => {
    const trackActive = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(item.label);
        }
      });
    };

    window.addEventListener("scroll", trackActive);
    return () => window.removeEventListener("scroll", trackActive);
  }, []);

  return (
    <>
      {/* DESKTOP NAV */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50 
          backdrop-blur-xl bg-white/40
          border-b border-white/20
          transition-all duration-300
          ${shadow ? "shadow-lg" : ""}
          ${shrink ? "h-14" : "h-20"}
        `}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center">
            {/* Desktop: Full Logo */}
            <img
              src={logo_with_name}
              alt="Brandwox"
              className={`hidden md:block transition-all duration-300 ${
                shrink ? "h-60" : "h-60"
              }`}
            />

            {/* Mobile: Icon Only */}
            <img
              src={logo}
              alt="Brandwox"
              className={`md:hidden transition-all duration-300 ${
                shrink ? "h-20" : "h-20"
              }`}
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className={`
                  text-sm font-medium relative transition 
                  ${
                    active === item.label
                      ? "text-[#0A4DFF]"
                      : "text-foreground hover:text-[#0A4DFF]"
                  }
                `}
              >
                {item.label}

                {active === item.label && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#0A4DFF] rounded-full"></span>
                )}
              </a>
            ))}

            <a href="https://wa.me/919207509746" target="_blank">
              <Button className="bg-[#0A4DFF] text-white hover:bg-[#083FCC] px-6 py-2">
                WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* MOBILE 3D NAV */}
      <div
        className="
          md:hidden 
          fixed bottom-0 left-0 w-full 
          bg-white/70 backdrop-blur-lg 
          border-t border-white/20 
          shadow-2xl
          z-50
        "
      >
        <div className="flex justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className="flex flex-col items-center gap-1 transition-all"
              >
                <div
                  className={`
                    h-12 w-12 rounded-2xl flex items-center justify-center
                    bg-gradient-to-br from-[#FFE07A] via-[#FFC700] to-[#E5A400]
                    shadow-[0_6px_16px_rgba(0,0,0,0.25)]
                    border border-white/50
                    relative transition-all duration-300
                    ${isActive ? "scale-110 shadow-xl" : "scale-95 opacity-85"}
                  `}
                >
                  <div className="absolute inset-0 rounded-2xl bg-white/10 blur-[6px]"></div>
                  <Icon className="h-5 w-5 text-[#111] relative z-10" />
                </div>

                <span
                  className={`text-[10px] font-medium ${
                    isActive ? "text-[#0A4DFF]" : "text-foreground/60"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}

          {/* WhatsApp 3D BUTTON */}
          <a
            href="https://wa.me/919207509746"
            target="_blank"
            className="flex flex-col items-center gap-1 transition-all"
          >
            <div
              className="
                h-12 w-12 rounded-2xl flex items-center justify-center
                bg-gradient-to-br from-[#7CFF9C] via-[#25D366] to-[#128C3C]
                shadow-[0_6px_16px_rgba(0,0,0,0.25)]
                border border-white/50
                relative transition-all duration-300
                active:scale-110
              "
            >
              <div className="absolute inset-0 rounded-2xl bg-white/10 blur-[6px]"></div>
              <MessageCircle className="h-5 w-5 text-white relative z-10" />
            </div>

            <span className="text-[10px] font-medium text-[#128C3C]">
              WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* DESKTOP WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919207509746"
        target="_blank"
        className="
          hidden md:flex
          fixed bottom-6 right-6 
          bg-[#25D366] text-white 
          p-3 rounded-full shadow-lg 
          hover:scale-110 transition-all
          z-50
        "
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
};

export default Navbar;
