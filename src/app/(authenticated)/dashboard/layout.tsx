import { AppSidebar } from "@/app/(authenticated)/dashboard/_components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function Layout({ children }: React.PropsWithChildren) {
  const [session, organization, listOrganizations] = await Promise.all([
    auth.api.getSession({
      headers: await headers(),
    }),
    auth.api.getFullOrganization({
      headers: await headers(),
    }),
    auth.api.listOrganizations({
      headers: await headers(),
    }),
  ])

  if (!session) {
    throw redirect("/login")
  }

  if (!listOrganizations.length) {
    throw redirect("/onboarding")
  }

  if (!session.session.activeOrganizationId) {
    await auth.api.setActiveOrganization({
      headers: await headers(),
      body: {
        organizationId: listOrganizations[0].id,
      },
    })
  }

  console.log({ organization })

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
