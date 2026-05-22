import { GraduationCap, Award, Users, Home } from "lucide-react";

const facts = [
  { icon: GraduationCap, title: "Освіта", text: "Івано-Франківська Державна Медична Академія, 2002 — спеціальність «Лікувальна справа». Інтернатура з неврології." },
  { icon: Award, title: "Кваліфікація", text: "Лікар-невролог вищої кваліфікаційної категорії. 21 рік практики." },
  { icon: Users, title: "Досвід", text: "Лисецька ЦРЛ — лікар-невролог поліклініки. Досвід стаціонарної практики." },
  { icon: Home, title: "Розвиток", text: "Учасник всеукраїнських науково-практичних конференцій, міждисциплінарних симпозіумів." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Про лікаря</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Кваліфікація, якій можна довіритись</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Постійний професійний розвиток та сучасні підходи — щоб ви отримали найкращу можливу допомогу при будь-якій неврологічній проблемі.
          </p>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
          {facts.map((f) => (
            <div key={f.title} className="bg-surface-elevated border border-border rounded-2xl p-6 shadow-soft hover:shadow-elevated transition">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
