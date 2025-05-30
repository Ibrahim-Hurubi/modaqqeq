"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ArrowLeft,
  Download,
  Share,
  AlertTriangle,
  FileText,
  User,
  Building,
  Clock,
  CheckCircle,
  Info,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function CaseDetailsPage() {
  const params = useParams()
  const caseId = params.id as string

  // Mock data - في التطبيق الحقيقي سيتم جلب البيانات من API
  const caseData = {
    id: caseId,
    company: "شركة التقنية المتقدمة",
    type: "تلاعب في الرواتب",
    riskLevel: "عالي",
    amount: "250,000 ريال",
    date: "2024-01-15",
    status: "قيد التحقيق",
    description: "تم اكتشاف تضخيم في رواتب بعض الموظفين بشكل غير مبرر، مع وجود شبهات في تلاعب بالبيانات المالية.",
    aiScore: 87,
    investigator: "أحمد محمد السعد",
    lastUpdate: "2024-01-16 14:30",
    evidence: [
      "تقارير مالية متناقضة",
      "زيادة غير مبررة في الرواتب",
      "عدم تطابق البيانات مع السجلات الحكومية",
      "أنماط مشبوهة في التحويلات المالية",
    ],
    timeline: [
      { date: "2024-01-15 09:00", event: "اكتشاف الحالة تلقائياً", type: "detection" },
      { date: "2024-01-15 10:30", event: "تم تعيين محقق للحالة", type: "assignment" },
      { date: "2024-01-15 14:00", event: "بدء التحقيق الأولي", type: "investigation" },
      { date: "2024-01-16 11:00", event: "طلب مستندات إضافية", type: "request" },
      { date: "2024-01-16 14:30", event: "تحديث حالة التحقيق", type: "update" },
    ],
    recommendations: [
      "إيقاف المعاملات المالية المشبوهة فوراً",
      "طلب تدقيق مالي شامل للشركة",
      "مراجعة جميع العقود والاتفاقيات",
      "إشعار الجهات الرقابية المختصة",
    ],
  }

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case "عالي":
        return "bg-red-100 text-red-800 border-red-200"
      case "متوسط":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "منخفض":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "قيد التحقيق":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "تم الحل":
        return "bg-green-100 text-green-800 border-green-200"
      case "مراجعة":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case "detection":
        return <AlertTriangle className="w-4 h-4 text-red-500" />
      case "assignment":
        return <User className="w-4 h-4 text-blue-500" />
      case "investigation":
        return <FileText className="w-4 h-4 text-purple-500" />
      case "request":
        return <Info className="w-4 h-4 text-orange-500" />
      case "update":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 ml-2" />
                العودة للوحة التحكم
              </Button>
            </Link>
            <Badge variant="outline" className="font-mono">
              {caseData.id}
            </Badge>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">تفاصيل الحالة</h1>
              <p className="text-gray-600">آخر تحديث: {caseData.lastUpdate}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Share className="w-4 h-4" />
                مشاركة
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                تحميل التقرير
              </Button>
            </div>
          </div>
        </div>

        {/* Case Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" />
                معلومات الشركة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">اسم الشركة</p>
                  <p className="font-semibold text-gray-900">{caseData.company}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">نوع المخالفة</p>
                  <p className="font-semibold text-gray-900">{caseData.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">المبلغ المشبوه</p>
                  <p className="font-semibold text-gray-900 text-red-600">{caseData.amount}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                تحليل المخاطر
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">مستوى المخاطر</p>
                  <Badge className={getRiskBadgeColor(caseData.riskLevel)}>{caseData.riskLevel}</Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-600">نقاط الذكاء الاصطناعي</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: `${caseData.aiScore}%` }}></div>
                    </div>
                    <span className="text-sm font-semibold text-red-600">{caseData.aiScore}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">الحالة</p>
                  <Badge className={getStatusBadgeColor(caseData.status)}>{caseData.status}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" />
                معلومات التحقيق
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">المحقق المسؤول</p>
                  <p className="font-semibold text-gray-900">{caseData.investigator}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">تاريخ الاكتشاف</p>
                  <p className="font-semibold text-gray-900">{caseData.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">مدة التحقيق</p>
                  <p className="font-semibold text-gray-900">يومان</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-0">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 rounded-none border-b">
                <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
                <TabsTrigger value="evidence">الأدلة</TabsTrigger>
                <TabsTrigger value="timeline">الجدول الزمني</TabsTrigger>
                <TabsTrigger value="recommendations">التوصيات</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">وصف الحالة</h3>
                    <p className="text-gray-700 leading-relaxed">{caseData.description}</p>
                  </div>

                  <Alert className="bg-red-50 border-red-200">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      <strong>تنبيه:</strong> هذه الحالة تتطلب اهتماماً فورياً نظراً لارتفاع مستوى المخاطر
                    </AlertDescription>
                  </Alert>
                </div>
              </TabsContent>

              <TabsContent value="evidence" className="p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">الأدلة المكتشفة</h3>
                  <div className="space-y-3">
                    {caseData.evidence.map((evidence, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{evidence}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="timeline" className="p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">الجدول الزمني للتحقيق</h3>
                  <div className="space-y-4">
                    {caseData.timeline.map((event, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                          {getTimelineIcon(event.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{event.event}</p>
                            <p className="text-xs text-gray-500">{event.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recommendations" className="p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">التوصيات والإجراءات المقترحة</h3>
                  <div className="space-y-3">
                    {caseData.recommendations.map((recommendation, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 border border-orange-200 bg-orange-50 rounded-lg"
                      >
                        <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{recommendation}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700">تنفيذ التوصيات</Button>
                    <Button variant="outline">طلب مراجعة إضافية</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
