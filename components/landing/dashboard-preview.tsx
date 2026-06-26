import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Building2, Calendar, MoreHorizontal } from "lucide-react";

type Stage = {
  title: string;
  count: number;
  accent: string;
  cards: { company: string; role: string; tag: string }[];
};

const stages: Stage[] = [
  {
    title: "Applied",
    count: 12,
    accent: "bg-muted-foreground/60",
    cards: [
      { company: "Vercel", role: "Product Engineer", tag: "Today" },
      { company: "Linear", role: "Design Engineer", tag: "2d ago" },
    ],
  },
  {
    title: "Interviewing",
    count: 4,
    accent: "bg-primary",
    cards: [
      { company: "Notion", role: "Frontend Lead", tag: "Tue 2pm" },
      { company: "Stripe", role: "Platform Eng", tag: "Thu 10am" },
    ],
  },
  {
    title: "Offer",
    count: 2,
    accent: "bg-chart-3",
    cards: [{ company: "Figma", role: "Sr. Engineer", tag: "Review" }],
  },
];

export function DashboardPreview() {
  return (
    <div className="mx-auto max-w-5xl rounded-xl border border-border bg-card/80 p-2 shadow-2xl shadow-primary/5 backdrop-blur">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="size-3 rounded-full bg-muted-foreground/30" />
        <span className="size-3 rounded-full bg-muted-foreground/30" />
        <span className="size-3 rounded-full bg-muted-foreground/30" />
        <div className="mx-auto hidden items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground sm:flex">
          <span className="size-1.5 rounded-full bg-chart-3" />
          app.jobtrail.com/pipeline
        </div>
      </div>

      <div className="rounded-lg border border-border bg-background/60 p-4 text-left">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold">Spring 2026 Search</h3>
            <p className="text-xs text-muted-foreground">18 active opportunities</p>
          </div>
          <Badge variant="secondary" className="gap-1.5">
            <span className="size-1.5 rounded-full bg-chart-3" />
            On track
          </Badge>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="rounded-lg border border-border bg-card/50 p-3"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={cn("size-2 rounded-full", stage.accent)} />
                  <span className="text-xs font-medium">{stage.title}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {stage.count}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {stage.cards.map((card) => (
                  <div
                    key={card.company}
                    className="rounded-md border border-border bg-background/80 p-2.5"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex size-6 items-center justify-center rounded bg-muted text-muted-foreground">
                          <Building2 className="size-3.5" />
                        </span>
                        <div>
                          <p className="text-xs font-medium leading-tight">
                            {card.company}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {card.role}
                          </p>
                        </div>
                      </div>
                      <MoreHorizontal className="size-3.5 text-muted-foreground" />
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <Calendar className="size-3" />
                      {card.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
