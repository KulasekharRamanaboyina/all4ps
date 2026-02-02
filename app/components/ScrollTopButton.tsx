"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

const ScrollTopButton = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const allowedPages = ["/", "/about", "/portfolio"];
  const isServicePage = pathname.startsWith("/services");
  const isPortfolioPage = pathname.startsWith("/portfolio");

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  if (!allowedPages.includes(pathname) && !isServicePage && !isPortfolioPage)
    return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        h-12 w-12
        rounded-full
        bg-[#800080]
        flex items-center justify-center
        shadow-lg
        hover:scale-110 transition
      "
    >
      <ArrowUp size={20} className="text-white" />
    </button>
  );
};

export default ScrollTopButton;
