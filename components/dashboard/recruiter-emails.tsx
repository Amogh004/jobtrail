import { ArrowRight } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { recruiterEmails } from "@/lib/dashboard-data"

export function RecruiterEmails() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <CardTitle>Recruiter inbox</CardTitle>
        <Button variant="ghost" size="sm">
          Open
          <ArrowRight data-icon="inline-end" />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-1">
        {recruiterEmails.map((email) => (
          <button
            key={email.id}
            className="flex items-start gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-accent"
          >
            <span
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-background",
                email.color,
              )}
              aria-hidden="true"
            >
              {email.initials}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p
                  className={cn(
                    "truncate text-sm",
                    email.unread ? "font-semibold" : "font-medium",
                  )}
                >
                  {email.name}
                  <span className="font-normal text-muted-foreground">
                    {" "}
                    · {email.company}
                  </span>
                </p>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {email.time}
                </span>
              </div>
              <p className="truncate text-sm text-foreground/80">{email.subject}</p>
              <p className="truncate text-xs text-muted-foreground">
                {email.preview}
              </p>
            </div>
            {email.unread ? (
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
            ) : null}
          </button>
        ))}
      </CardContent>
    </Card>
  )
}
