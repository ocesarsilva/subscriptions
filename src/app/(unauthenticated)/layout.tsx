export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  )
}
