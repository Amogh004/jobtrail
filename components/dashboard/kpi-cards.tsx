import { ArrowUpRight, ArrowDownRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { kpis } from "@/lib/dashboard-data"

export function KpiCards() {
  return (
    <section
      aria-label="Key metrics"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {kpis.map((kpi) => (
        <Card key={kpi.label} className="overflow-hidden">
          <CardContent className="flex flex-col gap-4 p-5">
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <kpi.icon className="size-[18px]" />
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                  kpi.trend === "up"
                    ? "bg-chart-3/15 text-chart-3"
                    : "bg-destructive/15 text-destructive",
                )}
              >
                {kpi.trend === "up" ? (
                  <ArrowUpRight className="size-3" />
                ) : (
                  <ArrowDownRight className="size-3" />
                )}
                {kpi.change}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-semibold tracking-tight tabular-nums">
                {kpi.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {kpi.label}
                <span className="text-muted-foreground/70"> · {kpi.hint}</span>
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
