import { Book, Home } from 'lucide-react'
import { Dispatch } from 'react'
import { Link } from 'react-router-dom'

export default function MobileNav({
  setIsMenuOpen,
}: {
  setIsMenuOpen: Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          to="/"
          className="text-gray-700 hover:bg-[#eef1fe] hover:text-[#4A6CF7] block px-3 py-2 rounded-md text-base font-medium flex items-center"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <Home className="w-5 h-5 mr-3" />
          Home
        </Link>
        <Link
          to="/docs"
          className="text-gray-700 hover:bg-[#eef1fe] hover:text-[#4A6CF7] block px-3 py-2 rounded-md text-base font-medium flex items-center"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <Book className="w-5 h-5 mr-3" />
          Docs
        </Link>
        <Link
          to="/tutorial/1"
          className="text-gray-700 hover:bg-[#eef1fe] hover:text-[#4A6CF7] block px-3 py-2 rounded-md text-base font-medium flex items-center"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <Book className="w-5 h-5 mr-3" />
          Tutorials
        </Link>
        <a
          href="https://github.com/yourlanguage"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4A6CF7] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3a5bd9] transition duration-150 ease-in-out flex items-center"
        >
          <Book className="w-5 h-5 mr-3" />
          Source Code
        </a>
      </div>
    </div>
  )
}
