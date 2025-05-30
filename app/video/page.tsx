"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, Star, ArrowLeft, Download, Share } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export default function VideoPage() {
  const { t } = useLanguage()

  const videoFeatures = [
    {
      icon: Play,
      title: t("video.features.interactive.title"),
      description: t("video.features.interactive.description"),
      color: "bg-blue-500",
    },
    {
      icon: Clock,
      title: t("video.features.duration.title"),
      description: t("video.features.duration.description"),
      color: "bg-green-500",
    },
    {
      icon: Users,
      title: t("video.features.accessibility.title"),
      description: t("video.features.accessibility.description"),
      color: "bg-purple-500",
    },
    {
      icon: Star,
      title: t("video.features.quality.title"),
      description: t("video.features.quality.description"),
      color: "bg-orange-500",
    },
  ]

  const videoTopics = [
    t("video.topics.introduction"),
    t("video.topics.login"),
    t("video.topics.dashboard"),
    t("video.topics.analysis"),
    t("video.topics.reports"),
    t("video.topics.security"),
    t("video.topics.integration"),
    t("video.topics.tips"),
  ]

  return (
    <div className="min-h-screen py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" className="mb-4 dark:border-gray-600 dark:text-gray-300">
              <ArrowLeft className="w-4 h-4 ml-2" />
              {t("video.backHome")}
            </Button>
          </Link>

          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              <Play className="w-4 h-4 ml-2" />
              {t("video.badge.explanatory")}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("video.title")}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("video.subtitle")}
            </p>
          </div>
        </div>

        {/* Video Player Section */}
        <div className="mb-16">
          <Card className="border-0 shadow-2xl overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                {/* Placeholder for video */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-12 h-12 text-white ml-2" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t("video.coming")}</h3>
                  <p className="text-blue-100 max-w-md mx-auto leading-relaxed">{t("video.description")}</p>
                </div>

                {/* Video overlay controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Download className="w-4 h-4 ml-2" />
                      {t("video.download")}
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Share className="w-4 h-4 ml-2" />
                      {t("video.share")}
                    </Button>
                  </div>
                  <div className="text-white text-sm">{t("video.durationLabel")}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t("video.features.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoFeatures.map((feature, index) => (
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

        {/* Video Topics */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("video.topics.title")}
              </CardTitle>
              <CardDescription className="dark:text-gray-300">{t("video.topics.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {videoTopics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{topic}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {/* Quick Start */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("video.quickStart.title")}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">{t("video.quickStart.description")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/login">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">{t("video.quickStart.login")}</Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    className="w-full dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    {t("video.quickStart.explore")}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("video.helpSupport.title")}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">{t("video.helpSupport.description")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    {t("video.helpSupport.contact")}
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button
                    variant="outline"
                    className="w-full dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    {t("video.helpSupport.howItWorks")}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10,000+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{t("video.statistics.views")}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
