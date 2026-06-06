import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Reviews } from "@/components/landing/Reviews";
import { Contact } from "@/components/landing/Contact";
import { BookCTA } from "@/components/landing/BookCTA";
import { Articles } from "@/components/landing/Articles";
import { Footer } from "@/components/landing/Footer";
import { Phone, CalendarCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Алла Говзан — лікар-невролог вищої категорії | Запис на прийом" },
      { name: "description", content: "Лікар-невролог з 21-річним досвідом. Лікування головного болю, наслідків інсульту, розладів сну, невралгій. Консультації, можливий огляд вдома." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        {/*<Reviews />*/}
        <Contact />
        <BookCTA />
        <Articles />
      </main>
      <Footer />

      {/* Mobile sticky CTA */}
      {/*<div className="fixed bottom-3 left-3 right-3 z-40 md:hidden flex gap-2 box-border">*/}
      {/*  <a*/}
      {/*    href="tel:+380972490514"*/}
      {/*    className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 bg-surface-elevated border border-border text-foreground py-3.5 rounded-full font-medium shadow-elevated"*/}
      {/*  >*/}
      {/*    <Phone className="w-4 h-4 shrink-0 text-primary" />*/}
      {/*    Дзвінок*/}
      {/*  </a>*/}

      {/*  <a*/}
      {/*    href="#book"*/}
      {/*    className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground py-3.5 rounded-full font-medium shadow-cta"*/}
      {/*  >*/}
      {/*    <CalendarCheck className="w-4 h-4 shrink-0" />*/}
      {/*    Запис*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
}
