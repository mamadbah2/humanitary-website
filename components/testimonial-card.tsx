import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  imageSrc: string
}

export default function TestimonialCard({ quote, name, role, imageSrc }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={`Photo de ${name}`}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <blockquote className="text-gray-600 italic mb-4">"{quote}"</blockquote>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
