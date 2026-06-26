import {
  BriefcaseBusiness,
  CalendarClock,
  Trophy,
  Mail,
  StickyNote,
  type LucideIcon,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { activities, type Activity } from "@/lib/dashboard-data"

const config: Record<Activity["type"], { icon: LucideIcon; color: string }> = {
  application: { icon: BriefcaseBusiness, color: "bg-chart-2/15 text-chart-2" },
  interview: { icon: CalendarClock, color: "bg-chart-4/15 text-chart-4" },
  offer: { icon: Trophy, color: "bg-chart-3/15 text-chart-3" },
  email: { icon: Mail, color: "bg-chart-1/15 text-chart-1" },
  note: { icon: StickyNote, color: "bg-muted text-muted-foreground" },
}

export function ActivityTimeline() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Activity</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ol className="relative flex flex-col">
          {activities.map((item, i) => {
            const { icon: Icon, color } = config[item.type]
            const isLast = i === activities.length - 1
            return (
              <li key={item.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full",
                      color,
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                  {!isLast && <span className="w-px flex-1 bg-border" />}
                </div>
                <div className={cn("min-w-0 flex-1", !isLast && "pb-4")}>
                  <p className="text-sm leading-tight">{item.text}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {item.meta}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground/70">
                    {item.time}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </CardContent>
    </Card>
  )
}
