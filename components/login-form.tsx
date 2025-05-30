"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface LoginFormProps {
  onSuccess?: () => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const { t } = useLanguage()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    // Basic validation
    const newErrors: { [key: string]: string } = {}

    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح"
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة"
    } else if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    // Simulate login process
    
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setIsLoading(false);

      if (!response.ok) {
        setErrors({ password: result.message || "فشل في تسجيل الدخول" });
        return;
      }

      localStorage.setItem("token", result.token); // Simulated
      if (onSuccess) onSuccess();
      router.push("/dashboard");
    } catch (err) {
      setIsLoading(false);
      setErrors({ password: "حدث خطأ أثناء الاتصال بالخادم" });
    }
    
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {t("login.email")}
        </Label>
        <div className="relative">
          <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="admin@modaqqeq.sa"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`pr-12 h-12 rounded-xl border-2 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 ${
              errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"
            }`}
            disabled={isLoading}
          />
        </div>
        {errors.email && (
          <Alert variant="destructive" className="py-2 rounded-xl">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">{errors.email}</AlertDescription>
          </Alert>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {t("login.password")}
        </Label>
        <div className="relative">
          <Lock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className={`pr-12 pl-12 h-12 rounded-xl border-2 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 ${
              errors.password ? "border-red-500" : "border-gray-200 dark:border-gray-700"
            }`}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-3 top-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        {errors.password && (
          <Alert variant="destructive" className="py-2 rounded-xl">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">{errors.password}</AlertDescription>
          </Alert>
        )}
      </div>

      {/* Remember Me */}
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <Checkbox
          id="remember"
          checked={formData.rememberMe}
          onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
          className="rounded-md"
        />
        <Label htmlFor="remember" className="text-sm cursor-pointer font-medium text-gray-700 dark:text-gray-300">
          {t("login.rememberMe")}
        </Label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            {t("login.loggingIn")}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {t("login.submit")}
            <ArrowRight className="w-5 h-5" />
          </div>
        )}
      </Button>

      {/* Demo Credentials */}
      <Alert className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-800 rounded-xl mt-4">
        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <AlertDescription className="text-blue-800 dark:text-blue-300 font-medium">
          <strong>{t("login.demoCredentials")}:</strong>
          <br />
          البريد: admin@modaqqeq.sa
          <br />
          كلمة المرور: admin123
        </AlertDescription>
      </Alert>
    </form>
  )
}
