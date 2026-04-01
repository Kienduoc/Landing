"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Trang Chủ", href: "#home" },
  { id: "about", label: "Giới Thiệu", href: "#about" },
  { id: "services", label: "Dịch Vụ", href: "#services" },
  { id: "portfolio", label: "Dự Án", href: "#portfolio" },
  { id: "contact", label: "Liên Hệ", href: "#contact" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [time, setTime] = useState("");

  /* ——— Clock update ——— */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* ——— Active link tracking ——— */
  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_ITEMS.map(({ id }) =>
        document.getElementById(id)
      ).filter(Boolean) as HTMLElement[];
      const scrollY = window.pageYOffset;
      for (const section of sections) {
        const top = section.offsetTop - 80;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ——— Body scroll lock ——— */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-[1000]"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* ——— Title Bar (top of window) ——— */}
      <div className="win2k-titlebar px-2 select-none">
        {/* Window icon */}
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
            <rect x="0" y="0" width="7" height="7" fill="#FF0000" />
            <rect x="9" y="0" width="7" height="7" fill="#00FF00" />
            <rect x="0" y="9" width="7" height="7" fill="#0000FF" />
            <rect x="9" y="9" width="7" height="7" fill="#FFFF00" />
          </svg>
          <span className="text-white text-[11px] font-bold truncate">
            ARCHITECT.AI — Chuyên Gia Tự Động Hóa AI — Nguyễn Đức Kiên
          </span>
        </div>
        {/* Window control buttons */}
        <div className="flex items-center gap-0.5 ml-2 shrink-0">
          <button className="win2k-titlebar-btn" aria-label="Minimize" title="Minimize">
            _
          </button>
          <button className="win2k-titlebar-btn" aria-label="Maximize" title="Maximize">
            <span className="block w-2 h-2 border border-black" />
          </button>
          <button className="win2k-titlebar-btn font-bold text-[11px]" aria-label="Close" title="Close">
            X
          </button>
        </div>
      </div>

      {/* ——— Menu Bar ——— */}
      <div className="win2k-menubar">
        {/* Desktop: inline nav items as menu items */}
        <ul className="flex items-center" role="list">
          {NAV_ITEMS.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                className={`win2k-menuitem text-[11px] font-sans ${
                  activeSection === id
                    ? "bg-[#000080] text-white"
                    : "text-black"
                }`}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        {/* Address bar */}
        <div className="hidden md:flex items-center gap-1 mr-2">
          <span className="text-[11px] text-black">Địa chỉ:</span>
          <div className="win2k-sunken px-2 py-0.5 text-[11px] w-48 text-black whitespace-nowrap overflow-hidden">
            architect.ai/#
            {activeSection}
          </div>
          <button className="win2k-btn text-[11px] px-2 py-0.5 min-w-0">Đi</button>
        </div>

        {/* Clock display */}
        <div
          className="win2k-sunken px-2 py-0.5 text-[11px] text-black font-bold select-none hidden md:block"
          aria-label={`Thời gian: ${time}`}
        >
          {time}
        </div>

        {/* Mobile hamburger */}
        <button
          className="win2k-btn md:hidden text-[11px] px-2 py-0.5 min-w-0"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "X" : "="}
        </button>
      </div>

      {/* ——— Mobile dropdown ——— */}
      {menuOpen && (
        <div className="md:hidden win2k-window border-t-0">
          <ul role="list" className="py-1">
            {NAV_ITEMS.map(({ id, label, href }) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block px-4 py-1.5 text-[11px] ${
                    activeSection === id
                      ? "bg-[#000080] text-white"
                      : "text-black hover:bg-[#000080] hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="border-t border-[#808080] mt-1 pt-1 px-4 py-1">
              <a
                href="#contact"
                onClick={closeMenu}
                className="win2k-btn block text-center w-full text-[11px]"
              >
                Bắt Đầu Ngay
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
