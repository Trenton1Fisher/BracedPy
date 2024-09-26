import { docsData } from '../constants/docsData'
import { Link, Element } from 'react-scroll'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function DocsContent() {
  const [sectionSelected, setSectionSelected] = useState(0)

  return (
    <div className="flex justify-center py-12">
      <nav className="mt-12 pr-8 sticky top-28 self-start border-gray-300">
        <ul>
          {docsData.map(doc => (
            <li key={doc.id} className="mb-4">
              <Link
                to={doc.jsxId}
                smooth={true}
                offset={-90}
                duration={500}
                onClick={() => setSectionSelected(doc.id)}
                className={`hover:text-blue-500 transition-colors duration-200 cursor-pointer ${
                  sectionSelected === doc.id ? 'text-blue-500' : 'text-gray-500'
                }`}
              >
                {doc.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className=" max-w-4xl p-6 border-l mt-8 border-gray-300">
        {docsData.map(doc => (
          <Element key={doc.id} name={doc.jsxId} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{doc.title}</h2>
            <p className="text-lg leading-relaxed mb-6">{doc.description}</p>
            <SyntaxHighlighter language="python" style={agate}>
              {doc.codeBlockText}
            </SyntaxHighlighter>
            <hr className="border-gray-300" />
          </Element>
        ))}
      </div>
    </div>
  )
}
