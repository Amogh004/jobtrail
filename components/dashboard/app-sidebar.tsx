"use client"

import {
  LayoutDashboard,
  KanbanSquare,
  CalendarClock,
  Bell,
  FileText,
  Mail,
  BarChart3,
  Settings,
  LifeBuoy,
  ChevronsUpDown,
  Sparkles,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Logo } from "@/components/landing/logo"

const mainNav = [
  { title: "Overview", icon: LayoutDashboard, active: true },
  { title: "Pipeline", icon: KanbanSquare, badge: "48" },
  { title: "Interviews", icon: CalendarClock, badge: "9" },
  { title: "Reminders", icon: Bell, badge: "3" },
  { title: "Resumes", icon: FileText },
  { title: "Recruiters", icon: Mail, badge: "2" },
  { title: "Analytics", icon: BarChart3 },
]

const secondaryNav = [
  { title: "Settings", icon: Settings },
  { title: "Support", icon: LifeBuoy },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent"
              render={<a href="/dashboard" />}
            >
              <Logo />
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate font-semibold">JobTrail</span>
                <span className="truncate text-xs text-muted-foreground">
                  Career CRM
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.active}
                    tooltip={item.title}
                    render={<a href="#" />}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                  {item.badge ? (
                    <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title} render={<a href="#" />}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="mb-1 flex items-center gap-2 rounded-md border border-sidebar-border bg-sidebar-accent/40 p-2 group-data-[collapsible=icon]:hidden">
              <Sparkles className="size-4 shrink-0 text-primary" />
              <div className="grid flex-1 leading-tight">
                <span className="truncate text-xs font-medium">Free plan</span>
                <span className="truncate text-xs text-muted-foreground">
                  12 / 50 applications
                </span>
              </div>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent"
                  />
                }
              >
                <Avatar className="size-8 rounded-md">
                  <AvatarFallback className="rounded-md bg-primary/15 text-xs text-primary">
                    AR
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate text-sm font-medium">Alex Rivera</span>
                  <span className="truncate text-xs text-muted-foreground">
                    alex@jobtrail.app
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="end"
                className="w-(--anchor-width) min-w-56"
              >
                <DropdownMenuLabel className="text-muted-foreground text-xs">
                  Signed in as Alex
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Notifications</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
