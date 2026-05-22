import { useState } from "react";
import { Phone, Copy, Check, Send, MessageCircle, Facebook, MapPin } from "lucide-react";

const PHONE = "+380 (00) 000 00 00";
const PHONE_TEL = "+380000000000";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_TEL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const socials = [
    { label: "Telegram", icon: Send, href: "https://t.me/yourhandle", color: "oklch(0.6 0.14 240)" },
    { label: "Viber", icon: MessageCircle, href: "viber://chat?number=%2B380000000000", color: "oklch(0.55 0.17 295)" },
    { label: "Facebook", icon: Facebook, href: "https://facebook.com/yourpage", color: "oklch(0.5 0.16 260)" },
  ];

  return (
    <section id="contacts" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-10">
        <div className="bg-surface-elevated border border-border rounded-3xl p-8 md:p-10 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Контакти</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Зв'яжіться зручним способом</h2>
          <p className="mt-3 text-muted-foreground">Зателефонуйте або напишіть у месенджер — відповім якнайшвидше.</p>

          <div className="mt-8 rounded-2xl border border-border bg-gradient-soft p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-cta shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Телефон</p>
                <a href={`tel:${PHONE_TEL}`} className="font-display text-xl md:text-2xl text-foreground truncate block">{PHONE}</a>
              </div>
            </div>
            <button
              onClick={copyPhone}
              aria-label="Скопіювати номер"
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-full border border-border bg-surface-elevated hover:bg-secondary transition shrink-0"
            >
              {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              {copied ? "Скопійовано" : "Копіювати"}
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center gap-2 py-5 rounded-2xl border border-border bg-surface-elevated hover:shadow-elevated hover:-translate-y-0.5 transition shadow-soft"
              >
                <span className="w-10 h-10 rounded-full grid place-items-center" style={{ background: s.color, color: "white" }}>
                  <s.icon className="w-5 h-5" />
                </span>
                <span className="text-sm text-foreground">{s.label}</span>
              </a>
            ))}
          </div>

          <a href={`tel:${PHONE_TEL}`} className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground py-4 rounded-2xl font-medium shadow-cta hover:opacity-95 transition">
            <Phone className="w-5 h-5" />
            Зателефонувати зараз
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border shadow-soft bg-surface-elevated relative min-h-[420px]">
          <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-surface-elevated/95 backdrop-blur border border-border shadow-soft text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            м. Івано-Франківськ
          </div>
          <iframe
            title="Карта розташування"
            src="https://www.google.com/maps?q=Ivano-Frankivsk&output=embed"
            className="w-full h-full min-h-[420px] border-0 grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
