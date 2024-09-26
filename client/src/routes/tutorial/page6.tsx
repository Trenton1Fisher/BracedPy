import { ArrowLeft, Play } from 'lucide-react'
import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function TutorialPage6() {
  const [code, setCode] = useState('')

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 h-screen">
      <div className="relative col-span-1 md:col-span-2 row-span-2 border-r-4 border-blue-200 p-4 py-8 overflow-auto">
        <h2 className="text-lg md:text-xl font-bold">Challenge Time!</h2>
        <p className="text-sm md:text-base">
          You’ve learned the basics, and now it's time to apply your knowledge!
          Create a more complex arithmetic solution using <code>while</code>{' '}
          loops and control flow statements like <code>if</code>,{' '}
          <code>elif</code>, and <code>else</code>. Your challenge is to write a
          piece of code that manipulates variables with different arithmetic
          operations.
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">
          Sample Challenge Code:
        </h3>
        <pre className="bg-gray-100 p-2 rounded text-sm md:text-base">
          {`x = 0;
result = 0;

while (x < 5) {
    l = x * 2;

    if (x < 2) {
        result = x * 10 + (l + 4);
    } elif (x < 4) {
        result = x * 5 - (l - 3);
    } else { 
        result = l * 2; 
    }
    
    x = x + 1;
}
`}
        </pre>

        <p className="text-sm md:text-base">
          Implement the above structure in the code editor. Modify the
          calculations, and experiment with different variable values and
          conditions to see how the <code>result</code> changes as{' '}
          <code>x</code> increments.
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">Tips for Success:</h3>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>
            Ensure your loop has a condition that will eventually become false
            to avoid infinite loops.
          </li>
          <li>
            Use <code>break</code> to exit the loop prematurely if needed.
          </li>
          <li>
            Experiment with different arithmetic operations and conditions to
            enhance your understanding.
          </li>
          <li>
            Remember all variable declared will automatically be printed so you
            can see the output immediatley
          </li>
        </ul>

        <div className="flex items-center mt-4">
          <Link
            className="rounded-lg flex items-center bg-red-800 hover:bg-red-600 text-white p-2 mr-2"
            to="/tutorial/5"
          >
            <ArrowLeft />
            <span>Previous</span>
          </Link>
          <Link
            className="rounded-lg flex items-center bg-green-700 hover:bg-green-500 text-white p-2"
            to="/"
          >
            <span>Finish</span> <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 row-span-1 border-b-4">
        <Editor
          defaultLanguage="python"
          defaultValue="# Write Your Code Here"
          onChange={e => setCode(e!)}
          className="w-full h-40 md:h-full p-1"
          theme="vs-dark"
        />
      </div>

      <div className="relative col-span-1 md:col-span-2 row-span-1 border-t-4 border-blue-200 p-4 flex flex-col">
        <div className="mb-4">
          <h3 className="font-bold text-md md:text-lg">Output:</h3>
        </div>
        <button className="absolute flex items-center justify-center top-5 right-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          <Play />
          <span className="ml-2">Run</span>
        </button>
      </div>
    </div>
  )
}
