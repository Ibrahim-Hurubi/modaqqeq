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
  TrendingUp,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function Case002Page() {
  const caseData = {
    id: "CASE-002",
    company: "مؤسسة الخدمات الرقمية",
    type: "موظفين وهميين",
    riskLevel: "متوسط",
    amount: "180,000 ريال",
    date: "2024-01-14",
    status: "تم الحل",
    description: "تم اكتشاف 8 موظفين وهميين في كشوف الرواتب مع عدم وجود سجلات حضور أو أداء فعلي لهؤلاء الموظفين.",
    aiScore: 92,
    investigator: "فاطمة أحمد",
    lastUpdate: "2024-01-17 16:45",
    progress: 100,
    evidence: [
      "عدم وجود سجلات حضور لـ 8 موظفين لمدة 6 أشهر",
      "رواتب تُدفع لأرقام هوية غير صحيحة",
      "حسابات مصرفية مرتبطة بأشخاص غير موجودين",
      "عدم وجود عقود عمل أو مستندات توظيف",
      "تحويلات مالية إلى حسابات مشبوهة",
    ],
    timeline: [
      { date: "2024-01-14 08:30", event: "اكتشاف تلقائي للموظفين الوهميين", type: "detection" },
      { date: "2024-01-14 09:15", event: "تعيين المحققة فاطمة أحمد", type: "assignment" },
      { date: "2024-01-14 11:00", event: "بدء التحقيق وطلب كشوف الحضور", type: "investigation" },
      { date: "2024-01-15 14:30", event: "تأكيد عدم وجود الموظفين", type: "update" },
      { date: "2024-01-16 10:00", event: "استرداد الأموال وإغلاق الحسابات", type: "resolution" },
      { date: "2024-01-17 16:45", event: "إغلاق الحالة بنجاح", type: "closure" },
    ],
    recommendations: [
      "تطبيق نظام مراقبة أكثر صرامة للموظفين الجدد",
      "ربط نظام الرواتب بنظام الحضور والانصراف",
      "مراجعة دورية لجميع ملفات الموظفين",
      "تطبيق التحقق البيومتري للموظفين",
      "إنشاء تقارير شهرية لمراقبة الشذوذ",
    ],
    financialImpact: {
      totalAmount: "180,000 ريال",
      affectedEmployees: 8,
      monthlyLoss: "30,000 ريال",
      recoveredAmount: "165,000 ريال",
    },
    resolution: {
      recoveryRate: "91.7%",
      actionsTaken: [
        "إيقاف جميع المدفوعات للموظفين الوهميين",
        "استرداد 165,000 ريال من إجمالي 180,000 ريال",
        "إغلاق الحسابات المصرفية المشبوهة",
        "تحديث أنظمة الأمان والمراقبة",
      ],
    },
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
      case "update":
        return <Info className="w-4 h-4 text-orange-500" />
      case "resolution":
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case "closure":
        return <CheckCircle className="w-4 h-4 text-green-600" />
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
            <Badge className="bg-green-100 text-green-800 border-green-200">تم الحل بنجاح</Badge>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">تفاصيل الحالة - موظفين وهميين</h1>
              <p className="text-gray-600">تم الإغلاق: {caseData.lastUpdate}</p>
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
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
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
                  <p className="text-sm text-gray-600">المبلغ المتأثر</p>
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
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${caseData.aiScore}%` }}></div>
                    </div>
                    <span className="text-sm font-semibold text-green-600">{caseData.aiScore}%</span>
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
                  <p className="font-semibold text-gray-900">4 أيام</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-orange-600" />
                الاسترداد المالي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">الموظفون الوهميون</p>
                  <p className="font-semibold text-gray-900">{caseData.financialImpact.affectedEmployees} موظف</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">المبلغ المسترد</p>
                  <p className="font-semibold text-gray-900 text-green-600">
                    {caseData.financialImpact.recoveredAmount}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">نسبة الاسترداد</p>
                  <p className="font-semibold text-gray-900 text-green-600">{caseData.resolution.recoveryRate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-0">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5 rounded-none border-b">
                <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
                <TabsTrigger value="evidence">الأدلة</TabsTrigger>
                <TabsTrigger value="timeline">الجدول الزمني</TabsTrigger>
                <TabsTrigger value="resolution">الحل</TabsTrigger>
                <TabsTrigger value="recommendations">التوصيات</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">وصف الحالة</h3>
                    <p className="text-gray-700 leading-relaxed">{caseData.description}</p>
                  </div>

                  <Alert className="bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <strong>تم الحل بنجاح:</strong> تم استرداد 91.7% من الأموال وإغلاق جميع الحسابات المشبوهة
                    </AlertDescription>
                  </Alert>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">تفاصيل الاكتشاف</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• تم اكتشاف 8 موظفين وهميين في النظام</li>
                        <li>• عدم وجود سجلات حضور لمدة 6 أشهر</li>
                        <li>• رواتب تُدفع لأرقام هوية غير صحيحة</li>
                        <li>• حسابات مصرفية مرتبطة بأشخاص وهميين</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">النتائج المحققة</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• استرداد 165,000 ريال من أصل 180,000</li>
                        <li>• إغلاق 8 حسابات مصرفية مشبوهة</li>
                        <li>• تحديث أنظمة الأمان والمراقبة</li>
                        <li>• تطبيق إجراءات وقائية جديدة</li>
                      </ul>
                    </div>
                  </div>
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

              <TabsContent value="resolution" className="p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">تفاصيل الحل</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">
                        نسبة الاسترداد: {caseData.resolution.recoveryRate}
                      </h4>
                      <p className="text-green-800">تم استرداد 165,000 ريال من إجمالي 180,000 ريال</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">الإجراءات المتخذة</h4>
                      <div className="space-y-2">
                        {caseData.resolution.actionsTaken.map((action, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700">{action}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recommendations" className="p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">التوصيات للوقاية المستقبلية</h3>
                  <div className="space-y-3">
                    {caseData.recommendations.map((recommendation, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 border border-blue-200 bg-blue-50 rounded-lg"
                      >
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{recommendation}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button className="bg-green-600 hover:bg-green-700">تطبيق التوصيات</Button>
                    <Button variant="outline">تحميل تقرير الحل</Button>
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
