import Link from "next/link"
import Carousel from "@/components/carousel"
import ServiceCard from "@/components/service-card"
import Image from "next/image"
import { Book, Brain, HelpCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import aboutimage from "../public/about-image.jpg"
import map from "../public/map.jpg"
import art1 from "../public/art1.jpg"
import art2 from "../public/art2.jpg"
import art3 from "../public/art3.jpg"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="w-full">
        <Carousel />
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Content generator offers three powerful AI solutions designed to enhance your learning experience and help you
              achieve your academic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transition-all duration-500 hover:-translate-y-1">
              <ServiceCard
                title="Book Generator"
                description="Generate personalized books tailored to your learning level and specific requirements. Our AI creates content that matches your pace and interests."
                icon={<Book className="h-6 w-6 text-white" />}
                link="/bookgen"
              />
            </div>
            <div className="transition-all duration-500 hover:-translate-y-1">
              <ServiceCard
                title="AI Counselor"
                description="Get personalized guidance to plan your academic journey. Our AI counselor provides motivation and strategies to help you succeed."
                icon={<Brain className="h-6 w-6 text-white" />}
                link="/counselor"
              />
            </div>
            <div className="transition-all duration-500 hover:-translate-y-1">
              <ServiceCard
                title="Doubt Solver"
                description="Instantly solve your academic doubts with our intelligent AI assistant. Get clear explanations for complex concepts anytime you need."
                icon={<HelpCircle className="h-6 w-6 text-white" />}
                link="/doubt"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">About Content generator</h2>
              <p className="text-lg text-gray-600 mb-6">
                Content generator is an innovative AI-powered platform designed to revolutionize the way students learn and engage
                with educational content.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to make education more accessible, personalized, and effective through cutting-edge
                artificial intelligence technology.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need custom learning materials, academic guidance, or help with difficult concepts, Content generator
                is your all-in-one educational companion.
              </p>
              <Button className="gradient-bg text-white">
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image src={aboutimage} alt="Students using Content generator" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights and developments in AI-powered education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <Image
                  src={art1}
                  alt="Article thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span>May 2, 2025</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-xl font-bold gradient-text mb-2">The AI Revolution in Education</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Artificial Intelligence is reshaping education in unprecedented ways. From personalized learning paths
                  to intelligent tutoring systems...
                </p>
                <Link
                  href="/articles/ai-revolution-in-education"
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <Image
                  src={art2}
                  alt="Article thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span>April 28, 2025</span>
                  <span>6 min read</span>
                </div>
                <h3 className="text-xl font-bold gradient-text mb-2">
                  Personalized Learning Through AI-Generated Books
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Discover how AI-generated books are creating tailored learning experiences for students at different
                  levels...
                </p>
                <Link
                  href="/articles/personalized-learning-ai-books"
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <Image
                  src={art3}
                  alt="Article thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span>April 20, 2025</span>
                  <span>7 min read</span>
                </div>
                <h3 className="text-xl font-bold gradient-text mb-2">AI Counseling: Supporting Student Success</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  How AI counseling systems are helping students navigate academic challenges, career planning, and
                  personal development...
                </p>
                <Link
                  href="/articles/ai-counseling-student-success"
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/articles">
              <Button variant="outline" className="group">
                <span>View All Articles</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Reach out to our team and we'll get back to you as
              soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full gradient-bg text-white">Send Message</Button>
              </form>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-6">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <Image
                    src={map}
                    alt="Map location"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <p className="mt-4 text-gray-600">123 Education Street, Learning City, 10001</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <span className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    contact@contentgenerator.ai
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    +1 (555) 123-4567
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    123 Education Street, Learning City, 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
