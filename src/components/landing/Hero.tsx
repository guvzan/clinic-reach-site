import { Phone, CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-10 md:pt-16 pb-20 md:pb-28">
      <div className="absolute inset-0 opacity-60 pointer-events-none [background:radial-gradient(60%_50%_at_70%_20%,oklch(0.85_0.08_225)_0%,transparent_70%)]" />
      <div className="container-page relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-xs uppercase tracking-[0.18em] text-muted-foreground shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Вища кваліфікаційна категорія · 21 рік практики
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.02]">
            Турбота про вашу <em className="not-italic text-primary">нервову систему</em> — з увагою до кожного симптому
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Анна Сергіївна Мельник — лікар-невролог із 21-річним досвідом.
            Консультації, точна діагностика та персональний план лікування. Можливий огляд вдома.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="inline-flex items-center gap-2.5 bg-gradient-primary text-primary-foreground px-6 py-4 rounded-full font-medium shadow-cta hover:translate-y-[-1px] transition"
            >
              <CalendarCheck className="w-5 h-5" />
              Записатись на прийом
            </a>
            <a
              href="tel:+380000000000"
              className="inline-flex items-center gap-2.5 bg-surface-elevated border border-border text-foreground px-6 py-4 rounded-full font-medium shadow-soft hover:bg-secondary transition"
            >
              <Phone className="w-5 h-5 text-primary" />
              +380 (00) 000 00 00
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "21", v: "рік практики" },
              { k: "вища", v: "категорія" },
              { k: "100%", v: "індивідуально" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl text-primary">{s.k}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-10 blur-2xl" />
            <img
              src={doctorPortrait}
              alt="Лікар-невролог Анна Мельник"
              width={1024}
              height={1280}
              className="relative w-full h-full object-cover rounded-[2rem] shadow-elevated border border-border/60"
            />
            <div className="absolute -bottom-6 -left-6 bg-surface-elevated rounded-2xl shadow-elevated p-4 flex items-center gap-3 max-w-[240px] border border-border/60">
              <div className="grid place-items-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Постійний зв'язок</p>
                <p className="text-xs text-muted-foreground">упродовж лікування</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
