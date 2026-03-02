"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "強み", href: "#strengths" },
  { label: "案件種別", href: "#case-types" },
  { label: "業務内容", href: "#partner-tasks" },
  { label: "パートナー像", href: "#ideal-partner" },
  { label: "取引の流れ", href: "#flow" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // モバイルメニュー展開時にbodyスクロールをロック
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ロゴ */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 bg-[#2563eb] rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span
              className={`text-lg font-bold transition-colors duration-300 ${
                scrolled ? "text-[#0a1628]" : "text-white"
              }`}
            >
              ウェルテック
            </span>
          </a>

          {/* デスクトップナビ */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "text-[#0a1628]/60 hover:text-[#0a1628] hover:bg-gray-50"
                    : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="w-px h-5 bg-current opacity-10 mx-2" />
            <button
              onClick={() => scrollToSection("#registration")}
              className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#2563eb]/20"
            >
              <Phone className="w-3.5 h-3.5" />
              協力会社登録
            </button>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#0a1628]" : "text-white"
            }`}
            aria-label="メニュー"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-sm font-medium text-[#0a1628]/70 hover:text-[#0a1628] hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#registration")}
              className="block w-full text-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors mt-3"
            >
              協力会社登録
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
