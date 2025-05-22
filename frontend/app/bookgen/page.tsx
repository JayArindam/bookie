"use client"

import type React from "react"

import { useState } from "react"
import { Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Loader from "@/components/loader"

interface BookResponse {
  data: {
    content: string
  }
}

export default function BookGenerator() {
  const [prompt, setPrompt] = useState("")
  const [book, setBook] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!prompt.trim()) {
      setError("Please enter a prompt for your book")
      return
    }

    setIsLoading(true)
    setError(null)
    setBook(null)

    try {
      const response = await fetch("http://localhost:3000/generatebook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate book")
      }

      const data: BookResponse = await response.json()
      setBook(data.data.content)
    } catch (err) {
      setError("An error occurred while generating your book. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
          <Book className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">AI Book Generator</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Generate personalized books tailored to your learning level and specific requirements. Our AI creates content
          that matches your pace and interests.
        </p>
      </div>

      <Card className="max-w-3xl mx-auto mb-12">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                What would you like your book to be about?
              </label>
              <textarea
                id="prompt"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="E.g., Write me a book about a cat that went on a little adventure"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              ></textarea>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <Button type="submit" className="w-full gradient-bg text-white" disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate Book"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {isLoading && <Loader />}

      {book && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold gradient-text mb-6">Your Generated Book</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              {book.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
