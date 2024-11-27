import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function Page() {
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

  return <div>{JSON.stringify(session)}</div>
}
