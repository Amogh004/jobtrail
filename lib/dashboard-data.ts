import type { LucideIcon } from "lucide-react"
import {
  BriefcaseBusiness,
  CalendarClock,
  Trophy,
  Percent,
} from "lucide-react"

export type Trend = "up" | "down"

export type Kpi = {
  label: string
  value: string
  change: string
  trend: Trend
  hint: string
  icon: LucideIcon
}

export const kpis: Kpi[] = [
  {
    label: "Applications",
    value: "48",
    change: "+12",
    trend: "up",
    hint: "this month",
    icon: BriefcaseBusiness,
  },
  {
    label: "Interviews",
    value: "9",
    change: "+3",
    trend: "up",
    hint: "scheduled",
    icon: CalendarClock,
  },
  {
    label: "Offers",
    value: "2",
    change: "+1",
    trend: "up",
    hint: "in negotiation",
    icon: Trophy,
  },
  {
    label: "Response Rate",
    value: "34%",
    change: "-2%",
    trend: "down",
    hint: "vs last month",
    icon: Percent,
  },
]

export type ApplicationStage =
  | "Wishlist"
  | "Applied"
  | "Interview"
  | "Offer"

export type Application = {
  id: string
  company: string
  role: string
  location: string
  salary: string
  logoColor: string
  stage: ApplicationStage
  updated: string
}

export const kanbanColumns: {
  stage: ApplicationStage
  accent: string
}[] = [
  { stage: "Wishlist", accent: "bg-muted-foreground" },
  { stage: "Applied", accent: "bg-chart-2" },
  { stage: "Interview", accent: "bg-chart-4" },
  { stage: "Offer", accent: "bg-chart-3" },
]

export const applications: Application[] = [
  {
    id: "a1",
    company: "Linear",
    role: "Senior Product Designer",
    location: "Remote",
    salary: "$160k–185k",
    logoColor: "bg-chart-1",
    stage: "Interview",
    updated: "2h ago",
  },
  {
    id: "a2",
    company: "Vercel",
    role: "Frontend Engineer",
    location: "San Francisco, CA",
    salary: "$170k–200k",
    logoColor: "bg-chart-5",
    stage: "Applied",
    updated: "5h ago",
  },
  {
    id: "a3",
    company: "Notion",
    role: "Design Engineer",
    location: "New York, NY",
    salary: "$150k–180k",
    logoColor: "bg-chart-4",
    stage: "Offer",
    updated: "1d ago",
  },
  {
    id: "a4",
    company: "Stripe",
    role: "Product Manager",
    location: "Remote",
    salary: "$180k–210k",
    logoColor: "bg-chart-2",
    stage: "Wishlist",
    updated: "2d ago",
  },
  {
    id: "a5",
    company: "Figma",
    role: "UX Researcher",
    location: "London, UK",
    salary: "£90k–110k",
    logoColor: "bg-chart-3",
    stage: "Interview",
    updated: "3d ago",
  },
  {
    id: "a6",
    company: "Ramp",
    role: "Growth Marketer",
    location: "Remote",
    salary: "$120k–145k",
    logoColor: "bg-chart-1",
    stage: "Applied",
    updated: "4d ago",
  },
]

export type Interview = {
  id: string
  company: string
  role: string
  type: string
  date: string
  time: string
  initials: string
  color: string
}

export const interviews: Interview[] = [
  {
    id: "i1",
    company: "Linear",
    role: "Senior Product Designer",
    type: "Final round · Panel",
    date: "Tomorrow",
    time: "10:00 AM",
    initials: "LN",
    color: "bg-chart-1",
  },
  {
    id: "i2",
    company: "Figma",
    role: "UX Researcher",
    type: "Technical screen",
    date: "Thu, Jun 28",
    time: "2:30 PM",
    initials: "FG",
    color: "bg-chart-3",
  },
  {
    id: "i3",
    company: "Vercel",
    role: "Frontend Engineer",
    type: "Hiring manager",
    date: "Fri, Jun 29",
    time: "11:15 AM",
    initials: "VC",
    color: "bg-chart-5",
  },
]

export type Reminder = {
  id: string
  title: string
  context: string
  due: string
  priority: "high" | "medium" | "low"
  done: boolean
}

export const reminders: Reminder[] = [
  {
    id: "r1",
    title: "Send thank-you note",
    context: "Notion · Design Engineer",
    due: "Today",
    priority: "high",
    done: false,
  },
  {
    id: "r2",
    title: "Prepare portfolio walkthrough",
    context: "Linear · Final round",
    due: "Tomorrow",
    priority: "high",
    done: false,
  },
  {
    id: "r3",
    title: "Follow up with recruiter",
    context: "Stripe · Product Manager",
    due: "Jun 27",
    priority: "medium",
    done: false,
  },
  {
    id: "r4",
    title: "Update resume — v3 metrics",
    context: "General",
    due: "Jun 30",
    priority: "low",
    done: true,
  },
]

export type RecruiterEmail = {
  id: string
  name: string
  company: string
  subject: string
  preview: string
  time: string
  initials: string
  color: string
  unread: boolean
}

export const recruiterEmails: RecruiterEmail[] = [
  {
    id: "e1",
    name: "Sarah Chen",
    company: "Linear",
    subject: "Final round scheduling",
    preview: "Great speaking with you! Let's lock in the panel for...",
    time: "9:42 AM",
    initials: "SC",
    color: "bg-chart-1",
    unread: true,
  },
  {
    id: "e2",
    name: "Marcus Webb",
    company: "Notion",
    subject: "Offer details inside",
    preview: "We're thrilled to move forward. Attached is the full...",
    time: "Yesterday",
    initials: "MW",
    color: "bg-chart-4",
    unread: true,
  },
  {
    id: "e3",
    name: "Priya Nair",
    company: "Vercel",
    subject: "Re: Frontend Engineer role",
    preview: "Thanks for applying! I'd love to set up a quick intro...",
    time: "Mon",
    initials: "PN",
    color: "bg-chart-5",
    unread: false,
  },
]

export type Activity = {
  id: string
  text: string
  meta: string
  time: string
  type: "application" | "interview" | "offer" | "email" | "note"
}

export const activities: Activity[] = [
  {
    id: "t1",
    text: "Moved Notion to Offer",
    meta: "Design Engineer",
    time: "2h ago",
    type: "offer",
  },
  {
    id: "t2",
    text: "Interview scheduled with Linear",
    meta: "Final round · Tomorrow 10:00 AM",
    time: "4h ago",
    type: "interview",
  },
  {
    id: "t3",
    text: "Reply from Sarah Chen",
    meta: "Linear · Final round scheduling",
    time: "Today",
    type: "email",
  },
  {
    id: "t4",
    text: "Applied to Vercel",
    meta: "Frontend Engineer",
    time: "5h ago",
    type: "application",
  },
  {
    id: "t5",
    text: "Added note to Stripe",
    meta: "Product Manager · Wishlist",
    time: "1d ago",
    type: "note",
  },
]
