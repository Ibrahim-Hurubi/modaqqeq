"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Database, Shield, Code, Cloud, Smartphone, Server, Zap, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function TechnologiesPage() {
  const { t, language } = useLanguage()

  const techCategories = [
    {
      title: t("tech.categories.ai"),
      icon: Brain,
      color: "from-blue-500 to-blue-600",
      technologies: [
        {
          name: "Python",
          description:
            language === "ar" ? "لغة البرمجة الأساسية للذكاء الاصطناعي" : "Primary programming language for AI",
          proficiency: 95,
        },
        {
          name: "TensorFlow",
          description: language === "ar" ? "مكتبة التعلم العميق المتقدمة" : "Advanced deep learning library",
          proficiency: 90,
        },
        {
          name: "Scikit-learn",
          description: language === "ar" ? "أدوات التعلم الآلي والتحليل" : "Machine learning and analysis tools",
          proficiency: 92,
        },
        {
          name: "PyTorch",
          description: language === "ar" ? "إطار عمل للشبكات العصبية" : "Neural network framework",
          proficiency: 88,
        },
      ],
    },
    {
      title: t("tech.categories.database"),
      icon: Database,
      color: "from-green-500 to-green-600",
      technologies: [
        {
          name: "PostgreSQL",
          description: language === "ar" ? "قاعدة بيانات علائقية متقدمة" : "Advanced relational database",
          proficiency: 93,
        },
        {
          name: "MongoDB",
          description: language === "ar" ? "قاعدة بيانات غير علائقية مرنة" : "Flexible non-relational database",
          proficiency: 87,
        },
        {
          name: "Redis",
          description: language === "ar" ? "تخزين مؤقت عالي الأداء" : "High-performance caching",
          proficiency: 85,
        },
        {
          name: "Elasticsearch",
          description: language === "ar" ? "محرك البحث والتحليل" : "Search and analytics engine",
          proficiency: 82,
        },
      ],
    },
    {
      title: t("tech.categories.security"),
      icon: Shield,
      color: "from-red-500 to-red-600",
      technologies: [
        {
          name: "JWT Authentication",
          description: language === "ar" ? "نظام مصادقة آمن" : "Secure authentication system",
          proficiency: 94,
        },
        {
          name: "OAuth 2.0",
          description: language === "ar" ? "بروتوكول التفويض المعياري" : "Standard authorization protocol",
          proficiency: 89,
        },
        {
          name: "SSL/TLS",
          description: language === "ar" ? "تشفير البيانات المنقولة" : "Data in transit encryption",
          proficiency: 96,
        },
        {
          name: "AES Encryption",
          description: language === "ar" ? "تشفير البيانات المخزنة" : "Stored data encryption",
          proficiency: 91,
        },
      ],
    },
    {
      title: t("tech.categories.frontend"),
      icon: Code,
      color: "from-purple-500 to-purple-600",
      technologies: [
        {
          name: "React",
          description: language === "ar" ? "مكتبة بناء واجهات المستخدم" : "UI building library",
          proficiency: 95,
        },
        {
          name: "Next.js",
          description: language === "ar" ? "إطار عمل React للإنتاج" : "React production framework",
          proficiency: 92,
        },
        {
          name: "TypeScript",
          description: language === "ar" ? "JavaScript مع الأنواع الثابتة" : "JavaScript with static types",
          proficiency: 90,
        },
        {
          name: "Tailwind CSS",
          description: language === "ar" ? "إطار عمل CSS المرن" : "Flexible CSS framework",
          proficiency: 94,
        },
      ],
    },
    {
      title: t("tech.categories.cloud"),
      icon: Cloud,
      color: "from-orange-500 to-orange-600",
      technologies: [
        {
          name: "AWS",
          description: language === "ar" ? "خدمات أمازون السحابية" : "Amazon Web Services",
          proficiency: 88,
        },
        {
          name: "Docker",
          description: language === "ar" ? "حاويات التطبيقات" : "Application containers",
          proficiency: 86,
        },
        {
          name: "Kubernetes",
          description: language === "ar" ? "إدارة الحاويات" : "Container orchestration",
          proficiency: 83,
        },
        {
          name: "Nginx",
          description: language === "ar" ? "خادم الويب وموازن الأحمال" : "Web server and load balancer",
          proficiency: 89,
        },
      ],
    },
    {
      title: t("tech.categories.api"),
      icon: Server,
      color: "from-teal-500 to-teal-600",
      technologies: [
        {
          name: "Node.js",
          description: language === "ar" ? "بيئة تشغيل JavaScript" : "JavaScript runtime",
          proficiency: 91,
        },
        {
          name: "Express.js",
          description: language === "ar" ? "إطار عمل خادم الويب" : "Web server framework",
          proficiency: 93,
        },
        {
          name: "GraphQL",
          description: language === "ar" ? "لغة استعلام البيانات" : "Data query language",
          proficiency: 85,
        },
        {
          name: "REST API",
          description: language === "ar" ? "واجهات برمجة تطبيقات RESTful" : "RESTful application interfaces",
          proficiency: 95,
        },
      ],
    },
  ]

  const integrations = [
    {
      name: t("tech.integrations.hrsd"),
      description: t("tech.integrations.hrsd.desc"),
      status: t("tech.integrations.status"),
    },
    {
      name: t("tech.integrations.absher"),
      description: t("tech.integrations.absher.desc"),
      status: t("tech.integrations.status"),
    },
    {
      name: t("tech.integrations.sadad"),
      description: t("tech.integrations.sadad.desc"),
      status: t("tech.integrations.status"),
    },
    {
      name: t("tech.integrations.qiwa"),
      description: t("tech.integrations.qiwa.desc"),
      status: t("tech.integrations.status"),
    },
  ]

  return (
    <div className="min-h-screen py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <Code className="w-4 h-4 ml-2" />
            {t("tech.badge.advanced")}
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("tech.title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("tech.subtitle")}
          </p>
        </div>

        {/* Technology Categories */}
        <div className="space-y-12 mb-20">
          {techCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <Card
                    key={techIndex}
                    className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md dark:bg-gray-800 dark:border-gray-700"
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-between">
                        {tech.name}
                        <Badge variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                          {tech.proficiency}%
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                        {tech.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Progress value={tech.proficiency} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* System Architecture */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t("tech.architecture")}
          </h2>
          <Card className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {t("tech.architecture.frontend")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{t("tech.architecture.frontend.desc")}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {t("tech.architecture.backend")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{t("tech.architecture.backend.desc")}</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("tech.architecture.ai")}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{t("tech.architecture.ai.desc")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integrations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t("tech.integrations")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                      {integration.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    >
                      {integration.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {integration.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{t("tech.integrations.active")}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t("tech.performance")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</CardTitle>
                <CardDescription className="dark:text-gray-400">{t("tech.performance.uptime")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">256-bit</CardTitle>
                <CardDescription className="dark:text-gray-400">{t("tech.performance.encryption")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">1M+</CardTitle>
                <CardDescription className="dark:text-gray-400">{t("tech.performance.transactions")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">24/7</CardTitle>
                <CardDescription className="dark:text-gray-400">{t("tech.performance.support")}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
