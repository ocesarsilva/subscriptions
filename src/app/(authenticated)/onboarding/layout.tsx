export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      {children}
    </div>
  )
}
