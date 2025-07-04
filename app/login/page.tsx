import { Navbar } from "@/components/navbar"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="flex items-center justify-center py-12 px-4">
          <LoginForm />
        </div>
      </main>
    </div>
  )
}
