import { MapPin, Plus, ArrowRight } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  applications,
  kanbanColumns,
  type Application,
} from "@/lib/dashboard-data"

function ApplicationCard({ app }: { app: Application }) {
  return (
    <div className="group cursor-grab rounded-lg border border-border bg-background p-3 transition-colors hover:border-ring/60 active:cursor-grabbing">
      <div className="flex items-start gap-2.5">
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-md text-xs font-semibold text-background",
            app.logoColor,
          )}
          aria-hidden="true"
        >
          {app.company.slice(0, 2)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium leading-tight">{app.role}</p>
          <p className="truncate text-xs text-muted-foreground">{app.company}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-1.5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3" />
          {app.location}
        </span>
        <div className="flex items-center justify-between">
          <span className="font-medium text-foreground/80">{app.salary}</span>
          <span>{app.updated}</span>
        </div>
      </div>
    </div>
  )
}

export function KanbanPreview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle>Application pipeline</CardTitle>
          <p className="text-sm text-muted-foreground">
            Drag candidates across stages as things progress.
          </p>
        </div>
        <Button variant="outline" size="sm">
          View board
          <ArrowRight data-icon="inline-end" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kanbanColumns.map((col) => {
            const items = applications.filter((a) => a.stage === col.stage)
            return (
              <div key={col.stage} className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={cn("size-2 rounded-full", col.accent)} />
                    <span className="text-sm font-medium">{col.stage}</span>
                    <span className="text-xs text-muted-foreground">
                      {items.length}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label={`Add to ${col.stage}`}
                  >
                    <Plus />
                  </Button>
                </div>
                <div className="flex flex-col gap-2.5 rounded-xl bg-secondary/40 p-2.5">
                  {items.length > 0 ? (
                    items.map((app) => <ApplicationCard key={app.id} app={app} />)
                  ) : (
                    <p className="px-2 py-6 text-center text-xs text-muted-foreground">
                      Nothing here yet
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
