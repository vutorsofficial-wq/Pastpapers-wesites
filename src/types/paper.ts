export type ClassLevel = "IX" | "X" | "XI" | "XII";

export type SubjectCategory = "Sciences" | "Languages" | "Commerce" | "Humanities";

export interface Subject {
  name: string;
  category: SubjectCategory;
}

export interface PaperResources {
  questionPaper1?: string;
  questionPaper2?: string;
  eMarkingNotes?: string;
  answerKey?: string;
}

export interface Paper {
  id: string;
  title: string;
  class: ClassLevel;
  subject: string;
  year: number;
  questionPaper1Url?: string;
  questionPaper2Url?: string;
  eMarkingNotesUrl?: string;
  answerKeyUrl?: string;
  featured?: boolean;
  popular?: boolean;
}

export type PdfFilesMap = Partial<
  Record<ClassLevel, Record<string, Record<number, PaperResources>>>
>;
