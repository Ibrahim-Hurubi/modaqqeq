"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Menu, Globe, Search, Sun, Moon } from "lucide-react"
import { useLanguage } from "./language-provider"
import { LoginForm } from "./login-form"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, theme, toggleTheme, t } = useLanguage()

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/how-it-works", label: t("nav.howItWorks") },
    { href: "/video", label: t("nav.video") },
    { href: "/technologies", label: t("nav.technologies") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "bg-white/95 supports-[backdrop-filter]:bg-white/90 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/90 shadow-lg border-gray-200/50 dark:border-gray-700/50"
            : "bg-white/80 dark:bg-gray-900/80 border-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Search className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  مدقق
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Modaqqeq</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:text-blue-600 dark:hover:text-blue-400 ${
                    pathname === item.href
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hidden md:flex rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                title={t("theme.toggle")}
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </Button>

              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="hidden md:flex items-center space-x-2 rtl:space-x-reverse rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{language === "ar" ? "EN" : "ع"}</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setLoginModalOpen(true)}
                className="hidden md:flex border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                {t("nav.login")}
              </Button>

              <Link href="/dashboard">
                <Button
                  size="sm"
                  className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {t("nav.dashboard")}
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden rounded-xl">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side={language === "ar" ? "right" : "left"} className="w-80 dark:bg-gray-900">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          pathname === item.href
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}

                    <div className="pt-6 border-t dark:border-gray-700 space-y-3">
                      <Button variant="ghost" onClick={toggleTheme} className="w-full justify-start rounded-xl">
                        {theme === "light" ? <Moon className="w-5 h-5 ml-3" /> : <Sun className="w-5 h-5 ml-3" />}
                        {theme === "light" ? t("theme.dark") : t("theme.light")}
                      </Button>

                      <Button variant="ghost" onClick={toggleLanguage} className="w-full justify-start rounded-xl">
                        <Globe className="w-5 h-5 ml-3" />
                        {language === "ar" ? "English" : "العربية"}
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full rounded-xl"
                        onClick={() => {
                          setIsOpen(false)
                          setLoginModalOpen(true)
                        }}
                      >
                        {t("nav.login")}
                      </Button>

                      <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl">
                          {t("nav.dashboard")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <Dialog open={loginModalOpen} onOpenChange={setLoginModalOpen}>
        <DialogContent className="sm:max-w-lg max-w-[95vw] rounded-3xl border-0 shadow-2xl p-0 overflow-hidden">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-center">
            <DialogTitle className="text-2xl font-bold text-white mb-2">{t("login.title")}</DialogTitle>
            <p className="text-blue-100">{t("login.subtitle")}</p>
          </div>
          <div className="p-6">
            <LoginForm onSuccess={() => setLoginModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
