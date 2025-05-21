import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  location: string
  imageSrc: string
  category: string
}

export default function EventCard({ title, date, location, imageSrc, category }: EventCardProps) {
  const getBadgeColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "formation":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "sensibilisation":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "événement":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge className={getBadgeColor(category)}>{category}</Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
      </CardContent>
    </Card>
  )
}
