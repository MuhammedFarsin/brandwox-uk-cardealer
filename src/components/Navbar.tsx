import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import logo_with_name from "/icon.png";
import logo from "/logo-icon.png";

import {
  Home,
  Info,
  Settings2,
  PoundSterling,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "home", icon: Home },
  { label: "About", id: "about", icon: Info },
  { label: "Services", id: "services", icon: Settings2 },
  { label: "Pricing", id: "pricing", icon: PoundSterling },
  { label: "FAQ", id: "faq", icon: HelpCircle },
] as const;

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");
  const [shadow, setShadow] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => ({
      label: item.label,
      id: item.id,
      el: document.getElementById(item.id),
    }));

    let lastActive = "Home";
    let lastShadow = false;
    let lastShrink = false;
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const nextShadow = scrollY > 10;
          const nextShrink = scrollY > 70;

          let nextActive = lastActive;
          for (const s of sections) {
            if (!s.el) continue;
            const rect = s.el.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              nextActive = s.label;
              break;
            }
          }

          if (
            nextShadow !== lastShadow ||
            nextShrink !== lastShrink ||
            nextActive !== lastActive
          ) {
            lastShadow = nextShadow;
            lastShrink = nextShrink;
            lastActive = nextActive;

            setShadow(nextShadow);
            setShrink(nextShrink);
            setActive(nextActive);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP NAV */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50 
          backdrop-blur-xl bg-white/40
          border-b border-white/20
          ${shadow ? "shadow-lg" : ""}
          ${shrink ? "h-14" : "h-20"}
        `}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            {/* Desktop Logo */}
            <img
              src={logo_with_name}
              alt="Brandwox"
              className={`hidden md:block ${shrink ? "h-32" : "h-40"}`}
            />

            {/* Mobile Icon */}
            <img
              src={logo}
              alt="Brandwox"
              className={`md:hidden ${shrink ? "h-10" : "h-12"}`}
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className={`
                  text-sm font-medium relative
                  ${
                    active === item.label
                      ? "text-[#0A4DFF]"
                      : "text-foreground"
                  }
                `}
              >
                {item.label}

                {active === item.label && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#0A4DFF] rounded-full" />
                )}
              </a>
            ))}

            <a href="https://wa.me/919207509746" target="_blank">
              <Button className="bg-[#0A4DFF] text-white px-6 py-2">
                WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* MOBILE NAV */}
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
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className="flex flex-col items-center gap-1"
              >
                <div
                  className={`
                    h-12 w-12 rounded-2xl flex items-center justify-center
                    bg-gradient-to-br from-[#FFE07A] via-[#FFC700] to-[#E5A400]
                    shadow-[0_6px_16px_rgba(0,0,0,0.25)]
                    border border-white/50
                    ${isActive ? "" : ""}
                  `}
                >
                  <Icon className="h-5 w-5 text-[#111]" />
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

          {/* WhatsApp BUTTON */}
          <a
            href="https://wa.me/919207509746"
            target="_blank"
            className="flex flex-col items-center gap-1"
          >
            <div
              className="
                h-12 w-12 rounded-2xl flex items-center justify-center
                bg-gradient-to-br from-[#7CFF9C] via-[#25D366] to-[#128C3C]
                shadow-[0_6px_16px_rgba(0,0,0,0.25)]
                border border-white/50
              "
            >
              <MessageCircle className="h-5 w-5 text-white" />
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
          z-50
        "
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
};

export default Navbar;
