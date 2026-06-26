import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { DashboardPreview } from "./dashboard-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-80 max-w-3xl rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-20 pb-12 text-center sm:pt-28">
        <a
          href="#features"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <Sparkles className="size-3.5 text-primary" />
          The career command center for serious job seekers
        </a>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Run your job search like a pipeline, not a spreadsheet.
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          JobTrail is your personal Career CRM. Track every application,
          interview, reminder, resume version, and recruiter conversation in one
          calm, focused workspace.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            Start tracking free
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Watch the tour
          </Button>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          No credit card required · Free forever for one active search
        </p>

        <div className="mt-16 w-full">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
