import { Phone, CalendarCheck } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="container-page flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-primary text-primary-foreground font-display text-base shadow-soft">А</span>
          <div className="leading-tight">
            <p className="font-display text-base text-foreground">Анна Мельник</p>
            <p className="text-[11px] text-muted-foreground tracking-wide uppercase">Лікар-невролог</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">Про лікаря</a>
          <a href="#services" className="hover:text-foreground transition">Послуги</a>
          <a href="#contacts" className="hover:text-foreground transition">Контакти</a>
          <a href="#articles" className="hover:text-foreground transition">Статті</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:+380000000000"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 px-3 py-2 rounded-full"
          >
            <Phone className="w-4 h-4" /> Подзвонити
          </a>
          <a
            href="#book"
            className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-primary text-primary-foreground px-4 py-2.5 rounded-full shadow-cta hover:opacity-95 transition"
          >
            <CalendarCheck className="w-4 h-4" />
            Записатись
          </a>
        </div>
      </div>
    </header>
  );
}
