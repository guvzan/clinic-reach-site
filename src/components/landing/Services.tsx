import { Stethoscope, ClipboardList, MessageCircle, MapPin } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Обстеження пацієнта", text: "Детальний огляд, збір анамнезу та неврологічна діагностика." },
  { icon: ClipboardList, title: "Призначення лікування", text: "Індивідуальний план терапії з урахуванням ваших особливостей." },
  { icon: MessageCircle, title: "Постійний зв'язок", text: "Супровід і корекція лікування на всьому шляху одужання." },
  { icon: MapPin, title: "Огляд вдома", text: "Можливість прийому за місцем проживання — для маломобільних пацієнтів." },
];

const conditions = [
  "Синдроми головного болю",
  "Розлади вегетативної нервової системи",
  "Демієлінізуючі захворювання",
  "Наслідки перенесених інсультів",
  "Наслідки ЧМТ",
  "Невралгії",
  "Неврити",
  "Радикуліти",
  "Полінейропатії",
  "Розлади сну",
  "Епілепсія",
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-soft border-y border-border/60">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Послуги</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Що пропонує лікар</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="group bg-surface-elevated rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center mb-5 shadow-cta">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-display text-2xl text-foreground">Захворювання, які лікує невролог</h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {conditions.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full bg-surface-elevated border border-border text-sm text-secondary-foreground shadow-soft">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
