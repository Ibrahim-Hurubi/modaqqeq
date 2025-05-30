
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export default function UploadCasePage() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const { toast } = useToast()

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    setLoading(true)
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      if (data?.result) {
        setResult(JSON.stringify(data.result, null, 2))
        toast({ title: 'تم التحليل بنجاح ✅' })
      } else {
        toast({ title: 'فشل التحليل ❌', description: data?.error || 'حدث خطأ' })
      }
    } catch (err) {
      toast({ title: 'خطأ في الاتصال بالخادم ❌' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-10 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">رفع مستند لتحليله بالذكاء الاصطناعي</h1>
      <Input type="file" accept=".pdf,.txt,.docx" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <Button className="mt-4" onClick={handleUpload} disabled={loading || !file}>
        {loading ? 'جاري التحليل...' : 'ابدأ التحليل'}
      </Button>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">النتيجة:</h2>
          <pre className="whitespace-pre-wrap break-words text-sm">{result}</pre>
        </div>
      )}
    </div>
  )
}
