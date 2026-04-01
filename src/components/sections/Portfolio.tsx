"use client";

import { useInView } from "@/hooks/useInView";

/* ——— Project data ——— */
const PROJECTS = [
  {
    id: "openclaw",
    tags: ["Personal Assistant", "AI Automation"],
    title: "Hệ thống Openclaw",
    desc: "Trợ lý cá nhân xuất sắc, giúp tự động hóa các tác vụ hàng ngày và tối ưu hóa năng suất làm việc cá nhân.",
    metrics: [
      { value: "20h+", label: "Tiết kiệm/tuần" },
      { value: "100%", label: "Tự động hóa" },
    ],
    icon: "💻",
    date: "15/03/2026",
    size: "2.4 MB",
    type: "Application",
  },
  {
    id: "iso-ai",
    tags: ["ISO", "QMS", "LLM"],
    title: "ISO AI",
    desc: "Ứng dụng AI vào Hệ thống quản trị chất lượng chuẩn ISO 9001, ISO 17025, ISO 17065. Tự động hóa đánh giá.",
    metrics: [
      { value: "99%", label: "Tuân thủ" },
      { value: "1/10", label: "Thời gian audit" },
    ],
    icon: "📋",
    date: "01/02/2026",
    size: "5.1 MB",
    type: "Document",
  },
  {
    id: "marketing",
    tags: ["Marketing AI", "Social Media"],
    title: "AI Marketing Automation",
    desc: "Tự động hóa đăng bài, quản trị Ads trên Facebook. Phân tích insight và tối ưu ngân sách theo thời gian thực.",
    metrics: [
      { value: "300%", label: "Tăng reach" },
      { value: "-40%", label: "Chi phí Ads" },
    ],
    icon: "📢",
    date: "20/01/2026",
    size: "3.7 MB",
    type: "Automation",
  },
] as const;

