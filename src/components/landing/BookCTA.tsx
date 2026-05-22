import { CalendarCheck, Clock, Phone } from "lucide-react";

export function BookCTA() {
  return (
    <section id="book" className="py-24 md:py-32">
      <div className="container-page">
        <div className="relative rounded-[2rem] bg-gradient-primary text-primary-foreground p-10 md:p-16 overflow-hidden shadow-elevated">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs uppercase tracking-[0.18em]">
                <Clock className="w-3.5 h-3.5" /> Зручний час · онлайн запис
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">
                Запишіться на консультацію онлайн
              </h2>
              <p className="mt-5 text-primary-foreground/85 max-w-lg leading-relaxed text-lg">
                Оберіть зручний час у календарі — підтвердження прийде на пошту.
                Якщо потрібна термінова консультація — зателефонуйте напряму.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between gap-3 bg-white text-primary px-7 py-5 rounded-2xl font-medium shadow-cta hover:bg-white/95 transition"
              >
                <span className="flex items-center gap-3">
                  <CalendarCheck className="w-6 h-6" />
                  Обрати час у Google Calendar
                </span>
                <span aria-hidden className="text-2xl group-hover:translate-x-1 transition">→</span>
              </a>
              <a
                href="tel:+380000000000"
                className="inline-flex items-center justify-between gap-3 bg-white/10 backdrop-blur border border-white/25 px-7 py-5 rounded-2xl font-medium hover:bg-white/15 transition"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Зателефонувати лікарю
                </span>
                <span aria-hidden className="text-2xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
