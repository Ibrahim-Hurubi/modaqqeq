"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  HelpCircle,
  Shield,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    // Basic validation
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = t("contact.validation.nameRequired")
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.validation.emailRequired")
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.validation.emailInvalid")
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("contact.validation.subjectRequired")
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.validation.messageRequired")
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      value: "contact@modaqqeq.sa",
      description: t("contact.info.email.desc"),
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: t("contact.info.phone.title"),
      value: "+966 11 123 4567",
      description: t("contact.info.phone.desc"),
      color: "bg-green-500",
    },
    {
      icon: MapPin,
      title: t("contact.info.address.title"),
      value: t("footer.address"),
      description: t("contact.info.address.desc"),
      color: "bg-purple-500",
    },
    {
      icon: Clock,
      title: t("contact.info.hours.title"),
      value: t("contact.info.hours.value"),
      description: t("contact.info.hours.desc"),
      color: "bg-orange-500",
    },
  ]

  const faqItems = [
    {
      question: t("contact.faq.q1"),
      answer: t("contact.faq.a1"),
    },
    {
      question: t("contact.faq.q2"),
      answer: t("contact.faq.a2"),
    },
    {
      question: t("contact.faq.q3"),
      answer: t("contact.faq.a3"),
    },
    {
      question: t("contact.faq.q4"),
      answer: t("contact.faq.a4"),
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  ]

  return (
    <div className="min-h-screen py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <MessageSquare className="w-4 h-4 ml-2" />
            {t("contact.badge.contact")}
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("contact.title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t("contact.form.title")}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">{t("contact.form.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-300">
                      {t("contact.success")}
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("contact.name")} *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`${errors.name ? "border-red-500 dark:border-red-400" : ""} dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <Alert variant="destructive" className="py-2">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription className="text-sm">{errors.name}</AlertDescription>
                        </Alert>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("contact.email")} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@domain.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`${errors.email ? "border-red-500 dark:border-red-400" : ""} dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <Alert variant="destructive" className="py-2">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription className="text-sm">{errors.email}</AlertDescription>
                        </Alert>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("contact.subject")} *
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder={language === "ar" ? "موضوع الرسالة" : "Message subject"}
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className={`${errors.subject ? "border-red-500 dark:border-red-400" : ""} dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                        disabled={isSubmitting}
                      />
                      {errors.subject && (
                        <Alert variant="destructive" className="py-2">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription className="text-sm">{errors.subject}</AlertDescription>
                        </Alert>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t("contact.message")} *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={language === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={`${errors.message ? "border-red-500 dark:border-red-400" : ""} dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <Alert variant="destructive" className="py-2">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription className="text-sm">{errors.message}</AlertDescription>
                        </Alert>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          {t("contact.sending")}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          {t("contact.send")}
                          <Send className="w-4 h-4" />
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("contact.info.title")}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{t("contact.info.subtitle")}</p>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{info.value}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("contact.faq.title")}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{t("contact.faq.subtitle")}</p>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <Card key={index} className="border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                          <HelpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("contact.social.title")}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{t("contact.social.desc")}</p>
              <div className="flex space-x-3 rtl:space-x-reverse">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 ${social.color} dark:hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">
                      {t("contact.emergency.title")}
                    </h3>
                    <p className="text-red-800 dark:text-red-300 mb-3">{t("contact.emergency.desc")}</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="destructive" size="sm">
                        <Phone className="w-4 h-4 ml-2" />
                        {t("contact.emergency.call")}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-300 text-red-700 hover:bg-red-50 dark:border-red-600 dark:text-red-300 dark:hover:bg-red-900/20"
                      >
                        <Mail className="w-4 h-4 ml-2" />
                        {t("contact.emergency.email")}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            {t("contact.noAccount")}{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">{t("contact.createAccount")}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
