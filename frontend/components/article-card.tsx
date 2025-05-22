import Link from "next/link"
import { Clock, Calendar, User } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export interface ArticleProps {
  slug: string
  title: string
  description: string
  image: any
  author: string
  date: string
  readTime: string
  category: string
  content: any
}

const ArticleCard = ({ article }: { article: ArticleProps }) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          fill
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
          {article.category}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-2">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            {article.author}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {article.date}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {article.readTime}
          </div>
        </div>
        <Link href={`/articles/${article.slug}`} className="hover:underline">
          <h3 className="text-xl font-bold gradient-text line-clamp-2">{article.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-gray-600 line-clamp-3">{article.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/articles/${article.slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ArticleCard
