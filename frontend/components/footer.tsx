import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Content Generator
            </Link>
            <p className="mt-4 text-gray-600">
              Empowering students with AI-powered learning solutions tailored to their needs.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/bookgen" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Book Generator
                </Link>
              </li>
              <li>
                <Link href="/counselor" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Counselor
                </Link>
              </li>
              <li>
                <Link href="/doubt" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Doubt Solver
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-purple-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/user-policy" className="text-gray-600 hover:text-purple-600 transition-colors">
                  User Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-purple-600 mt-0.5" />
                <span className="text-gray-600">123 Education Street, Learning City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-purple-600" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-purple-600" />
                <span className="text-gray-600">contact@contentgenerator.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} Content Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
