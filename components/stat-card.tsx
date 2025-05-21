import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  value: string
  label: string
  icon: ReactNode
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-3xl font-bold">{value}</div>
          {icon}
        </div>
        <p className="text-gray-600">{label}</p>
      </CardContent>
    </Card>
  )
}
