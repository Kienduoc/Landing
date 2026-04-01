"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

/* ——— Animated Counter ——— */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isInView || hasRun.current) return;
    hasRun.current = true;
    const duration = 1500;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.ceil(eased * target));
      if (frame >= totalFrames) { clearInterval(id); setCount(target); }
    }, duration / totalFrames);
    return () => clearInterval(id);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-[#000080] font-bold text-2xl">
      {count}
      <span className="text-base">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#008080] pt-[72px] px-4 py-8 flex items-start justify-center"
      aria-label="Hero section"
    >
      {/* ——— Desktop area with scattered windows ——— */}
      <div className="w-full max-w-[1100px]">

        {/* ——— Marquee announcement banner ——— */}
        <div className="win2k-window mb-4 overflow-hidden">
          <div className="win2k-titlebar">
            <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
              <rect x="0" y="0" width="7" height="7" fill="#FF0000" />
              <rect x="9" y="0" width="7" height="7" fill="#00FF00" />
              <rect x="0" y="9" width="7" height="7" fill="#0000FF" />
              <rect x="9" y="9" width="7" height="7" fill="#FFFF00" />
            </svg>
            <span className="flex-1 text-[11px] font-bold text-white">Thông Báo Hệ Thống</span>
            <button className="win2k-titlebar-btn" aria-label="Close">X</button>
          </div>
          <div className="bg-[#000080] py-1 overflow-hidden">
            <p className="text-yellow-300 text-[11px] font-bold whitespace-nowrap animate-[marquee_18s_linear_infinite]">
              *** ĐANG NHẬN DỰ ÁN MỚI - 2026 *** Chuyên gia AI Automation - n8n - LangChain - Claude - GPT-4o ***
              Liên hệ ngay để được tư vấn miễn phí 30 phút! ***
            </p>
          </div>
        </div>

        {/* ——— Main content grid ——— */}
        <div className="grid gap-4 lg:grid-cols-[1fr_320px]">

          {/* ——— Left: Main "My Computer" style window ——— */}
          <div className="win2k-window">
            {/* Title bar */}
            <div className="win2k-titlebar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true" className="shrink-0">
                <rect x="2" y="3" width="20" height="14" rx="1" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              <span className="flex-1 text-[11px] font-bold text-white">
                Architect.AI - Trang Chủ - Microsoft Internet Explorer
              </span>
              <div className="flex items-center gap-0.5">
                <button className="win2k-titlebar-btn" aria-label="Minimize">_</button>
                <button className="win2k-titlebar-btn" aria-label="Maximize">
                  <span className="block w-2 h-2 border border-black" />
                </button>
                <button className="win2k-titlebar-btn font-bold" aria-label="Close">X</button>
              </div>
            </div>

            {/* Toolbar */}
            <div className="win2k-toolbar border-b border-[#808080]">
              <button className="win2k-toolbar-btn" title="Back" aria-label="Back">&#8592;</button>
              <button className="win2k-toolbar-btn" title="Forward" aria-label="Forward">&#8594;</button>
              <button className="win2k-toolbar-btn" title="Stop" aria-label="Stop">&#9632;</button>
              <button className="win2k-toolbar-btn" title="Refresh" aria-label="Refresh">&#8635;</button>
              <button className="win2k-toolbar-btn" title="Home" aria-label="Home">&#127968;</button>
              <div className="win2k-separator" aria-hidden="true" />
              <button className="win2k-toolbar-btn" title="Search" aria-label="Search">&#128269;</button>
              <button className="win2k-toolbar-btn" title="Favorites" aria-label="Favorites">&#9733;</button>
              <div className="win2k-separator" aria-hidden="true" />
              <div className="flex items-center gap-1 ml-1">
                <span className="text-[10px] text-black">Địa chỉ:</span>
                <div className="win2k-sunken px-2 py-0.5 text-[10px] flex-1 text-black min-w-0">
                  http://architect.ai/
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="p-6 bg-white">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                {/* Text content */}
                <div className="flex-1">
                  <h1 className="text-[28px] font-bold text-[#000080] mb-1 leading-tight">
                    Tối Ưu Hóa Hiệu Suất Doanh Nghiệp
                  </h1>
                  <h2 className="text-[18px] font-bold text-[#008080] mb-4">
                    Với Tự Động Hóa AI
                  </h2>

                  <p className="text-[12px] leading-relaxed text-black mb-3">
                    Chuyên gia về <strong>Hiệu suất Doanh nghiệp</strong> và{" "}
                    <strong>Vận hành AI</strong>. Kiến tạo tương lai của logic kinh doanh có
                    khả năng mở rộng thông qua các giao thức thông minh.
                  </p>
                  <p className="text-[11px] text-[#444] mb-6">
                    Phiên bản 1.0 · Cập nhật lần cuối: 01/04/2026 · Hỗ trợ: IE 5.0+, Netscape 4.7+
                  </p>

                  {/* CTA buttons — classic dialog style */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <a
                      href="#services"
                      className="win2k-btn win2k-btn-primary text-[11px] px-6"
                    >
                      Khám Phá Dịch Vụ
                    </a>
                    <a
                      href="#portfolio"
                      className="win2k-btn text-[11px] px-6"
                    >
                      Xem Dự Án
                    </a>
                    <a
                      href="#contact"
                      className="win2k-btn text-[11px] px-6"
                    >
                      Liên Hệ Ngay
                    </a>
                  </div>

                  {/* Stats in groupbox */}
                  <div className="win2k-groupbox">
                    <span className="win2k-groupbox-label">Thống Kê Hệ Thống</span>
                    <div className="flex flex-wrap gap-6 pt-1">
                      <div className="flex flex-col gap-0.5">
                        <Counter target={10} suffix="+" />
                        <span className="text-[10px] text-[#444]">Năm kinh nghiệm</span>
                      </div>
                      <div className="w-px bg-[#808080] self-stretch" aria-hidden="true" />
                      <div className="flex flex-col gap-0.5">
                        <Counter target={50} suffix="+" />
                        <span className="text-[10px] text-[#444]">Dự án thành công</span>
                      </div>
                      <div className="w-px bg-[#808080] self-stretch" aria-hidden="true" />
                      <div className="flex flex-col gap-0.5">
                        <Counter target={20} suffix="h/tuần" />
                        <span className="text-[10px] text-[#444]">Được tiết kiệm/KH</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Avatar panel */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="win2k-sunken p-1 w-fit">
                    <Image
                      src="/assets/avatar.png"
                      alt="Nguyễn Đức Kiên - AI Expert"
                      width={200}
                      height={200}
                      priority
                      className="block"
                      style={{ imageRendering: "auto" }}
                    />
                  </div>
                  <div className="win2k-window p-2 text-center w-full">
                    <p className="text-[10px] font-bold text-black">Nguyễn Đức Kiên</p>
                    <p className="text-[10px] text-[#000080]">AI Expert &amp; Consultant</p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block" aria-hidden="true" />
                      <span className="text-[10px] text-green-700">Online - Sẵn sàng hợp tác</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="win2k-statusbar">
              <div className="win2k-sunken px-2 flex-1 text-[10px]">Xong</div>
              <div className="win2k-sunken px-2 text-[10px] w-24">Mạng cục bộ</div>
              <div className="win2k-sunken px-2 text-[10px] w-16">100%</div>
            </div>
          </div>

          {/* ——— Right: Desktop Icons + info panels ——— */}
          <div className="flex flex-col gap-3">

            {/* Desktop Icons panel */}
            <div className="win2k-window">
              <div className="win2k-titlebar">
                <span className="text-[11px] font-bold text-white flex-1">My Computer</span>
                <button className="win2k-titlebar-btn" aria-label="Close">X</button>
              </div>
              <div className="p-3 bg-white grid grid-cols-3 gap-1">
                {[
                  { icon: "💻", label: "AI Systems" },
                  { icon: "📊", label: "Analytics" },
                  { icon: "🤖", label: "Automation" },
                  { icon: "📁", label: "Projects" },
                  { icon: "🔧", label: "Tools" },
                  { icon: "📧", label: "Contact" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="win2k-desktop-icon cursor-pointer hover:bg-[#000080]/10 p-1"
                  >
                    <span className="text-2xl block text-center">{item.icon}</span>
                    <span className="text-[10px] text-black text-center block leading-tight mt-0.5">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Properties style panel */}
            <div className="win2k-window">
              <div className="win2k-titlebar">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M12 2a10 10 0 110 20A10 10 0 0112 2zm0 4a1 1 0 00-1 1v5a1 1 0 002 0V7a1 1 0 00-1-1zm0 9a1.25 1.25 0 110 2.5A1.25 1.25 0 0112 15z"/>
                </svg>
                <span className="text-[11px] font-bold text-white flex-1">System Properties</span>
                <button className="win2k-titlebar-btn" aria-label="Close">X</button>
              </div>
              <div className="p-3 bg-[#d4d0c8]">
                <div className="flex gap-3 items-start mb-3">
                  <svg width="32" height="32" viewBox="0 0 48 48" aria-hidden="true">
                    <rect x="4" y="4" width="40" height="32" rx="2" fill="#c0c0c0" stroke="#808080" strokeWidth="1"/>
                    <rect x="8" y="8" width="32" height="22" fill="#000080"/>
                    <rect x="18" y="38" width="12" height="4" fill="#c0c0c0"/>
                    <rect x="12" y="42" width="24" height="2" fill="#808080"/>
                  </svg>
                  <div>
                    <p className="text-[10px] font-bold text-black">Microsoft Windows 2000</p>
                    <p className="text-[10px] text-black">Professional</p>
                    <p className="text-[10px] text-[#444]">Version 5.00.2195</p>
                  </div>
                </div>
                <div className="border-t border-[#808080] pt-2">
                  <p className="text-[10px] text-black"><strong>Đăng ký cho:</strong></p>
                  <p className="text-[10px] text-[#000080] font-bold">Nguyễn Đức Kiên</p>
                  <p className="text-[10px] text-black">Architect AI Studio</p>
                </div>
                <div className="border-t border-[#808080] pt-2 mt-2">
                  <p className="text-[10px] text-black"><strong>RAM:</strong> 10+ năm kinh nghiệm</p>
                  <p className="text-[10px] text-black"><strong>CPU:</strong> AI Processing Unit v4</p>
                </div>
              </div>
              <div className="win2k-statusbar justify-end gap-2 p-2">
                <button className="win2k-btn text-[11px] px-4">OK</button>
              </div>
            </div>

            {/* Tech pill window */}
            <div className="win2k-window">
              <div className="win2k-titlebar">
                <span className="text-[11px] font-bold text-white flex-1">Installed Programs</span>
                <button className="win2k-titlebar-btn" aria-label="Close">X</button>
              </div>
              <div className="p-2 bg-white">
                {["GPT-4o", "Claude 3.5", "n8n", "Make.com", "LangChain", "Python", "Zapier"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 py-0.5 hover:bg-[#000080] hover:text-white group cursor-default px-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
                      <rect x="0" y="0" width="16" height="16" fill="#c0c0c0"/>
                      <rect x="2" y="2" width="12" height="8" fill="#000080"/>
                      <rect x="2" y="12" width="12" height="2" fill="#808080"/>
                    </svg>
                    <span className="text-[11px]">{tech}</span>
                    <span className="ml-auto text-[10px] text-[#444] group-hover:text-white">v2.0</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
