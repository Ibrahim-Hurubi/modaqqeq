"use client"

import Link from "next/link"
import { Search, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function Footer() {
  const { t, language } = useLanguage()

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/how-it-works", label: t("nav.howItWorks") },
    { href: "/technologies", label: t("nav.technologies") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-600 rounded-full opacity-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl blur-sm opacity-50"></div>
                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl">
                  <Search className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {language === "ar" ? "مدقق" : "Modaqqeq"}
                </span>
                <span className="text-sm text-gray-400 font-medium">Modaqqeq Platform</span>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              {language === "ar"
                ? "منصة ذكاء اصطناعي متطورة لكشف الاحتيال المالي وحماية الأموال في القطاع المؤسسي."
                : "Advanced AI platform for financial fraud detection and fund protection in the institutional sector."}
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span>{t("footer.company")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4 text-blue-400" />
                </div>
                <span>{t("footer.location")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-blue-400" />
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-3 group hover:translate-x-1"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              {t("footer.contactInfo")}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300 font-medium">contact@modaqqeq.sa</span>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300 font-medium">+966 11 123 4567</span>
              </div>
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300 font-medium">{t("footer.address")}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="text-lg font-bold text-white mb-6">{t("footer.followUs")}</h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-700">
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-3xl p-8 border border-blue-600/30 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">
                    {language === "ar" ? "هل تحتاج مساعدة؟" : "Need Help?"}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  {language === "ar"
                    ? "تواصل معنا للحصول على الدعم التقني أو لمعرفة المزيد عن المنصة"
                    : "Contact us for technical support or to learn more about the platform"}
                </p>
              </div>
              <Link href="/contact">
                <Button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-3 h-auto rounded-2xl whitespace-nowrap">
                  <span className="flex items-center gap-3">
                    {language === "ar" ? "تواصل معنا" : "Contact Us"}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-lg font-medium">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
