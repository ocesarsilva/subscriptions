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
import type { Session } from "@/types"
import { useSelectedLayoutSegments } from "next/navigation"
import { NavMarketing } from "./nav-marketing"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  session: Session
}

export function AppSidebar({ session, ...props }: AppSidebarProps) {
  const segments = useSelectedLayoutSegments()

  const data = {
    navMain: [
      {
        title: "Início",
        url: "#",
        icon: Home,
        isActive: segments.length === 0,
      },
      {
        title: "Dinheiro",
        url: "/money",
        icon: HandCoins,
        isActive: segments.includes("money"),
      },
      {
        title: "Membros",
        url: "/members",
        icon: Users,
        isActive: segments.includes("members"),
      },
    ],
    navMarketing: [
      {
        title: "Design",
        url: "/design",
        icon: Home,
        isActive: segments.includes("design"),
      },
      {
        title: "Afiliados",
        url: "/affiliate",
        icon: HandCoins,
        isActive: segments.includes("affiliates"),
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
        <NavUser session={session} />
      </SidebarFooter>
    </Sidebar>
  )
}
