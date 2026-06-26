import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    description: "For your first focused job search.",
    features: [
      "1 active search pipeline",
      "Up to 25 applications",
      "Basic reminders",
      "2 resume versions",
    ],
    cta: "Get started",
    variant: "outline" as const,
    featured: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For serious, ongoing career growth.",
    features: [
      "Unlimited pipelines & applications",
      "Smart follow-up reminders",
      "Unlimited resume versions",
      "Recruiter CRM & timeline",
      "Search analytics dashboard",
    ],
    cta: "Start 14-day trial",
    variant: "default" as const,
    featured: true,
  },
  {
    name: "Teams",
    price: "Custom",
    period: "",
    description: "For coaches and career services.",
    features: [
      "Everything in Pro",
      "Shared candidate workspaces",
      "Coach collaboration tools",
      "Priority support",
    ],
    cta: "Contact sales",
    variant: "outline" as const,
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="secondary" className="mb-4">
          Pricing
        </Badge>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Simple pricing that scales with your search.
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Start free, upgrade when you&apos;re ready. Cancel anytime.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative border-border bg-card/60",
              plan.featured && "border-primary/50 bg-card shadow-lg shadow-primary/10",
            )}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                Most popular
              </span>
            )}
            <CardHeader>
              <p className="text-sm font-medium text-muted-foreground">
                {plan.name}
              </p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <Button variant={plan.variant} className="w-full">
                {plan.cta}
              </Button>
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
