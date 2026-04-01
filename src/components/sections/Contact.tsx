"use client";

import { useState, type FormEvent } from "react";
import { useInView } from "@/hooks/useInView";

/* ——— Contact method data ——— */
const CONTACT_METHODS = [
  {
    id: "email",
    icon: "✉",
    label: "Email trực tiếp",
    value: "phnguyenduckien@gmail.com",
    href: "mailto:phnguyenduckien@gmail.com",
    external: false,
  },
  {
    id: "linkedin",
    icon: "in",
    label: "LinkedIn",
    value: "Kết nối chuyên nghiệp",
    href: "https://linkedin.com",
    external: true,
  },
  {
    id: "calendly",
    icon: "Cal",
    label: "Calendly",
    value: "Đặt lịch tư vấn miễn phí 30 phút",
    href: "https://calendly.com",
    external: true,
  },
] as const;

export default function Contact() {
  const [titleRef, titleVisible] = useInView<HTMLHeadingElement>();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("service"),
      message: formData.get("message"),
    };

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    setError(null);
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Gửi yêu cầu thất bại.");
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 10000);
    } catch (err: any) {
      setError(err.message || "Đã có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setSubmitting(true);
      setTimeout(() => setSubmitting(false), 500);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#008080] px-4 py-8"
      aria-label="Liên hệ"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-[#006060]" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c0e8e8]">
            04 / Liên Hệ
          </span>
          <div className="h-px flex-1 bg-[#006060]" aria-hidden="true" />
        </div>

        <div className="grid gap-4 lg:grid-cols-2 items-start">

          {/* ——— Left: Contact info window ——— */}
          <div className="win2k-window">
            <div className="win2k-titlebar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="flex-1 text-[11px] font-bold text-white">
                Liên Hệ - Outlook Express
              </span>
              <div className="flex gap-0.5">
                <button className="win2k-titlebar-btn" aria-label="Minimize">_</button>
                <button className="win2k-titlebar-btn" aria-label="Maximize">
                  <span className="block w-2 h-2 border border-black" />
                </button>
                <button className="win2k-titlebar-btn font-bold" aria-label="Close">X</button>
              </div>
            </div>

            {/* Toolbar */}
            <div className="win2k-toolbar">
              {["Mới", "Trả lời", "Chuyển tiếp", "In", "Xóa"].map((btn) => (
                <button key={btn} className="win2k-btn text-[10px] px-2 py-0.5 min-w-0">{btn}</button>
              ))}
            </div>

            <div className="p-5 bg-[#d4d0c8]">
              <h2
                ref={titleRef}
                className={`text-[20px] font-bold text-[#000080] mb-1 reveal-element ${titleVisible ? "visible" : ""}`}
              >
                Khởi Chạy Giao Thức Hợp Tác
              </h2>
              <p className="text-[11px] text-black mb-5">
                Thảo luận về yêu cầu của bạn. Tôi phản hồi trong vòng{" "}
                <strong>24 giờ</strong>.
              </p>

              {/* Contact methods */}
              <div className="flex flex-col gap-2">
                {CONTACT_METHODS.map((method, index) => (
                  <a
                    key={method.id}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className={`win2k-sunken flex items-center gap-3 p-2 bg-white hover:bg-[#000080] group cursor-pointer reveal-element reveal-delay-${(index % 3) + 1} visible`}
                  >
                    <div className="win2k-raised flex size-9 shrink-0 items-center justify-center text-sm font-bold text-[#000080] group-hover:text-[#000080]">
                      {method.icon}
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[9px] uppercase tracking-wider text-[#444] group-hover:text-[#ccc]">
                        {method.label}
                      </span>
                      <span className="text-[11px] font-bold text-black group-hover:text-white truncate">
                        {method.value}
                      </span>
                    </div>
                    <span className="text-[#808080] group-hover:text-white text-sm" aria-hidden="true">&#8594;</span>
                  </a>
                ))}
              </div>

              {/* Info panel */}
              <div className="mt-4 win2k-groupbox">
                <span className="win2k-groupbox-label">Thông Tin Liên Hệ</span>
                <div className="pt-1 win2k-sunken p-2 bg-white">
                  <table className="w-full text-[10px]">
                    <tbody>
                      <tr><td className="font-bold text-black pr-2">Tên:</td><td className="text-[#000080]">Nguyễn Đức Kiên</td></tr>
                      <tr><td className="font-bold text-black pr-2">Công ty:</td><td>Architect AI Studio</td></tr>
                      <tr><td className="font-bold text-black pr-2">Phản hồi:</td><td className="text-green-700">{"< 24 giờ"}</td></tr>
                      <tr><td className="font-bold text-black pr-2">Trạng thái:</td><td className="text-green-700 font-bold">Online</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* ——— Right: Form as a Win2K dialog ——— */}
          <div className="win2k-window">
            <div className="win2k-titlebar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
              <span className="flex-1 text-[11px] font-bold text-white">
                Gửi Yêu Cầu - New Message
              </span>
              <div className="flex gap-0.5">
                <button className="win2k-titlebar-btn" aria-label="Minimize">_</button>
                <button className="win2k-titlebar-btn font-bold" aria-label="Close">X</button>
              </div>
            </div>

            {/* Form toolbar */}
            <div className="win2k-toolbar">
              <button type="submit" form="contact-form" className="win2k-btn text-[10px] px-3 py-0.5 min-w-0 font-bold">
                Gửi
              </button>
              <div className="win2k-separator" aria-hidden="true" />
              <button className="win2k-btn text-[10px] px-2 py-0.5 min-w-0">Cắt</button>
              <button className="win2k-btn text-[10px] px-2 py-0.5 min-w-0">Sao chép</button>
              <button className="win2k-btn text-[10px] px-2 py-0.5 min-w-0">Dán</button>
            </div>

            <div className="p-4 bg-[#d4d0c8]">
              <form
                id="contact-form"
                noValidate
                onSubmit={handleSubmit}
                className="flex flex-col gap-3"
                aria-label="Form liên hệ"
              >
                {/* Name */}
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-[11px] font-bold text-black w-20 text-right shrink-0"
                  >
                    Họ và tên:
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Nguyễn Văn A"
                    required
                    autoComplete="name"
                    className="win2k-input flex-1"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="contact-email-input"
                    className="text-[11px] font-bold text-black w-20 text-right shrink-0"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="contact-email-input"
                    name="email"
                    placeholder="phnguyenduckien@gmail.com"
                    required
                    autoComplete="email"
                    className="win2k-input flex-1"
                  />
                </div>

                {/* Separator line */}
                <div className="h-px bg-[#808080] shadow-[0_1px_0_white]" aria-hidden="true" />

                {/* Service */}
                <div className="flex items-start gap-2">
                  <label
                    htmlFor="contact-service"
                    className="text-[11px] font-bold text-black w-20 text-right shrink-0 mt-1"
                  >
                    Dịch vụ:
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className="win2k-input form-select-custom flex-1"
                  >
                    <option value="" disabled>Chọn dịch vụ...</option>
                    <option value="automation">Tự Động Hóa Quy Trình AI</option>
                    <option value="strategy">Chiến Lược Kinh Doanh & AI</option>
                    <option value="coaching">Huấn Luyện Hiệu Suất Cá Nhân</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex items-start gap-2">
                  <label
                    htmlFor="contact-message"
                    className="text-[11px] font-bold text-black w-20 text-right shrink-0 mt-1"
                  >
                    Nội dung:
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Hãy chia sẻ thách thức bạn đang gặp phải..."
                    rows={5}
                    required
                    className="win2k-input flex-1 resize-y min-h-[90px]"
                  />
                </div>

                {/* Success */}
                {submitted && (
                  <div
                    className="win2k-window p-3 border-[#008000]"
                    role="alert"
                    style={{ borderColor: "#008000" }}
                  >
                    <div className="win2k-titlebar" style={{ background: "linear-gradient(to right, #008000, #00aa00)" }}>
                      <span className="text-[11px] font-bold text-white flex-1">Thông Báo</span>
                    </div>
                    <div className="p-3 flex items-center gap-3 bg-[#d4d0c8]">
                      <div className="text-2xl" aria-hidden="true">&#10003;</div>
                      <p className="text-[11px] text-black">Yêu cầu đã được gửi! Tôi sẽ liên hệ lại sớm.</p>
                    </div>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div className="win2k-window p-0" role="alert">
                    <div className="win2k-titlebar" style={{ background: "linear-gradient(to right, #cc0000, #ff3333)" }}>
                      <span className="text-[11px] font-bold text-white flex-1">Lỗi</span>
                    </div>
                    <div className="p-3 flex items-center gap-3 bg-[#d4d0c8]">
                      <div className="text-2xl" aria-hidden="true">&#10007;</div>
                      <p className="text-[11px] text-black">{error}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Dialog buttons */}
            <div className="flex justify-end gap-2 p-3 border-t border-[#808080] bg-[#d4d0c8]">
              <button
                type="submit"
                form="contact-form"
                disabled={submitting}
                className="win2k-btn win2k-btn-primary text-[11px] px-6 disabled:opacity-60"
              >
                {submitting ? "Đang gửi..." : "Gửi Yêu Cầu"}
              </button>
              <button type="reset" form="contact-form" className="win2k-btn text-[11px] px-4">
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
