import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { z } from "zod";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PaperCard } from "@/components/paper-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { allClasses, allSubjects, allYears, papers } from "@/data/papers";

const searchSchema = z.object({
  class: z.enum(["IX", "X", "XI", "XII"]).optional(),
  subject: z.string().optional(),
  year: z.coerce.number().optional(),
});

export const Route = createFileRoute("/papers")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Browse AKUEB Past Papers — All Classes, Subjects & Years" },
      {
        name: "description",
        content:
          "Browse and filter AKUEB past papers by class (IX, X, XI, XII), subject and year. Free download links to question papers, marking schemes and answer keys.",
      },
      { property: "og:title", content: "Browse AKUEB Past Papers" },
      { property: "og:description", content: "Filter AKUEB past papers by class, subject and year." },
    ],
  }),
  component: PapersPage,
});

function PapersPage() {
  const initial = Route.useSearch();
  const [query, setQuery] = useState("");
  const [cls, setCls] = useState<string>(initial.class ?? "");
  const [subject, setSubject] = useState<string>(initial.subject ?? "");
  const [year, setYear] = useState<string>(initial.year ? String(initial.year) : "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return papers.filter((p) => {
      if (cls && p.class !== cls) return false;
      if (subject && p.subject !== subject) return false;
      if (year && String(p.year) !== year) return false;
      if (q && !p.title.toLowerCase().includes(q) && !p.subject.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, cls, subject, year]);

  const clearAll = () => {
    setQuery(""); setCls(""); setSubject(""); setYear("");
  };
  const hasFilters = query || cls || subject || year;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-gradient-subtle border-b border-border">
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold md:text-4xl">All Past Papers</h1>
            <p className="mt-2 text-muted-foreground">Search and filter through every available AKUEB paper.</p>

            <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_auto_auto_auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by title or subject…"
                  className="pl-9"
                  aria-label="Search papers"
                />
              </div>
              <FilterSelect label="Class" value={cls} onChange={setCls} options={allClasses.map((c) => ({ value: c, label: `Class ${c}` }))} />
              <FilterSelect label="Subject" value={subject} onChange={setSubject} options={allSubjects.map((s) => ({ value: s, label: s }))} />
              <FilterSelect label="Year" value={year} onChange={setYear} options={allYears.map((y) => ({ value: String(y), label: String(y) }))} />
              {hasFilters && (
                <Button variant="ghost" onClick={clearAll}>
                  <X className="mr-1 h-4 w-4" /> Clear
                </Button>
              )}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> {filtered.length === 1 ? "paper" : "papers"}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
              <p className="font-medium">No papers match your filters.</p>
              <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or clearing filters.</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => <PaperCard key={p.id} paper={p} />)}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={label}
      className="h-9 rounded-md border border-input bg-background px-3 text-sm shadow-soft transition-base focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <option value="">All {label}s</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}
