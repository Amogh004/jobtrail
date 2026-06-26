import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bell,
  FileText,
  KanbanSquare,
  MessagesSquare,
  CalendarClock,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: KanbanSquare,
    title: "Application pipeline",
    description:
      "Drag opportunities across stages from saved to offer. See your entire search at a glance, never lose a lead.",
    className: "sm:col-span-2",
  },
  {
    icon: CalendarClock,
    title: "Interview scheduling",
    description:
      "Keep every round, panel, and time zone organized with prep notes attached to each conversation.",
  },
  {
    icon: Bell,
    title: "Smart reminders",
    description:
      "Automatic nudges for follow-ups, thank-you notes, and deadlines so nothing slips.",
  },
  {
    icon: FileText,
    title: "Resume versions",
    description:
      "Store tailored resumes and cover letters per role, and track exactly which version you sent where.",
    className: "sm:col-span-2",
  },
  {
    icon: MessagesSquare,
    title: "Recruiter CRM",
    description:
      "Log every recruiter touchpoint, contact detail, and conversation thread in one timeline.",
  },
  {
    icon: BarChart3,
    title: "Search analytics",
    description:
      "Understand response rates, time-to-interview, and where your pipeline stalls.",
    className: "sm:col-span-2",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything your job search needs, nothing it doesn&apos;t.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          JobTrail replaces the messy spreadsheets, sticky notes, and forgotten
          follow-ups with one focused workspace built for momentum.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className={cn(
              "border-border bg-card/60 transition-colors hover:border-primary/40",
              feature.className,
            )}
          >
            <CardHeader>
              <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                <feature.icon className="size-5" />
              </span>
              <CardTitle className="mt-3 text-base">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
