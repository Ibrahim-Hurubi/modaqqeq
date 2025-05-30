"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Database,
  Brain,
  AlertTriangle,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Eye,
  FileText,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export default function HowItWorksPage() {
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      icon: Database,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.desc"),
      details: [
        "تجميع البيانات من مصادر متعددة",
        "تشفير وحماية البيانات",
        "التحقق من صحة البيانات",
        "تنظيف وتحضير البيانات",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "02",
      icon: Brain,
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.desc"),
      details: [
        "تطبيق خوارزميات التعلم الآلي",
        "تحليل الأنماط والسلوكيات",
        "كشف الشذوذ والانحرافات",
        "التحقق من النتائج",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      number: "03",
      icon: AlertTriangle,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.desc"),
      details: ["تحديد مستوى المخاطر", "تصنيف الحالات المشبوهة", "إرسال التنبيهات الفورية", "توثيق النتائج"],
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "04",
      icon: BarChart3,
      title: t("howItWorks.step4.title"),
      description: t("howItWorks.step4.desc"),
      details: ["إنشاء التقارير التفصيلية", "تقديم التوصيات", "متابعة الإجراءات", "تحديث قواعد البيانات"],
      color: "from-purple-500 to-purple-600",
    },
  ]

  const features = [
    {
      icon: Zap,
      title: t("howItWorks.features.speed.title"),
      description: t("howItWorks.features.speed.desc"),
      color: "bg-blue-500",
    },
    {
      icon: Shield,
      title: t("howItWorks.features.security.title"),
      description: t("howItWorks.features.security.desc"),
      color: "bg-green-500",
    },
    {
      icon: Eye,
      title: t("howItWorks.features.monitoring.title"),
      description: t("howItWorks.features.monitoring.desc"),
      color: "bg-purple-500",
    },
    {
      icon: FileText,
      title: t("howItWorks.features.reports.title"),
      description: t("howItWorks.features.reports.desc"),
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <Brain className="w-4 h-4 ml-2" />
            {t("howItWorks.badge.system")}
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("howItWorks.title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2 text-gray-500 dark:text-gray-400">
                            {t("howItWorks.step.phase")} {step.number}
                          </Badge>
                          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                            {step.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-shrink-0">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t("howItWorks.features.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader>
                  <div
                    className={`mx-auto mb-4 w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t("howItWorks.cta.title")}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                {t("howItWorks.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                    {t("howItWorks.cta.start")}
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-3 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    {t("howItWorks.cta.contact")}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
