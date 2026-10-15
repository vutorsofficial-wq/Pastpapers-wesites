import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Filter, GraduationCap, Search, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PaperCard } from "@/components/paper-card";
import { Button } from "@/components/ui/button";
import { papers, allClasses } from "@/data/papers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AKUEB Past Papers — Free Question Papers, Marking Schemes & Answer Keys" },
      {
        name: "description",
        content:
          "Free access to AKUEB past papers for Classes IX, X, XI, and XII. Download question papers, marking schemes and answer keys for all subjects.",
      },
      { property: "og:title", content: "AKUEB Past Papers — Free Resources" },
      { property: "og:description", content: "Browse AKUEB past papers, marking schemes and answer keys by class, subject and year." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = papers.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(1_0_0/0.15),transparent_60%)]" />
          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                <BookOpen className="h-3.5 w-3.5" /> Free Educational Resource
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                AKUEB Past Papers
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 md:text-lg">
                Free access to past papers, marking schemes and answer keys for AKUEB
                Classes IX–XII. Organized by class, subject and year.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/papers">
                    Browse Papers <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                  <Link to="/papers">
                    <GraduationCap className="mr-2 h-4 w-4" /> Select Class
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Class Quick Links */}
        <section className="container mx-auto px-4 py-14">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Browse by Class</h2>
            <p className="mt-2 text-muted-foreground">Jump straight to your level.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {allClasses.map((cls) => (
              <Link
                key={cls}
                to="/papers"
                search={{ class: cls }}
                className="group rounded-xl border border-border bg-card p-6 text-center shadow-soft transition-base hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elegant"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground transition-base group-hover:scale-110">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="mt-3 text-lg font-semibold">Class {cls}</div>
                <div className="text-xs text-muted-foreground">View past papers</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-gradient-subtle py-14">
          <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
            {[
              { Icon: Search, title: "Quick Search", desc: "Find any paper in seconds with smart search." },
              { Icon: Filter, title: "Powerful Filters", desc: "Filter by class, subject and year instantly." },
              { Icon: ShieldCheck, title: "Always Free", desc: "Free, fast and accessible — no signup required." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Papers */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Latest Papers</h2>
              <p className="mt-1 text-muted-foreground">Fresh from the most recent exam session.</p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link to="/papers">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <PaperCard key={p.id} paper={p} />)}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
