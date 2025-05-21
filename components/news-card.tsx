import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  imageSrc: string
  slug: string
}

export default function NewsCard({ title, excerpt, date, category, imageSrc, slug }: NewsCardProps) {
  const getBadgeColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "équipement":
        return "bg-teal-100 text-teal-800 hover:bg-teal-100"
      case "formation":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "partenariat":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge className={getBadgeColor(category)}>{category}</Badge>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
        <Link href={`/actualites/${slug}`} className="text-teal-600 hover:text-teal-800 text-sm font-medium">
          Lire la suite →
        </Link>
      </CardContent>
    </Card>
  )
}
