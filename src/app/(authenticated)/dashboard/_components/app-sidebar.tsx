"use client"

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  CreditCard,
  Frame,
  GalleryVerticalEnd,
  Home,
  LifeBuoy,
  Map as MapIcon,
  PieChart,
  Send,
  Settings,
  Settings2,
  SquareTerminal,
  Users,
  Zap,
} from "lucide-react"
import type * as React from "react"

import { NavMain } from "@/app/(authenticated)/dashboard/_components/nav-main"
import { NavProjects } from "@/app/(authenticated)/dashboard/_components/nav-projects"
import { NavSecondary } from "@/app/(authenticated)/dashboard/_components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { OrganizationSwitcher } from "../../../../components/organization-switcher"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Início",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Dinheiro",
      url: "#",
      icon: CreditCard,
    },
    {
      title: "Membros",
      url: "#",
      icon: Users,
    },
    {
      title: "Interaja",
      url: "#",
      icon: Zap,
      items: [
        {
          title: "Desafios",
          url: "#",
        },
        {
          title: "Produtos",
          url: "#",
        },
        {
          title: "Eventos",
          url: "#",
        },
        {
          title: "Feed",
          url: "#",
        },
      ],
    },
    {
      title: "Marketing",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Magic Reach",
          url: "#",
        },
        {
          title: "Promoções",
          url: "#",
        },
        {
          title: "Anúncios pagos",
          url: "#",
        },
        {
          title: "Affiliates",
          url: "#",
        },
      ],
    },
    {
      title: "Gerencie",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Configurações",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Suporte",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <OrganizationSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
