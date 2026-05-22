import { ArrowUpRight } from "lucide-react";
import a1 from "@/assets/article-1.jpg";
import a2 from "@/assets/article-2.jpg";
import a3 from "@/assets/article-3.jpg";

const articles = [
  { img: a1, tag: "Головний біль", title: "Мігрень: коли біль вимагає лікаря", excerpt: "Як відрізнити мігрень від звичайного головного болю та чому самолікування може зашкодити.", date: "12 травня 2026" },
  { img: a2, tag: "Сон", title: "Якщо сон не приносить відпочинку", excerpt: "Найпоширеніші розлади сну — від безсоння до апное — та сучасні підходи до їх лікування.", date: "28 квітня 2026" },
  { img: a3, tag: "Нейрореабілітація", title: "Відновлення після інсульту: перші кроки", excerpt: "Перші 90 днів критично важливі. Розповідаю про основні принципи реабілітації.", date: "14 квітня 2026" },
];

export function Articles() {
  return (
    <section id="articles" className="py-24 md:py-32 bg-gradient-soft border-t border-border/60">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Статті лікаря</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Корисні матеріали від Анни Сергіївни</h2>
          <p className="mt-4 text-muted-foreground">Прості пояснення складних неврологічних тем — щоб ви могли краще розуміти своє здоров'я.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a
              key={a.title}
              href="#"
              className="group bg-surface-elevated rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={a.img}
                  alt={a.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-wider">
                  <span className="text-primary font-medium">{a.tag}</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-foreground leading-tight">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Читати <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
