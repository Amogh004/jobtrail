import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { KanbanPreview } from "@/components/dashboard/kanban-preview"
import { UpcomingInterviews } from "@/components/dashboard/upcoming-interviews"
import { RemindersCard } from "@/components/dashboard/reminders-card"
import { RecruiterEmails } from "@/components/dashboard/recruiter-emails"
import { ActivityTimeline } from "@/components/dashboard/activity-timeline"
import { Download } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Good morning, Alex
            </h1>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              June
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Here&apos;s what&apos;s moving in your job search today.
          </p>
        </div>
        <Button variant="outline" size="sm" className="w-fit">
          <Download data-icon="inline-start" />
          Export report
        </Button>
      </div>

      <KpiCards />

      <KanbanPreview />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <UpcomingInterviews />
          <RecruiterEmails />
        </div>
        <div className="flex flex-col gap-6">
          <RemindersCard />
          <ActivityTimeline />
        </div>
      </div>
    </div>
  )
}
