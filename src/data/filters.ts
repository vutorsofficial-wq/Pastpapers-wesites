import type { Paper } from "@/types/paper";

export interface PaperFilters {
  query?: string;
  class?: string;
  subject?: string;
  year?: string;
}

export function filterPapers(papers: Paper[], f: PaperFilters): Paper[] {
  const q = f.query?.trim().toLowerCase() ?? "";
  return papers.filter((p) => {
    if (f.class && p.class !== f.class) return false;
    if (f.subject && p.subject !== f.subject) return false;
    if (f.year && String(p.year) !== f.year) return false;
    if (q && !p.title.toLowerCase().includes(q) && !p.subject.toLowerCase().includes(q)) return false;
    return true;
  });
}
