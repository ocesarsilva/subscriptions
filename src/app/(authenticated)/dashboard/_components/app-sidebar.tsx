"use client"

import { Command, HandCoins, Home, LifeBuoy, Send, Users } from "lucide-react"
import type * as React from "react"

import { NavMain } from "@/app/(authenticated)/dashboard/_components/nav-main"

import { NavSecondary } from "@/app/(authenticated)/dashboard/_components/nav-secondary"
import { NavUser } from "@/app/(authenticated)/dashboard/_components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMarketing } from "./nav-marketing"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatar.jpg",
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
      icon: HandCoins,
    },
    {
      title: "Membros",
      url: "#",
      icon: Users,
    },
  ],
  navMarketing: [
    {
      title: "Design",
      url: "#",
      icon: Home,
    },
    {
      title: "Afiliados",
      url: "#",
      icon: HandCoins,
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
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMarketing items={data.navMarketing} />

        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
