import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 text-center sm:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 max-w-lg rounded-full bg-primary/20 blur-3xl"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Take control of your career search today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Join thousands of job seekers who replaced the chaos with a calm,
            organized pipeline. Your next role is closer than you think.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="w-full sm:w-auto">
              Start tracking free
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
