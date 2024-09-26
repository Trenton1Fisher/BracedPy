import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Home, Book, Github, Code } from 'lucide-react'
import MobileNav from './mobileNav'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className="shadow-xl sticky top-0 z-999 
        bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 items-center">
              <span className="text-2xl font-bold text-[#4A6CF7]">
                {'{ }'} BracedPy
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className=" dark:text-white hover:bg-[#eef1fe] hover:text-[#4A6CF7] px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out flex items-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
              <Link
                to="/docs"
                className="hover:bg-[#eef1fe] hover:text-[#4A6CF7] px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out flex items-center"
              >
                <Book className="w-4 h-4 mr-2" />
                Docs
              </Link>
              <Link
                to="/tutorial/1"
                className="hover:bg-[#eef1fe] hover:text-[#4A6CF7] px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out flex items-center"
              >
                <Code className="w-4 h-4 mr-2" />
                Tutorial
              </Link>
              <a
                href="https://github.com/yourlanguage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A6CF7] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3a5bd9] transition duration-150 ease-in-out flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4A6CF7] hover:text-[#3a5bd9] hover:bg-[#eef1fe] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4A6CF7]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <MobileNav setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  )
}
