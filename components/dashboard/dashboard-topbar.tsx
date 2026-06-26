"use client"

import { Search, Bell, Plus, Check } from "lucide-react"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const notifications = [
  {
    id: "n1",
    title: "Linear scheduled your final round",
    time: "10 min ago",
    unread: true,
  },
  {
    id: "n2",
    title: "New email from Marcus at Notion",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: "n3",
    title: "Reminder: send thank-you note",
    time: "3 hours ago",
    unread: true,
  },
  {
    id: "n4",
    title: "Vercel viewed your application",
    time: "Yesterday",
    unread: false,
  },
]

export function DashboardTopbar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/80 px-4 backdrop-blur-md md:px-6">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-1 h-5" />

      <div className="relative hidden flex-1 sm:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search applications, companies, recruiters…"
          className="h-9 w-full max-w-md rounded-lg border border-border bg-secondary/40 pl-9 pr-16 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:bg-secondary"
          aria-label="Search"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] text-muted-foreground md:inline-flex">
          ⌘K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon-sm" className="sm:hidden" aria-label="Search">
          <Search />
        </Button>

        <Button size="sm" className="hidden sm:inline-flex">
          <Plus data-icon="inline-start" />
          Add application
        </Button>

        <Popover>
          <PopoverTrigger
            render={
              <Button variant="ghost" size="icon-sm" aria-label="Notifications" />
            }
          >
            <span className="relative">
              <Bell />
              <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-primary ring-2 ring-background" />
            </span>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-80 p-0">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="text-sm font-medium">Notifications</p>
              <Badge variant="secondary" className="text-xs">
                3 new
              </Badge>
            </div>
            <div className="flex flex-col">
              {notifications.map((n) => (
                <button
                  key={n.id}
                  className="flex items-start gap-3 border-b border-border px-4 py-3 text-left transition-colors last:border-0 hover:bg-accent"
                >
                  <span
                    className={
                      n.unread
                        ? "mt-1.5 size-2 shrink-0 rounded-full bg-primary"
                        : "mt-1.5 size-2 shrink-0 rounded-full bg-transparent"
                    }
                  />
                  <span className="flex-1">
                    <span className="block text-sm leading-snug">{n.title}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {n.time}
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="border-t border-border p-2">
              <Button variant="ghost" size="sm" className="w-full justify-center">
                <Check data-icon="inline-start" />
                Mark all as read
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Avatar className="size-8 rounded-md">
          <AvatarFallback className="rounded-md bg-primary/15 text-xs text-primary">
            AR
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
