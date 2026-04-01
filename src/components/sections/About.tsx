"use client";

import { useInView } from "@/hooks/useInView";

/* ——— Skill data ——— */
const SKILLS = [
  { name: "AI Automation", pct: 95 },
  { name: "Business Strategy", pct: 90 },
  { name: "LLM Engineering", pct: 88 },
  { name: "Process Optimization", pct: 92 },
] as const;

const TECH_TAGS = [
  "GPT-4o",
  "Claude 3.5",
  "n8n",
  "Make.com",
  "LangChain",
  "Python",
  "Zapier",
  "Notion AI",
] as const;

/* ——— Animated Skill Bar (Win2K progress style) ——— */
function SkillBar({ name, pct }: { name: string; pct: number }) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-[11px] font-bold text-black">{name}</span>
        <span className="text-[11px] font-bold text-[#000080]">{pct}%</span>
      </div>
      <div
        ref={ref}
        className="win2k-progress-track"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${pct}%`}
      >
        <div
          className={`win2k-progress-fill ${isInView ? "animated" : ""}`}
          style={{ "--pct": `${pct}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

export default function About() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>();

  return (
    <section
      id="about"
      className="bg-[#008080] px-4 py-8"
      aria-label="Giới thiệu"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section header label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-[#006060]" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c0e8e8]">
            01 / Giới Thiệu
          </span>
          <div className="h-px flex-1 bg-[#006060]" aria-hidden="true" />
        </div>

        <div className="grid gap-4 lg:grid-cols-2 items-start">

          {/* ——— Left: About dialog window ——— */}
          <div className="win2k-window">
            <div className="win2k-titlebar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <span className="flex-1 text-[11px] font-bold text-white">
                About Nguyễn Đức Kiên - Properties
              </span>
              <div className="flex gap-0.5">
                <button className="win2k-titlebar-btn" aria-label="Minimize">_</button>
                <button className="win2k-titlebar-btn" aria-label="Maximize">
                  <span className="block w-2 h-2 border border-black" />
                </button>
                <button className="win2k-titlebar-btn font-bold" aria-label="Close">X</button>
              </div>
            </div>

            {/* Tab bar */}
            <div className="flex gap-0 border-b border-[#808080] bg-[#d4d0c8] px-2 pt-1">
              <div className="win2k-raised px-4 py-1 text-[11px] font-bold text-black cursor-default border-b-0 relative z-10 -mb-px bg-[#d4d0c8]">
                Tổng Quan
              </div>
              <div className="px-4 py-1 text-[11px] text-[#444] cursor-default border border-[#808080] bg-[#c0c0c0]">
                Chi Tiết
              </div>
              <div className="px-4 py-1 text-[11px] text-[#444] cursor-default border border-[#808080] bg-[#c0c0c0]">
                Liên Kết
              </div>
            </div>

            {/* Content */}
            <div className="p-5 bg-[#d4d0c8]">
              <h2
                ref={titleRef}
                className={`text-[20px] font-bold text-[#000080] mb-1 reveal-element ${titleVisible ? "visible" : ""}`}
              >
                Kiến Trúc Sư Vận Hành
              </h2>
              <p className="text-[14px] font-bold text-[#008080] mb-4">
                Một Thập Kỷ Vận Hành Xuất Sắc
              </p>

              <p className="text-[11px] leading-relaxed text-black mb-3">
                Hành trình của tôi bắt đầu từ những thử thách quản lý doanh nghiệp thực tế,
                nơi tôi đã dành <strong>10 năm tối ưu hóa</strong> các quy trình thủ công
                cho các doanh nghiệp lớn.
              </p>
              <p className="text-[11px] leading-relaxed text-black mb-5">
                Nhận thấy những hạn chế của vận hành ở quy mô con người, tôi đã chuyển hướng
                sang triển khai AI. Ngày nay, tôi thu hẹp khoảng cách giữa{" "}
                <strong>trí tuệ quản trị truyền thống</strong> và khả năng mở rộng vô hạn
                của các hệ thống tự trị.
              </p>

              {/* Feature boxes */}
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: "⚡",
                    title: "Chuyển Đổi Hệ Thống",
                    desc: "Di chuyển kiến trúc doanh nghiệp từ truyền thống sang ưu tiên AI.",
                  },
                  {
                    icon: "📊",
                    title: "Kiểm Tra Hiệu Suất",
                    desc: "Lập bản đồ hiệu suất dựa trên dữ liệu và loại bỏ các nút thắt cổ chai.",
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="win2k-sunken flex gap-3 p-3 bg-white"
                  >
                    <div
                      className="win2k-raised flex size-9 shrink-0 items-center justify-center text-lg"
                      aria-hidden="true"
                    >
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-[11px] font-bold text-black mb-0.5">{f.title}</h3>
                      <p className="text-[10px] text-[#444] leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dialog buttons */}
            <div className="flex justify-end gap-2 p-3 border-t border-[#808080] bg-[#d4d0c8]">
              <a href="#services" className="win2k-btn text-[11px] px-4">Dịch Vụ</a>
              <a href="#contact" className="win2k-btn win2k-btn-primary text-[11px] px-4">Liên Hệ</a>
            </div>
          </div>

          {/* ——— Right: Skills window (like Device Manager) ——— */}
          <div className="win2k-window sticky top-[calc(56px+1rem)]">
            <div className="win2k-titlebar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="flex-1 text-[11px] font-bold text-white">Performance Monitor</span>
              <button className="win2k-titlebar-btn font-bold" aria-label="Close">X</button>
            </div>

            <div className="p-4 bg-[#d4d0c8]">
              {/* Skills section */}
              <div className="win2k-groupbox mb-4">
                <span className="win2k-groupbox-label">Chỉ Số Năng Lực</span>
                <div className="pt-2">
                  {SKILLS.map((s) => (
                    <SkillBar key={s.name} name={s.name} pct={s.pct} />
                  ))}
                </div>
              </div>

              {/* Tech tags section */}
              <div className="win2k-groupbox">
                <span className="win2k-groupbox-label">Công Nghệ Cài Đặt</span>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {TECH_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="win2k-raised px-2 py-0.5 text-[10px] font-bold text-black cursor-default select-none hover:bg-[#000080] hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* System info */}
              <div className="mt-3 win2k-sunken p-2 bg-black">
                <p className="text-[10px] text-green-400 font-mono">
                  C:\ARCHITECT&gt; status --verbose
                </p>
                <p className="text-[10px] text-green-400 font-mono">
                  [OK] AI Systems: Online
                </p>
                <p className="text-[10px] text-green-400 font-mono">
                  [OK] Automation: Active
                </p>
                <p className="text-[10px] text-yellow-400 font-mono">
                  [!!] New projects: Accepted
                </p>
                <p className="text-[10px] text-green-400 font-mono animate-[blink_1s_step-end_infinite]">
                  _
                </p>
              </div>
            </div>

            <div className="win2k-statusbar">
              <span className="text-[10px]">4 chỉ số đang theo dõi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
