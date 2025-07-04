"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">Content Generator</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/bookgen"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Book Generator
            </Link>
            <Link
              href="/counselor"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Counselor
            </Link>
            <Link
              href="/doubt"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Doubt Solver
            </Link>
            <Link
              href="/articles"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Articles
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
            >
              Home
            </Link>
            <Link
              href="/bookgen"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
            >
              Book Generator
            </Link>
            <Link
              href="/counselor"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
            >
              Counselor
            </Link>
            <Link
              href="/doubt"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
            >
              Doubt Solver
            </Link>
            <Link
              href="/articles"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
            >
              Articles
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
