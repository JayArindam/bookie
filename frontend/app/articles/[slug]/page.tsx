import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import { getArticleBySlug, getAllArticles } from "@/lib/articles"
import Image from "next/image"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)
  const articles = getAllArticles()

  if (!article) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/articles"
        className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors mb-8"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Articles
      </Link>

      <article>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">{article.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              {article.readTime}
            </div>
            <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">{article.category}</div>
          </div>
        </div>

        <div className="mb-8 rounded-lg overflow-hidden">
          <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={index} className="text-3xl font-bold gradient-text mt-8 mb-4">
                  {paragraph.replace("# ", "")}
                </h1>
              )
            } else if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold gradient-text mt-6 mb-3">
                  {paragraph.replace("## ", "")}
                </h2>
              )
            } else if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-bold gradient-text mt-5 mb-2">
                  {paragraph.replace("### ", "")}
                </h3>
              )
            } else {
              return (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              )
            }
          })}
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold gradient-text mb-6">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles
            .filter((a) => a.slug !== article.slug && a.category === article.category)
            .slice(0, 2)
            .map((relatedArticle) => (
              <div key={relatedArticle.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <Image
                    src={relatedArticle.image || "/placeholder.svg"}
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <Link href={`/articles/${relatedArticle.slug}`} className="hover:underline">
                    <h4 className="text-lg font-bold gradient-text mb-2 line-clamp-2">{relatedArticle.title}</h4>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">{relatedArticle.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{relatedArticle.date}</span>
                    <span>{relatedArticle.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
