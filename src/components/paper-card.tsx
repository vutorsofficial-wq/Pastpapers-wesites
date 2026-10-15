import { ExternalLink, FileText, Key, ListChecks, Sparkles, TrendingUp } from "lucide-react";
import type { Paper } from "@/types/paper";
import { Badge } from "@/components/ui/badge";

interface PaperCardProps {
  paper: Paper;
}

type LinkKey = "questionPaper1Url" | "questionPaper2Url" | "eMarkingNotesUrl" | "answerKeyUrl";

const links: ReadonlyArray<{
  key: LinkKey;
  label: string;
  Icon: typeof FileText;
  variant: "primary" | "secondary";
}> = [
  { key: "questionPaper1Url", label: "Question Paper I", Icon: FileText, variant: "primary" },
  { key: "questionPaper2Url", label: "Question Paper II", Icon: FileText, variant: "primary" },
  { key: "eMarkingNotesUrl", label: "E-Marking Notes", Icon: ListChecks, variant: "secondary" },
  { key: "answerKeyUrl", label: "Answer Key", Icon: Key, variant: "secondary" },
];

export function PaperCard({ paper }: PaperCardProps) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-card p-5 shadow-soft transition-base hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elegant">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="font-medium">Class {paper.class}</Badge>
        <Badge variant="outline">{paper.year}</Badge>
        {paper.featured && (
          <Badge className="bg-accent text-accent-foreground">
            <Sparkles className="mr-1 h-3 w-3" /> Latest
          </Badge>
        )}
        {paper.popular && (
          <Badge className="bg-warning text-warning-foreground">
            <TrendingUp className="mr-1 h-3 w-3" /> Popular
          </Badge>
        )}
      </div>

      <h3 className="text-base font-semibold leading-snug text-foreground">{paper.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{paper.subject}</p>

      <div className="mt-4 flex flex-col gap-2">
        {links.map(({ key, label, Icon, variant }) => {
          const href = paper[key];
          const baseClass =
            variant === "primary"
              ? "inline-flex items-center justify-between rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-base hover:bg-primary-glow"
              : "inline-flex items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-base hover:border-primary/40 hover:bg-secondary";
          if (!href) {
            return (
              <span
                key={key}
                aria-disabled="true"
                className={`${baseClass} cursor-not-allowed opacity-50 hover:bg-primary`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </span>
            );
          }
          return (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={baseClass}
            >
              <span className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {label}
              </span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
          );
        })}
      </div>
    </article>
  );
}
