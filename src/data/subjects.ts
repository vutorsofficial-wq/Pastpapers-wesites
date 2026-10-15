import type { Subject, SubjectCategory } from "@/types/paper";

export const subjects: Subject[] = [
  // Sciences
  { name: "Mathematics", category: "Sciences" },
  { name: "Physics", category: "Sciences" },
  { name: "Chemistry", category: "Sciences" },
  { name: "Biology", category: "Sciences" },
  { name: "Computer Science", category: "Sciences" },
  // Languages
  { name: "English", category: "Languages" },
  { name: "Urdu", category: "Languages" },
  { name: "Sindhi", category: "Languages" },
  { name: "Islamiat", category: "Languages" },
  { name: "Pakistan Studies", category: "Languages" },
  // Commerce
  { name: "Accounting", category: "Commerce" },
  { name: "Business Studies", category: "Commerce" },
  { name: "Economics", category: "Commerce" },
  { name: "Commerce", category: "Commerce" },
  { name: "Banking", category: "Commerce" },
  { name: "Statistics", category: "Commerce" },
  // Humanities
  { name: "History", category: "Humanities" },
  { name: "Geography", category: "Humanities" },
  { name: "Sociology", category: "Humanities" },
  { name: "Psychology", category: "Humanities" },
  { name: "Civics", category: "Humanities" },
  { name: "Philosophy", category: "Humanities" },
  { name: "Fine Arts", category: "Humanities" },
  { name: "Islamic History", category: "Humanities" },
];

export const subjectNames = subjects.map((s) => s.name);

export const subjectsByCategory: Record<SubjectCategory, Subject[]> = subjects.reduce(
  (acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  },
  {} as Record<SubjectCategory, Subject[]>,
);
