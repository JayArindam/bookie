import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import ArticleCard from "@/components/article-card"
import { articles } from "@/lib/articles"
import Image from "next/image"

export default function ArticlesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Latest Articles</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest insights, trends, and developments in AI-powered education and learning.
        </p>
      </div>

      {/* Featured Article */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-auto">
              <Image
                src={articles[0].image || "/placeholder.svg"}
                alt={articles[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                {articles[0].category}
              </div>
            </div>
            <CardContent className="flex flex-col justify-center p-6">
              <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {articles[0].author}
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {articles[0].date}
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {articles[0].readTime}
                </div>
              </div>
              <Link href={`/articles/${articles[0].slug}`} className="hover:underline">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">{articles[0].title}</h2>
              </Link>
              <p className="text-gray-600 mb-6">{articles[0].description}</p>
              <Link
                href={`/articles/${articles[0].slug}`}
                className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
              >
                Read Full Article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(1).map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
