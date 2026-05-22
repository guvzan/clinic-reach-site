import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Олена К.", text: "Дуже уважний лікар. Детально розпитала, призначила лікування — головний біль майже пройшов за тиждень. Дякую!", rating: 5, when: "2 тижні тому" },
  { name: "Михайло П.", text: "Звернувся після інсульту батька. Анна Сергіївна супроводжувала реабілітацію крок за кроком. Рекомендую.", rating: 5, when: "1 місяць тому" },
  { name: "Ірина С.", text: "Професійний підхід та людяність. Завжди на зв'язку, відповідає на питання. Рідко зустрінеш такого лікаря.", rating: 5, when: "3 місяці тому" },
];

export function Reviews() {
  return (
    <section className="py-24 md:py-32 bg-gradient-soft border-y border-border/60">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Відгуки</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Що кажуть пацієнти</h2>
          </div>
          <div className="flex items-center gap-3 bg-surface-elevated border border-border rounded-2xl px-5 py-3 shadow-soft">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-display text-lg text-foreground">5.0</span>
            <span className="text-sm text-muted-foreground">· Google Reviews</span>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <article key={r.name} className="bg-surface-elevated rounded-2xl p-7 border border-border shadow-soft hover:shadow-elevated transition relative">
              <Quote className="w-7 h-7 text-primary/30 absolute top-5 right-5" />
              <div className="flex">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">{r.text}</p>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <p className="font-medium text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.when}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
