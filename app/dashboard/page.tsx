"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  AlertTriangle,
  TrendingUp,
  FileText,
  Search,
  Filter,
  Download,
  Eye,
  MoreHorizontal,
  Calendar,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Activity,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export default function DashboardPage() {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const stats = [
    {
      title: t("dashboard.totalCases"),
      value: "1,247",
      change: "+12%",
      changeType: "positive",
      icon: FileText,
      color: "bg-blue-500",
      description: language === "ar" ? "إجمالي الحالات المسجلة هذا الشهر" : "Total cases registered this month",
      details: language === "ar" ? "زيادة 150 حالة عن الشهر الماضي" : "150 cases increase from last month",
    },
    {
      title: t("dashboard.suspiciousCases"),
      value: "89",
      change: "-5%",
      changeType: "negative",
      icon: AlertTriangle,
      color: "bg-red-500",
      description: language === "ar" ? "حالات تتطلب تدخل فوري" : "Cases requiring immediate intervention",
      details: language === "ar" ? "انخفاض 5 حالات عن الأسبوع الماضي" : "5 cases decrease from last week",
    },
    {
      title: t("dashboard.resolvedCases"),
      value: "1,158",
      change: "+18%",
      changeType: "positive",
      icon: CheckCircle,
      color: "bg-green-500",
      description: language === "ar" ? "حالات تم حلها بنجاح" : "Successfully resolved cases",
      details: language === "ar" ? "معدل حل 92.8% من إجمالي الحالات" : "92.8% resolution rate of total cases",
    },
    {
      title: t("dashboard.riskLevel"),
      value: language === "ar" ? "متوسط" : "Medium",
      change: language === "ar" ? "مستقر" : "Stable",
      changeType: "neutral",
      icon: BarChart3,
      color: "bg-orange-500",
      description: language === "ar" ? "مستوى المخاطر العام للنظام" : "Overall system risk level",
      details: language === "ar" ? "لا توجد تغييرات كبيرة في آخر 7 أيام" : "No major changes in the last 7 days",
    },
  ]

  const recentCases = [
    {
      id: "CASE-001",
      company: language === "ar" ? "شركة التقنية المتقدمة" : "Advanced Technology Company",
      type: language === "ar" ? "تلاعب في الرواتب" : "Salary Manipulation",
      riskLevel: language === "ar" ? "عالي" : "High",
      amount: language === "ar" ? "250,000 ريال" : "SAR 250,000",
      date: "2024-01-15",
      status: language === "ar" ? "قيد التحقيق" : "Under Investigation",
      priority: "urgent",
      assignedTo: language === "ar" ? "أحمد محمد" : "Ahmed Mohammed",
      progress: 65,
      description:
        language === "ar"
          ? "اكتشاف تضخيم في رواتب 15 موظف بنسبة 40% عن المعدل الطبيعي"
          : "Discovery of 40% salary inflation for 15 employees above normal rate",
      lastUpdate: language === "ar" ? "منذ ساعتين" : "2 hours ago",
      estimatedCompletion: language === "ar" ? "3 أيام" : "3 days",
    },
    {
      id: "CASE-002",
      company: language === "ar" ? "مؤسسة الخدمات الرقمية" : "Digital Services Foundation",
      type: language === "ar" ? "موظفين وهميين" : "Ghost Employees",
      riskLevel: language === "ar" ? "متوسط" : "Medium",
      amount: language === "ar" ? "180,000 ريال" : "SAR 180,000",
      date: "2024-01-14",
      status: language === "ar" ? "تم الحل" : "Resolved",
      priority: "normal",
      assignedTo: language === "ar" ? "فاطمة أحمد" : "Fatima Ahmed",
      progress: 100,
      description:
        language === "ar" ? "تم اكتشاف 8 موظفين وهميين في كشوف الرواتب" : "Discovery of 8 ghost employees in payroll",
      lastUpdate: language === "ar" ? "منذ يوم" : "1 day ago",
      estimatedCompletion: language === "ar" ? "مكتمل" : "Completed",
    },
    {
      id: "CASE-003",
      company: language === "ar" ? "شركة الاستشارات المالية" : "Financial Consulting Company",
      type: language === "ar" ? "مخالفات ضريبية" : "Tax Violations",
      riskLevel: language === "ar" ? "منخفض" : "Low",
      amount: language === "ar" ? "95,000 ريال" : "SAR 95,000",
      date: "2024-01-13",
      status: language === "ar" ? "مراجعة" : "Under Review",
      priority: "low",
      assignedTo: language === "ar" ? "محمد علي" : "Mohammed Ali",
      progress: 30,
      description:
        language === "ar" ? "عدم تطابق في الإقرارات الضريبية المقدمة" : "Mismatch in submitted tax declarations",
      lastUpdate: language === "ar" ? "منذ 4 ساعات" : "4 hours ago",
      estimatedCompletion: language === "ar" ? "5 أيام" : "5 days",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "case_created",
      message: language === "ar" ? "تم إنشاء حالة جديدة CASE-005" : "New case CASE-005 created",
      time: language === "ar" ? "منذ 5 دقائق" : "5 minutes ago",
      icon: AlertTriangle,
      color: "text-blue-500",
      user: language === "ar" ? "النظام الآلي" : "Automated System",
    },
    {
      id: 2,
      type: "case_resolved",
      message: language === "ar" ? "تم حل الحالة CASE-002 بنجاح" : "Case CASE-002 resolved successfully",
      time: language === "ar" ? "منذ 15 دقيقة" : "15 minutes ago",
      icon: CheckCircle,
      color: "text-green-500",
      user: language === "ar" ? "فاطمة أحمد" : "Fatima Ahmed",
    },
    {
      id: 3,
      type: "system_update",
      message: language === "ar" ? "تحديث في خوارزميات الكشف" : "Detection algorithms updated",
      time: language === "ar" ? "منذ ساعة" : "1 hour ago",
      icon: Activity,
      color: "text-orange-500",
      user: language === "ar" ? "فريق التطوير" : "Development Team",
    },
    {
      id: 4,
      type: "alert",
      message:
        language === "ar" ? "تنبيه: نشاط مشبوه في القطاع المالي" : "Alert: Suspicious activity in financial sector",
      time: language === "ar" ? "منذ ساعتين" : "2 hours ago",
      icon: AlertCircle,
      color: "text-red-500",
      user: language === "ar" ? "نظام المراقبة" : "Monitoring System",
    },
    {
      id: 5,
      type: "report_generated",
      message: language === "ar" ? "تم إنشاء تقرير شهري للمخاطر" : "Monthly risk report generated",
      time: language === "ar" ? "منذ 3 ساعات" : "3 hours ago",
      icon: FileText,
      color: "text-purple-500",
      user: language === "ar" ? "سارة خالد" : "Sarah Khalid",
    },
  ]

  const quickActions = [
    {
      title: t("dashboard.newCase"),
      description: t("dashboard.newCaseDesc"),
      icon: AlertTriangle,
      color: "bg-blue-600 hover:bg-blue-700",
      href: "/dashboard/analyze",
    },
    {
      title: t("dashboard.createReport"),
      description: t("dashboard.createReportDesc"),
      icon: FileText,
      color: "bg-green-600 hover:bg-green-700",
      href: "/dashboard/reports",
    },
    {
      title: t("dashboard.scheduleReview"),
      description: t("dashboard.scheduleReviewDesc"),
      icon: Calendar,
      color: "bg-purple-600 hover:bg-purple-700",
      href: "/dashboard/schedule",
    },
    {
      title: t("dashboard.systemSettings"),
      description: t("dashboard.systemSettingsDesc"),
      icon: BarChart3,
      color: "bg-orange-600 hover:bg-orange-700",
      href: "/dashboard/settings",
    },
  ]

  const riskAnalysis = [
    {
      level: t("dashboard.highRisk"),
      percentage: 15,
      color: "bg-red-500",
      cases: 89,
    },
    {
      level: t("dashboard.mediumRisk"),
      percentage: 35,
      color: "bg-yellow-500",
      cases: 207,
    },
    {
      level: t("dashboard.lowRisk"),
      percentage: 50,
      color: "bg-green-500",
      cases: 295,
    },
  ]

  const getRiskBadgeColor = (risk: string) => {
    const riskMap = {
      عالي: "bg-red-100 text-red-800 border-red-200",
      High: "bg-red-100 text-red-800 border-red-200",
      متوسط: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      منخفض: "bg-green-100 text-green-800 border-green-200",
      Low: "bg-green-100 text-green-800 border-green-200",
    }
    return riskMap[risk as keyof typeof riskMap] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const getStatusBadgeColor = (status: string) => {
    const statusMap = {
      "قيد التحقيق": "bg-blue-100 text-blue-800 border-blue-200",
      "Under Investigation": "bg-blue-100 text-blue-800 border-blue-200",
      "تم الحل": "bg-green-100 text-green-800 border-green-200",
      Resolved: "bg-green-100 text-green-800 border-green-200",
      مراجعة: "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Under Review": "bg-yellow-100 text-yellow-800 border-yellow-200",
    }
    return statusMap[status as keyof typeof statusMap] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <AlertTriangle className="w-4 h-4 text-red-500" />
      case "normal":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "low":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const filteredCases = recentCases.filter((case_) => {
    const matchesSearch =
      case_.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || case_.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 py-8 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t("dashboard.title")}</h1>
              <p className="text-gray-600 dark:text-gray-400">{t("dashboard.welcome")}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {t("dashboard.lastUpdate")}
                </span>
                <span className="flex items-center gap-1">
                  <Activity className="w-4 h-4" />
                  {t("dashboard.systemActive")}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                {t("dashboard.exportReport")}
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                {t("dashboard.analyzeCase")}
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`text-sm flex items-center gap-1 ${
                      stat.changeType === "positive"
                        ? "text-green-600"
                        : stat.changeType === "negative"
                          ? "text-red-600"
                          : "text-gray-600"
                    }`}
                  >
                    {stat.changeType === "positive" && <TrendingUp className="w-3 h-3" />}
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">{stat.description}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-600">{stat.details}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cases Table */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Cases */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {t("dashboard.recentCases")}
                    </CardTitle>
                    <CardDescription className="dark:text-gray-400">
                      {language === "ar" ? "آخر الحالات المكتشفة والمحدثة" : "Latest discovered and updated cases"}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search
                        className={`absolute ${language === "ar" ? "right-3" : "left-3"} top-3 h-4 w-4 text-gray-400`}
                      />
                      <Input
                        placeholder={t("dashboard.searchCases")}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`${language === "ar" ? "pr-10" : "pl-10"} w-64`}
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-40">
                        <Filter className={`w-4 h-4 ${language === "ar" ? "ml-2" : "mr-2"}`} />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t("dashboard.allCases")}</SelectItem>
                        <SelectItem value={language === "ar" ? "قيد التحقيق" : "Under Investigation"}>
                          {t("dashboard.underInvestigation")}
                        </SelectItem>
                        <SelectItem value={language === "ar" ? "تم الحل" : "Resolved"}>
                          {t("dashboard.resolved")}
                        </SelectItem>
                        <SelectItem value={language === "ar" ? "مراجعة" : "Under Review"}>
                          {t("dashboard.underReview")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredCases.map((case_, index) => (
                    <Card key={index} className="border rounded-lg hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="font-mono text-xs">
                              {case_.id}
                            </Badge>
                            <Badge className={getRiskBadgeColor(case_.riskLevel)}>{case_.riskLevel}</Badge>
                            <Badge className={getStatusBadgeColor(case_.status)}>{case_.status}</Badge>
                            {getPriorityIcon(case_.priority)}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">{case_.lastUpdate}</span>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className={language === "ar" ? "text-right" : "text-left"}>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{case_.company}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{case_.type}</p>
                            <p
                              className={`text-xs text-gray-500 mt-1 ${language === "ar" ? "text-right" : "text-left"}`}
                            >
                              {case_.description}
                            </p>
                          </div>
                          <div className={`${language === "ar" ? "text-right" : "text-left"} md:text-right`}>
                            <p className="font-semibold text-gray-900 dark:text-white text-lg">{case_.amount}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {language === "ar" ? `المحقق: ${case_.assignedTo}` : `Investigator: ${case_.assignedTo}`}
                            </p>
                            <p className="text-xs text-gray-500">
                              {language === "ar"
                                ? `الإنجاز المتوقع: ${case_.estimatedCompletion}`
                                : `Expected completion: ${case_.estimatedCompletion}`}
                            </p>
                          </div>
                        </div>

                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">{t("dashboard.progress")}</span>
                            <span className="text-gray-900 dark:text-white font-medium">{case_.progress}%</span>
                          </div>
                          <Progress value={case_.progress} className="h-2" />
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {case_.date}
                          </div>
                          <Link href={`/cases/${case_.id.toLowerCase()}`}>
                            <Button variant="outline" size="sm">
                              <Eye className={`w-4 h-4 ${language === "ar" ? "ml-2" : "mr-2"}`} />
                              {t("dashboard.viewDetails")}
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                  {t("dashboard.quickActions")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link key={index} href={action.href}>
                    <Button className={`w-full justify-start ${action.color} text-white h-auto py-3 px-3`}>
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <action.icon className="w-4 h-4" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-medium text-sm">{action.title}</div>
                        <div className="text-xs opacity-90 mt-1">{action.description}</div>
                      </div>
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Risk Analysis */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                  {t("dashboard.riskAnalysis")}
                </CardTitle>
                <CardDescription className="dark:text-gray-400">{t("dashboard.riskDistribution")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskAnalysis.map((risk, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{risk.level}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {risk.cases} {t("dashboard.cases")}
                          </span>
                          <span className="text-sm text-gray-500">({risk.percentage}%)</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`${risk.color} h-2 rounded-full`}
                          style={{ width: `${risk.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                  {t("dashboard.recentActivity")}
                </CardTitle>
                <CardDescription className="dark:text-gray-400">{t("dashboard.systemActivities")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className={`flex items-start gap-3 ${language === "ar" ? "flex-row-reverse" : ""}`}
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                        <activity.icon className={`w-4 h-4 ${activity.color}`} />
                      </div>
                      <div className={`flex-1 min-w-0 ${language === "ar" ? "text-right" : "text-left"}`}>
                        <p className="text-sm text-gray-900 dark:text-white font-medium">{activity.message}</p>
                        <div className={`flex items-center gap-2 mt-1 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{activity.user}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900 dark:text-green-200">{t("dashboard.systemStatus")}</h3>
                    <p className="text-sm text-green-700 dark:text-green-300">{t("dashboard.allSystemsOperational")}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700 dark:text-green-300">{t("dashboard.uptime")}</span>
                    <span className="text-green-900 dark:text-green-200 font-medium">99.9%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700 dark:text-green-300">{t("dashboard.lastCheck")}</span>
                    <span className="text-green-900 dark:text-green-200 font-medium">
                      {language === "ar" ? "منذ دقيقة" : "1 minute ago"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
