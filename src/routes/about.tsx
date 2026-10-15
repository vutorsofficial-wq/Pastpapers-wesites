import { createFileRoute } from "@tanstack/react-router";
import { Mail, ShieldCheck, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Contact — AKUEB Past Papers" },
      {
        name: "description",
        content: "Learn about AKUEB Past Papers — a free resource for students. Get in touch for suggestions, corrections or new papers.",
      },
      { property: "og:title", content: "About & Contact — AKUEB Past Papers" },
      { property: "og:description", content: "About this free AKUEB past papers resource and how to contact us." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="container mx-auto max-w-3xl px-4 py-16">
          <h1 className="text-3xl font-bold md:text-4xl">About AKUEB Past Papers</h1>
          <p className="mt-4 text-muted-foreground">
            AKUEB Past Papers is a free, student-first resource that compiles AKUEB question papers,
            marking schemes and answer keys in one place — organized by class, subject and year. Our
            goal is simple: help students prepare smarter, faster, and at zero cost.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="mt-3 text-lg font-semibold">Our Mission</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Make high-quality exam preparation materials accessible to every AKUEB student.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h2 className="mt-3 text-lg font-semibold">Disclaimer</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We do not host any files. All PDFs are stored on Google Drive and accessed via external links.
                Trademarks belong to their respective owners.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-border bg-gradient-subtle p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Spotted an issue, broken link, or want a paper added? We'd love to hear from you.
            </p>
            <a
              href="mailto:contact@example.com"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-base hover:bg-primary-glow"
            >
              <Mail className="h-4 w-4" /> contact@example.com
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
