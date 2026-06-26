import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "I went from a chaotic spreadsheet to a clear pipeline. JobTrail's reminders alone got me two follow-up interviews I would have forgotten.",
    name: "Priya Sharma",
    role: "Product Designer",
    initials: "PS",
  },
  {
    quote:
      "Tracking which resume version I sent to which company was a game changer. I finally felt in control of my search.",
    name: "Marcus Lee",
    role: "Software Engineer",
    initials: "ML",
  },
  {
    quote:
      "The recruiter CRM kept every conversation in one place. No more digging through email threads at 11pm.",
    name: "Elena Rossi",
    role: "Marketing Manager",
    initials: "ER",
  },
  {
    quote:
      "It feels like a tool a startup would build for its own hiring — but it's for me, the candidate. Beautifully done.",
    name: "David Okafor",
    role: "Data Scientist",
    initials: "DO",
  },
  {
    quote:
      "I landed an offer in six weeks. The analytics showed me exactly where I was losing momentum and how to fix it.",
    name: "Sara Kim",
    role: "Operations Lead",
    initials: "SK",
  },
  {
    quote:
      "Calm, fast, and focused. JobTrail is the only career tool I've actually kept using past week one.",
    name: "Tom Becker",
    role: "Frontend Engineer",
    initials: "TB",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-6xl px-6 py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Loved by job seekers in every field.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Thousands of candidates use JobTrail to stay organized, follow up
          faster, and land roles sooner.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-border bg-card/60">
            <CardContent className="flex h-full flex-col gap-6 pt-6">
              <p className="text-pretty text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3">
                <Avatar className="size-9">
                  <AvatarFallback className="bg-muted text-xs">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
