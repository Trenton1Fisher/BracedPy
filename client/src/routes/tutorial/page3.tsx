import { ArrowLeft, Play } from 'lucide-react'
import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function TutorialPage3() {
  const [code, setCode] = useState('')

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 h-screen">
      <div className="relative col-span-1 md:col-span-2 row-span-2 border-r-4 border-blue-200 p-4 py-8 overflow-auto">
        <h2 className="text-lg md:text-xl font-bold">If Statements Tutorial</h2>
        <p className="text-sm md:text-base">
          The <code>if</code> statement is used to execute a block of code only
          if a specified condition evaluates to true. This condition can be any
          valid expression that results in a boolean outcome, such as comparing
          two variables using conditional operators. If the condition is true,
          the code inside the block is executed. The <code>if</code> statement
          is an essential part of controlling the flow of your program based on
          certain conditions.
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">Example Code:</h3>
        <p className="text-sm md:text-base">
          Below is an example of how an <code>if</code> statement works:
        </p>
        <pre className="bg-gray-100 p-2 rounded text-sm md:text-base">
          {`x = 12;
if x > 10 {
    result = 100;
}`}
        </pre>

        <h3 className="font-bold mt-4 text-md md:text-lg">Your Turn!</h3>
        <p className="text-sm md:text-base">
          Try writing your own <code>if</code> statements using the example
          above as a guide. Remember to test different conditions to see how the
          program behaves.
        </p>

        <p className="text-sm md:text-base">
          Once you click the "Run" button, the compiler will execute your code
          and show the results!
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">Additional Tips:</h3>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>
            You can use various conditional operators like <code>&gt;</code>,{' '}
            <code>&lt;</code>, <code>==</code>, and <code>!=</code> in your
            conditions.
          </li>
          <li>
            Make sure to use indentation to define the block of code that will
            execute if the condition is true.
          </li>
          <li>
            Test your conditions thoroughly to understand how they affect the
            flow of your program.
          </li>
        </ul>

        <div className="flex items-center mt-4">
          <Link
            className="rounded-lg flex items-center bg-red-800 hover:bg-red-600 text-white p-2 mr-2"
            to="/tutorial/2"
          >
            <ArrowLeft />
            <span>Previous</span>
          </Link>
          <Link
            className="rounded-lg flex items-center bg-gray-800 hover:bg-gray-600 text-white p-2"
            to="/tutorial/4"
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
