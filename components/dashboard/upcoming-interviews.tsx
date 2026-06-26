import { Video, ArrowRight } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { interviews } from "@/lib/dashboard-data"

export function UpcomingInterviews() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <CardTitle>Upcoming interviews</CardTitle>
        <Button variant="ghost" size="sm">
          All
          <ArrowRight data-icon="inline-end" />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        {interviews.map((iv) => (
          <div
            key={iv.id}
            className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-accent"
          >
            <span
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-lg text-xs font-semibold text-background",
                iv.color,
              )}
              aria-hidden="true"
            >
              {iv.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{iv.role}</p>
              <p className="truncate text-xs text-muted-foreground">
                {iv.company} · {iv.type}
              </p>
            </div>
            <div className="flex flex-col items-end gap-0.5 text-right">
              <span className="text-xs font-medium">{iv.date}</span>
              <span className="text-xs text-muted-foreground">{iv.time}</span>
            </div>
            <Button variant="outline" size="icon-sm" aria-label="Join call">
              <Video />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
