"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "事業紹介", href: "#about" },
  { label: "強み", href: "#strengths" },
  { label: "施工実績", href: "#works" },
  { label: "案件種別", href: "#case-types" },
  { label: "業務内容", href: "#partner-tasks" },
  { label: "取引の流れ", href: "#flow" },
  { label: "FAQ", href: "#faq" },
  { label: "対応エリア", href: "/area" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isSubPage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const solid = scrolled || isSubPage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/95 backdrop-blur-lg border-b border-black/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ロゴ */}
          <a
            href={isSubPage ? "/" : "#"}
            onClick={(e) => {
              if (!isSubPage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2.5"
          >
            <Image
              src={solid ? "/welltech-logo.png" : "/welltech-logo.svg"}
              alt="WELLTECH"
              width={32}
              height={40}
              className={`h-8 w-auto transition-all duration-300 ${
                solid ? "" : "brightness-0 invert"
              }`}
            />
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                solid ? "text-[var(--wt-dark)]" : "text-white"
              }`}
            >
              WELLTECH
            </span>
          </a>

          {/* デスクトップナビ */}
          <nav aria-label="メインナビゲーション" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isHash = item.href.startsWith("#");
              const isActive = isHash && activeSection === item.href.replace("#", "");
              const className = `text-[13px] font-medium px-3.5 py-2 rounded-md transition-all duration-300 ${
                solid
                  ? isActive
                    ? "text-[var(--wt-primary)]"
                    : "text-[var(--wt-dark)]/60 hover:text-[var(--wt-dark)]"
                  : isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white"
              }`;
              return isHash ? (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={className}
                >
                  {item.label}
                </button>
              ) : (
                <a key={item.href} href={item.href} className={className}>
                  {item.label}
                </a>
              );
            })}
            <button
              onClick={() => scrollToSection("#registration")}
              className="ml-4 bg-[var(--wt-primary)] hover:bg-[var(--wt-primary-dark)] text-white text-[13px] font-semibold px-5 py-2.5 rounded-md transition-all duration-300"
            >
              パートナー登録
            </button>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              solid ? "text-[var(--wt-dark)]" : "text-white"
            }`}
            aria-label="メニュー"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-black/[0.04] px-5 py-5 space-y-1">
          {navItems.map((item) => {
            const isHash = item.href.startsWith("#");
            const isActive = isHash && activeSection === item.href.replace("#", "");
            const className = `block w-full text-left text-sm font-medium px-4 py-3 rounded-md transition-colors ${
              isActive
                ? "text-[var(--wt-primary)] bg-[var(--wt-primary)]/5"
                : "text-[var(--wt-dark)]/60 hover:text-[var(--wt-dark)] hover:bg-gray-50"
            }`;
            return isHash ? (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={className}
              >
                {item.label}
              </button>
            ) : (
              <a key={item.href} href={item.href} className={className}>
                {item.label}
              </a>
            );
          })}
          <button
            onClick={() => scrollToSection("#registration")}
            className="block w-full text-center bg-[var(--wt-primary)] text-white text-sm font-semibold px-5 py-3 rounded-md mt-3"
          >
            パートナー登録
          </button>
        </div>
      </div>
    </header>
  );
}
