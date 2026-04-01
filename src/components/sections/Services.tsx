"use client";

import { useInView } from "@/hooks/useInView";

/* ——— Service data ——— */
const SERVICES = [
  {
    id: "automation",
    number: "01",
    title: "Tự Động Hóa Quy Trình AI",
    desc: "Triển khai các quy trình tự trị xử lý các tác vụ dữ liệu khối lượng lớn mà không cần sự can thiệp của con người.",
    features: [
      "Tự động hóa workflow n8n / Make.com",
      "Tích hợp API & hệ thống CRM",
      "Xây dựng chatbot thông minh",
      "Phân tích dữ liệu tự động",
    ],
    icon: "⚙️",
    featured: false,
  },
  {
    id: "strategy",
    number: "02",
    title: "Chiến Lược Kinh Doanh & Tích Hợp AI",
    desc: "Tư vấn cấp cao để điều chỉnh các mục tiêu kinh doanh cốt lõi với các ngăn xếp LLM và tự động hóa mới nhất.",
    features: [
      "Đánh giá mức độ sẵn sàng AI",
      "Thiết kế kiến trúc hệ thống AI",
      "Lộ trình triển khai chi tiết",
      "Đo lường ROI và hiệu suất",
    ],
    icon: "📊",
    featured: true,
  },
  {
    id: "coaching",
    number: "03",
    title: "Huấn Luyện Hiệu Suất Cá Nhân",
    desc: "Đào tạo cấp điều hành về việc tận dụng các trợ lý AI cá nhân để thu hồi hơn 20 giờ làm việc mỗi tuần.",
    features: [
      "Thiết lập hệ thống AI cá nhân",
      "Prompt engineering nâng cao",
      "Tối ưu luồng công việc cá nhân",
      "Coaching 1-on-1 hàng tuần",
    ],
    icon: "🎓",
    featured: false,
  },
] as const;

/* ——— Service Card as a Win2K window ——— */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const [ref, isInView] = useInView<HTMLElement>();
  const delayClass = `reveal-delay-${(index % 3) + 1}`;

  return (
    <article
      ref={ref}
      id={`service-${service.id}`}
      className={`win2k-window reveal-element ${isInView ? "visible" : ""} ${delayClass} flex flex-col`}
    >
      {/* Title bar */}
      <div className={service.featured ? "win2k-titlebar" : "win2k-titlebar-inactive"}>
        <span className="text-lg leading-none" aria-hidden="true">{service.icon}</span>
        <span className="flex-1 text-[11px] font-bold truncate">
          {service.number}. {service.title}
        </span>
        {service.featured && (
          <span className="bg-yellow-300 text-black text-[9px] font-bold px-1.5 py-0.5 mr-1 border border-yellow-600">
            PHO BIEN
          </span>
        )}
        <button className="win2k-titlebar-btn font-bold" aria-label="Close">X</button>
      </div>

      {/* Toolbar */}
      <div className="win2k-toolbar">
        <button className="win2k-toolbar-btn" title="Properties" aria-label="Properties">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2"/>
          </svg>
        </button>
        <button className="win2k-toolbar-btn" title="Help" aria-label="Help">?</button>
        <div className="win2k-separator" aria-hidden="true" />
        <a href="#contact" className="win2k-toolbar-btn text-[10px] font-bold" title="Contact" aria-label="Contact">
          &#128233;
        </a>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 bg-[#d4d0c8]">
        <p className="text-[11px] leading-relaxed text-black mb-4">{service.desc}</p>

        {/* Features as a list with classic bullets */}
        <div className="win2k-groupbox mb-4">
          <span className="win2k-groupbox-label">Tính Năng</span>
          <ul className="pt-1 flex flex-col gap-0.5" aria-label={`Tính năng ${service.title}`}>
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-1.5 text-[11px] text-black">
                <span className="text-[#000080] font-bold mt-px" aria-hidden="true">-</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <a href="#contact" className="win2k-btn win2k-btn-primary text-[11px] block text-center w-full">
          Tìm Hiểu Thêm
        </a>
      </div>

      {/* Status bar */}
      <div className="win2k-statusbar">
        <div className="win2k-sunken px-2 flex-1 text-[10px]">Sẵn sàng</div>
        <div className="win2k-sunken px-2 text-[10px]">{service.features.length} tính năng</div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#008080] px-4 py-8"
      aria-label="Dịch vụ"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-[#006060]" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c0e8e8]">
            02 / Dịch Vụ
          </span>
          <div className="h-px flex-1 bg-[#006060]" aria-hidden="true" />
        </div>

        {/* Explorer-style container */}
        <div className="win2k-window mb-4">
          <div className="win2k-titlebar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
              <path d="M3 7a1 1 0 011-1h4l2 2h9a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"/>
            </svg>
            <span className="flex-1 text-[11px] font-bold text-white">
              Dịch Vụ Chuyên Sâu - Windows Explorer
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

          {/* Toolbar */}
          <div className="win2k-toolbar">
            <button className="win2k-toolbar-btn" aria-label="Back">&#8592;</button>
            <button className="win2k-toolbar-btn" aria-label="Forward">&#8594;</button>
            <button className="win2k-toolbar-btn" aria-label="Up">&#8593;</button>
            <div className="win2k-separator" aria-hidden="true" />
            <button className="win2k-toolbar-btn" aria-label="Search">&#128269;</button>
            <button className="win2k-toolbar-btn" aria-label="Folders">&#128193;</button>
            <div className="win2k-separator" aria-hidden="true" />
            <button className="win2k-toolbar-btn" aria-label="Views">&#9776;</button>
          </div>

          {/* Address bar */}
          <div className="flex items-center gap-1 px-2 py-1 border-b border-[#808080] bg-[#d4d0c8]">
            <span className="text-[10px] text-black font-bold">Địa chỉ:</span>
            <div className="win2k-sunken px-2 py-0.5 text-[10px] flex-1 text-black">
              C:\ARCHITECT.AI\Services\
            </div>
          </div>

          {/* Header row */}
          <div className="bg-[#d4d0c8] px-4 py-3">
            <h2 className="text-[22px] font-bold text-[#000080] mb-1">
              Giao Thức Cốt Lõi
            </h2>
            <p className="text-[11px] text-black">
              3 dịch vụ tìm thấy. Chọn một dịch vụ để xem chi tiết.
            </p>
          </div>

          <div className="win2k-statusbar px-4 py-1">
            <span className="text-[10px]">3 đối tượng</span>
            <span className="ml-4 text-[10px]">Ổ C:</span>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
