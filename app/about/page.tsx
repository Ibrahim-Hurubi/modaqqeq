"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Shield, Lightbulb, Award, Users, CheckCircle, Globe, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Shield,
      title: t("about.values.integrity.title"),
      description: t("about.values.integrity.desc"),
      color: "bg-blue-500",
    },
    {
      icon: Lightbulb,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.desc"),
      color: "bg-green-500",
    },
    {
      icon: Award,
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.desc"),
      color: "bg-purple-500",
    },
    {
      icon: Users,
      title: t("about.values.collaboration.title"),
      description: t("about.values.collaboration.desc"),
      color: "bg-orange-500",
    },
  ]

  const capabilities = [
    {
      icon: Zap,
      title: t("about.capabilities.instantProcessing.title"),
      description: t("about.capabilities.instantProcessing.desc"),
      stat: t("about.capabilities.instantProcessing.stat"),
      color: "bg-blue-500",
    },
    {
      icon: Shield,
      title: t("about.capabilities.advancedSecurity.title"),
      description: t("about.capabilities.advancedSecurity.desc"),
      stat: t("about.capabilities.advancedSecurity.stat"),
      color: "bg-green-500",
    },
    {
      icon: Globe,
      title: t("about.capabilities.comprehensiveCoverage.title"),
      description: t("about.capabilities.comprehensiveCoverage.desc"),
      stat: t("about.capabilities.comprehensiveCoverage.stat"),
      color: "bg-purple-500",
    },
    {
      icon: CheckCircle,
      title: t("about.capabilities.highAccuracy.title"),
      description: t("about.capabilities.highAccuracy.desc"),
      stat: t("about.capabilities.highAccuracy.stat"),
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <Shield className="w-4 h-4 ml-2" />
            {t("about.badge.platform")}
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("about.title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Main Description */}
        <div className="mb-20">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">مدقق | Modaqqeq</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                {t("about.description")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="group hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("about.vision.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t("about.vision.desc")}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("about.mission.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t("about.mission.desc")}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("about.values.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {t("about.values.desc")}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t("about.coreValues")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader className="text-center">
                  <div
                    className={`mx-auto mb-4 w-12 h-12 rounded-xl ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Capabilities */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t("about.platformCapabilities")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader>
                  <div
                    className={`mx-auto mb-4 w-16 h-16 rounded-2xl ${capability.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{capability.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{capability.stat}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
