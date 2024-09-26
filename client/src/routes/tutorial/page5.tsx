import { ArrowLeft, Play } from 'lucide-react'
import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function TutorialPage5() {
  const [code, setCode] = useState('')

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 h-screen">
      <div className="relative col-span-1 md:col-span-2 row-span-2 border-r-4 border-blue-200 p-4 py-8 overflow-auto">
        <h2 className="text-lg md:text-xl font-bold">While Loops Tutorial</h2>
        <p className="text-sm md:text-base">
          A <code>while</code> loop allows you to repeatedly execute a block of
          code as long as a specified condition remains true. The condition is
          evaluated before each iteration, and the loop will continue to execute
          until the condition becomes false. Be mindful of the condition to
          avoid infinite loops.
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">Example Code:</h3>
        <p className="text-sm md:text-base">
          Below is an example of how a <code>while</code> loop works:
        </p>
        <pre className="bg-gray-100 p-2 rounded text-sm md:text-base">
          {`x = 0;
y = 2;
while x < 10 {
    y = y + 1;
    x = x * y;
}
`}
        </pre>

        <h3 className="font-bold mt-4 text-md md:text-lg">Your Turn!</h3>
        <p className="text-sm md:text-base">
          Try writing your own <code>while</code> loops using the example above
          as a guide. Experiment with different conditions to see how the loop
          behaves.
        </p>

        <p className="text-sm md:text-base">
          Once you click the "Run" button, the compiler will execute your code
          and show the results!
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">Additional Tips:</h3>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>
            Make sure your loop has a condition that will eventually become
            false to avoid infinite loops.
          </li>
          <li>
            You can use <code>break</code> to exit the loop prematurely if
            needed.
          </li>
          <li>
            Consider using <code>while True</code> with a <code>break</code>{' '}
            statement for infinite loops with exit conditions.
          </li>
        </ul>

        <div className="flex items-center mt-4">
          <Link
            className="rounded-lg flex items-center bg-red-800 hover:bg-red-600 text-white p-2 mr-2"
            to="/tutorial/4"
          >
            <ArrowLeft />
            <span>Previous</span>
          </Link>
          <Link
            className="rounded-lg flex items-center bg-gray-800 hover:bg-gray-600 text-white p-2"
            to="/tutorial/6"
          >
            <span>Next</span> <ArrowRight />
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