/* ——— Portfolio Card as Explorer Detail row + popup ——— */
function PortfolioCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const [ref, isInView] = useInView<HTMLElement>();
  const delayClass = `reveal-delay-${(index % 3) + 1}`;

  return (
    <article
      ref={ref}
      id={`portfolio-${project.id}`}
      className={`win2k-window reveal-element ${isInView ? "visible" : ""} ${delayClass} flex flex-col`}
    >
      {/* Title bar */}
      <div className="win2k-titlebar">
        <span className="text-base leading-none" aria-hidden="true">{project.icon}</span>
        <span className="flex-1 text-[11px] font-bold truncate">{project.title} - Properties</span>
        <button className="win2k-titlebar-btn font-bold" aria-label="Close">X</button>
      </div>

      {/* Tab strip */}
      <div className="flex gap-0 border-b border-[#808080] bg-[#d4d0c8] px-2 pt-1">
        <div className="win2k-raised px-3 py-0.5 text-[10px] font-bold text-black cursor-default border-b-0 relative z-10 -mb-px bg-[#d4d0c8]">
          Tổng Quan
        </div>
        <div className="px-3 py-0.5 text-[10px] text-[#444] cursor-default border border-[#808080] bg-[#c0c0c0]">
          Chi Tiết
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 bg-[#d4d0c8]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#808080]">
          <div className="win2k-raised flex size-12 items-center justify-center text-2xl">
            {project.icon}
          </div>
          <div>
            <h3 className="text-[13px] font-bold text-black">{project.title}</h3>
            <p className="text-[10px] text-[#444]">Loại: {project.type}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="win2k-tag">{tag}</span>
          ))}
        </div>

        {/* Description */}
        <div className="win2k-sunken p-2 bg-white mb-3">
          <p className="text-[11px] leading-relaxed text-black">{project.desc}</p>
        </div>

        {/* File info table */}
        <table className="w-full text-[10px] mb-3">
          <tbody>
            <tr className="border-b border-[#c0c0c0]">
              <td className="py-0.5 pr-4 font-bold text-black">Ngày tạo:</td>
              <td className="py-0.5 text-[#444]">{project.date}</td>
            </tr>
            <tr className="border-b border-[#c0c0c0]">
              <td className="py-0.5 pr-4 font-bold text-black">Kích thước:</td>
              <td className="py-0.5 text-[#444]">{project.size}</td>
            </tr>
            <tr>
              <td className="py-0.5 pr-4 font-bold text-black">Trạng thái:</td>
              <td className="py-0.5 text-green-700 font-bold">Hoàn thành</td>
            </tr>
          </tbody>
        </table>

        {/* Metrics */}
        <div className="win2k-groupbox">
          <span className="win2k-groupbox-label">Kết Quả</span>
          <div className="pt-1 flex gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <span className="text-[18px] font-bold text-[#000080]">{m.value}</span>
                <span className="text-[10px] text-[#444]">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog buttons */}
      <div className="flex justify-end gap-2 p-2 border-t border-[#808080] bg-[#d4d0c8]">
        <button className="win2k-btn text-[11px] px-3">OK</button>
        <button className="win2k-btn text-[11px] px-3">Hủy</button>
        <button className="win2k-btn win2k-btn-primary text-[11px] px-3">Áp Dụng</button>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#008080] px-4 py-8"
      aria-label="Dự án"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-[#006060]" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c0e8e8]">
            03 / Dự Án
          </span>
          <div className="h-px flex-1 bg-[#006060]" aria-hidden="true" />
        </div>

        {/* Explorer window container */}
        <div className="win2k-window mb-4">
          <div className="win2k-titlebar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
              <path d="M3 7a1 1 0 011-1h4l2 2h9a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"/>
            </svg>
            <span className="flex-1 text-[11px] font-bold text-white">
              Dự Án Tiêu Biểu - Windows Explorer
            </span>
            <div className="flex gap-0.5">
              <button className="win2k-titlebar-btn" aria-label="Minimize">_</button>
              <button className="win2k-titlebar-btn" aria-label="Maximize">
                <span className="block w-2 h-2 border border-black" />
              </button>
              <button className="win2k-titlebar-btn font-bold" aria-label="Close">X</button>
            </div>
          </div>

          {/* Menu bar */}
          <div className="win2k-menubar">
            {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
              <span key={item} className="win2k-menuitem text-[11px]">{item}</span>
            ))}
          </div>

          {/* Explorer details list header */}
          <div className="bg-[#d4d0c8] border-b border-[#808080]">
            <div className="grid grid-cols-[1fr_100px_80px_80px] px-4 py-0.5 bg-[#c0c0c0]">
              {["Tên", "Ngày tạo", "Loại", "Kích thước"].map((h) => (
                <div key={h} className="win2k-raised px-2 py-0.5 text-[10px] font-bold text-black cursor-default">
                  {h}
                </div>
              ))}
            </div>
            {PROJECTS.map((p) => (
              <a
                key={p.id}
                href={`#portfolio-${p.id}`}
                className="grid grid-cols-[1fr_100px_80px_80px] px-4 py-0.5 hover:bg-[#000080] hover:text-white group border-b border-[#d0d0d0] last:border-0"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm" aria-hidden="true">{p.icon}</span>
                  <span className="text-[11px] group-hover:text-white text-black">{p.title}</span>
                </div>
                <span className="text-[10px] text-[#444] group-hover:text-white self-center">{p.date}</span>
                <span className="text-[10px] text-[#444] group-hover:text-white self-center">{p.type}</span>
                <span className="text-[10px] text-[#444] group-hover:text-white self-center">{p.size}</span>
              </a>
            ))}
          </div>

          <div className="win2k-statusbar">
            <span className="text-[10px]">3 đối tượng</span>
            <span className="ml-4 text-[10px] win2k-sunken px-2">Mạng cục bộ</span>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <PortfolioCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
