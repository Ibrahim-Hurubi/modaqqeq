"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  Shield,
  BarChart3,
  Clock,
  Users,
  TrendingUp,
  Eye,
  FileText,
  Play,
  ArrowLeft,
  ArrowRight,
  Activity,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function HomePage() {
  const { language, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const stats = [
    {
      value: "2.5M+",
      label: t("home.stats.analyzed"),
      icon: BarChart3,
    },
    {
      value: "99.8%",
      label: t("home.stats.accuracy"),
      icon: TrendingUp,
    },
    {
      value: "150+",
      label: t("home.stats.organizations"),
      icon: Users,
    },
    {
      value: "< 1s",
      label: t("home.stats.responseTime"),
      icon: Clock,
    },
  ]

  const features = [
    {
      icon: Brain,
      title: t("home.features.ai.title"),
      description: t("home.features.ai.desc"),
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Eye,
      title: t("home.features.realtime.title"),
      description: t("home.features.realtime.desc"),
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: FileText,
      title: t("home.features.reports.title"),
      description: t("home.features.reports.desc"),
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Shield,
      title: t("home.features.security.title"),
      description: t("home.features.security.desc"),
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  const dashboardFeatures = [
    {
      icon: Activity,
      title: t("home.dashboard.overview.title"),
      description: t("home.dashboard.overview.desc"),
    },
    {
      icon: BarChart3,
      title: t("home.dashboard.analytics.title"),
      description: t("home.dashboard.analytics.desc"),
    },
    {
      icon: Eye,
      title: t("home.dashboard.monitoring.title"),
      description: t("home.dashboard.monitoring.desc"),
    },
    {
      icon: FileText,
      title: t("home.dashboard.reports.title"),
      description: t("home.dashboard.reports.desc"),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-teal-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-5xl mx-auto">
            <Badge
              variant="outline"
              className={`mb-8 px-6 py-2 text-lg border-blue-200 bg-blue-50/80 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("home.badge.platform")}
            </Badge>

            <h1
  className={`text-5xl md:text-7xl font-bold mb-8 text-balance max-w-4xl mx-auto text-blue-900 dark:text-white leading-tight ${
    language === "ar" ? "font-arabic" : ""
  }`}
>
  {t("home.hero.title")}
</h1>

            <p
              className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("home.hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {t("home.hero.cta")}
                  {language === "ar" ? <ArrowLeft className="w-5 h-5 mr-2" /> : <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
              </Link>

              <Link href="/video">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {t("home.hero.watchVideo")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className={`text-gray-600 dark:text-gray-300 ${language === "ar" ? "font-arabic" : ""}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2
              className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("home.features.title")}
            </h2>
            <p
              className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("home.features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`text-xl font-bold text-gray-900 dark:text-white mb-4 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("home.dashboard.title")}
            </h2>
            <p
              className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("home.dashboard.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold text-gray-900 dark:text-white mb-2 ${
                        language === "ar" ? "font-arabic" : ""
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-300 ${language === "ar" ? "font-arabic" : ""}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-8">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    {t("home.dashboard.explore")}
                    {language === "ar" ? (
                      <ArrowLeft className="w-5 h-5 mr-2" />
                    ) : (
                      <ArrowRight className="w-5 h-5 ml-2" />
                    )}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                <Image
                  src="/images/dashboard-preview.png"
                  alt="Dashboard Preview"
                  width={600}
                  height={400}
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
