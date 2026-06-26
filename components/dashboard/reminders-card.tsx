import { Plus } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { reminders } from "@/lib/dashboard-data"

const priorityStyles: Record<string, string> = {
  high: "bg-destructive/15 text-destructive",
  medium: "bg-chart-4/15 text-chart-4",
  low: "bg-muted text-muted-foreground",
}

export function RemindersCard() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <CardTitle>Reminders</CardTitle>
        <Button variant="ghost" size="icon-sm" aria-label="Add reminder">
          <Plus />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-2.5">
        {reminders.map((r) => (
          <div
            key={r.id}
            className="flex items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-accent"
          >
            <button
              role="checkbox"
              aria-checked={r.done}
              aria-label={r.done ? "Mark incomplete" : "Mark complete"}
              className={cn(
                "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[5px] border transition-colors",
                r.done
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground/40",
              )}
            >
              {r.done ? (
                <svg viewBox="0 0 12 12" className="size-3" fill="none">
                  <path
                    d="m2.5 6 2.5 2.5 4.5-5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </button>
            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  "text-sm font-medium leading-tight",
                  r.done && "text-muted-foreground line-through",
                )}
              >
                {r.title}
              </p>
              <p className="truncate text-xs text-muted-foreground">{r.context}</p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <Badge
                variant="secondary"
                className={cn("text-[10px] capitalize", priorityStyles[r.priority])}
              >
                {r.priority}
              </Badge>
              <span className="text-xs text-muted-foreground">{r.due}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
