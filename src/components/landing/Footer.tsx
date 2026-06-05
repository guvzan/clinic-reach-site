import { Phone, Send, MessageCircle } from "lucide-react";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container-page grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-display">А</span>
            <div>
              <p className="font-display text-lg">Алла Говзан</p>
              <p className="text-xs opacity-70 uppercase tracking-wider">Лікар-невролог</p>
            </div>
          </div>
          <p className="mt-5 text-sm opacity-75 max-w-xs leading-relaxed">
            Вища кваліфікаційна категорія. 21 рік практики. Консультації, діагностика та лікування.
          </p>
        </div>
        <div className="text-sm">
          <p className="opacity-60 uppercase tracking-wider text-xs">Розділи</p>
          <ul className="mt-4 space-y-2.5">
            <li><a href="#about" className="hover:opacity-100 opacity-85">Про лікаря</a></li>
            <li><a href="#services" className="hover:opacity-100 opacity-85">Послуги</a></li>
            <li><a href="#contacts" className="hover:opacity-100 opacity-85">Контакти</a></li>
            <li><a href="#articles" className="hover:opacity-100 opacity-85">Статті</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="opacity-60 uppercase tracking-wider text-xs">Зв'язок</p>
          <a href="tel:+380972490514" className="mt-4 flex items-center gap-2 hover:opacity-100 opacity-90"><Phone className="w-4 h-4" /> +380 (97) 249 05 14</a>
          <div className="mt-4 flex gap-2">
            {[
              { i: Send, h: "https://t.me/Alla_hovzan", l: "Telegram" },
              { i: MessageCircle, h: "viber://chat?number=%2B380972490514", l: "Viber" },
              { i: FacebookIcon, h: "https://facebook.com/alla.govzan", l: "Facebook" },
            ].map((s) => (
              <a key={s.l} href={s.h} aria-label={s.l} className="w-10 h-10 grid place-items-center rounded-full bg-background/10 hover:bg-background/20 transition">
                <s.i className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-page mt-12 pt-6 border-t border-background/15 text-xs opacity-60 flex flex-wrap justify-between gap-3">
        <p>© {new Date().getFullYear()} Алла Говзан. Усі права захищені.</p>
        <p>Сайт не замінює очну консультацію лікаря.</p>
      </div>
    </footer>
  );
}
