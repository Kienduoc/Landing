"use client";

import { useState, useEffect } from "react";

const FOOTER_LINKS = [
  { label: "Trang Chủ", href: "#home" },
  { label: "Giới Thiệu", href: "#about" },
  { label: "Dịch Vụ", href: "#services" },
  { label: "Dự Án", href: "#portfolio" },
  { label: "Liên Hệ", href: "#contact" },
] as const;

const TASKBAR_BUTTONS = [
  { label: "Trang Chủ", icon: "🌐", href: "#home" },
  { label: "Dịch Vụ", icon: "⚙️", href: "#services" },
  { label: "Dự Án", icon: "📁", href: "#portfolio" },
] as const;

export default function Footer() {
  const [time, setTime] = useState("");

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

  return (
    <footer role="contentinfo">
      {/* ——— Main footer window ——— */}
      <div className="bg-[#008080] px-4 py-6">
        <div className="mx-auto max-w-[1100px]">
          <div className="win2k-window">
            <div className="win2k-titlebar">
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
                <rect x="0" y="0" width="7" height="7" fill="#FF0000" />
                <rect x="9" y="0" width="7" height="7" fill="#00FF00" />
                <rect x="0" y="9" width="7" height="7" fill="#0000FF" />
                <rect x="9" y="9" width="7" height="7" fill="#FFFF00" />
              </svg>
              <span className="flex-1 text-[11px] font-bold text-white">
                ARCHITECT.AI — Chân Trang
              </span>
              <button className="win2k-titlebar-btn font-bold" aria-label="Close">X</button>
            </div>

            <div className="p-5 bg-[#d4d0c8]">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Brand */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="win2k-raised p-1">
                      <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true">
                        <rect x="0" y="0" width="7" height="7" fill="#FF0000" />
                        <rect x="9" y="0" width="7" height="7" fill="#00FF00" />
                        <rect x="0" y="9" width="7" height="7" fill="#0000FF" />
                        <rect x="9" y="9" width="7" height="7" fill="#FFFF00" />
                      </svg>
                    </div>
                    <a
                      href="#home"
                      className="text-[14px] font-bold text-[#000080]"
                      aria-label="ARCHITECT.AI - Trang chủ"
                    >
                      ARCHITECT<span className="text-[#008080]">.AI</span>
                    </a>
                  </div>
                  <p className="text-[10px] text-[#444] mb-3 leading-relaxed">
                    Kiến tạo tương lai doanh nghiệp với AI.<br />
                    © 2026 ARCHITECT.AI. All rights reserved.
                  </p>
                  <div className="flex gap-1">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="win2k-btn text-[10px] px-2 py-0.5 min-w-0"
                      aria-label="LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="win2k-btn text-[10px] px-2 py-0.5 min-w-0"
                      aria-label="Twitter / X"
                    >
                      X
                    </a>
                  </div>
                </div>

                {/* Navigation */}
                <nav aria-label="Footer navigation">
                  <div className="win2k-groupbox">
                    <span className="win2k-groupbox-label">Điều Hướng</span>
                    <ul className="pt-1 flex flex-col gap-0.5">
                      {FOOTER_LINKS.map(({ label, href }) => (
                        <li key={href}>
                          <a
                            href={href}
                            className="text-[11px] win2k-link block py-0.5 hover:bg-[#000080] hover:text-white hover:no-underline px-1"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>

                {/* System info */}
                <div>
                  <div className="win2k-groupbox">
                    <span className="win2k-groupbox-label">Thông Tin Hệ Thống</span>
                    <div className="pt-1 win2k-sunken p-2 bg-black">
                      <p className="text-[10px] text-green-400 font-mono">Microsoft(R) Windows(R) 2000</p>
                      <p className="text-[10px] text-green-400 font-mono">Version 5.00.2195</p>
                      <p className="text-[10px] text-green-400 font-mono">© 2026 ARCHITECT.AI</p>
                      <p className="text-[10px] text-yellow-300 font-mono mt-1">
                        Built with ♥ &amp; AI Power
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="win2k-statusbar">
              <div className="win2k-sunken px-2 flex-1 text-[10px]">Xong</div>
              <div className="win2k-sunken px-2 text-[10px] hidden md:block">© 2026 ARCHITECT.AI</div>
              <div className="win2k-sunken px-2 text-[10px] hidden md:block">Internet</div>
            </div>
          </div>
        </div>
      </div>

      {/* ——— Windows Taskbar ——— */}
      <div className="win2k-taskbar sticky bottom-0 z-[900]">
        <div className="flex items-center h-[30px] px-1 gap-1">
          {/* Start button */}
          <a
            href="#home"
            className="win2k-btn flex items-center gap-1 h-[22px] px-2 min-w-0 font-bold text-[11px]"
            aria-label="Start"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <rect x="0" y="0" width="7" height="7" fill="#FF0000" />
              <rect x="9" y="0" width="7" height="7" fill="#00FF00" />
              <rect x="0" y="9" width="7" height="7" fill="#0000FF" />
              <rect x="9" y="9" width="7" height="7" fill="#FFFF00" />
            </svg>
            <span>Start</span>
          </a>

          {/* Separator */}
          <div className="win2k-separator h-5" aria-hidden="true" />

          {/* Taskbar window buttons */}
          {TASKBAR_BUTTONS.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              className="win2k-btn flex items-center gap-1 h-[22px] px-2 min-w-0 text-[10px] hidden sm:flex max-w-[120px] overflow-hidden"
            >
              <span aria-hidden="true">{icon}</span>
              <span className="truncate">{label}</span>
            </a>
          ))}

          {/* Spacer */}
          <div className="flex-1" />

          {/* System tray */}
          <div className="flex items-center gap-1">
            {/* Network icon */}
            <div className="win2k-sunken px-1 h-[20px] flex items-center" title="Kết nối mạng">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000080" strokeWidth="2" aria-hidden="true">
                <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>
              </svg>
            </div>
            {/* Volume icon */}
            <div className="win2k-sunken px-1 h-[20px] flex items-center" title="Âm lượng">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              </svg>
            </div>
            {/* Clock */}
            <div
              className="win2k-sunken px-2 h-[20px] flex items-center text-[11px] font-bold text-black select-none"
              aria-label={`Thời gian: ${time}`}
            >
              {time}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
