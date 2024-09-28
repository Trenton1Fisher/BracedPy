import { ArrowLeft, Play } from 'lucide-react'
import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { sendCodeToBackend } from '../../utils/sendCodeToBackend'

export default function TutorialPage4() {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [output, setOutput] = useState('')
  const [compilerError, setCompilerError] = useState({
    show: false,
    message: '',
  })

  async function compileCode(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault()
    setLoading(true)

    setError(false)
    setCompilerError({ show: false, message: '' })

    try {
      const data = await sendCodeToBackend(code)

      if (!data) {
        setError(true)
        return
      }

      if (!data.success && data.output) {
        setCompilerError({
          show: true,
          message: data.output,
        })
        return
      }

      if (!data.output) {
        setError(true)
        return
      }

      setOutput(data.output)
    } catch (error) {
      console.error('Compilation error:', error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 h-screen">
      <div className="relative col-span-1 md:col-span-2 row-span-2 border-r-4 border-blue-200 p-4 py-8 overflow-auto">
        <h2 className="text-lg md:text-xl font-bold">
          Elif and Else Statements Tutorial
        </h2>
        <p className="text-sm md:text-base">
          The <code>elif</code> statement is used for additional condition
          checks after an initial <code>if</code> statement. If the first{' '}
          <code>if</code> condition evaluates to false, the <code>elif</code>{' '}
          condition will be checked. You can chain multiple <code>elif</code>{' '}
          conditions to handle different possible values or scenarios.
        </p>
        <p className="text-sm md:text-base">
          The <code>else</code> statement is used as the final fallback option
          when none of the preceding <code>if</code> or <code>elif</code>{' '}
          conditions evaluate to true. This ensures that even if all other
          conditions fail, some code will still be executed.
        </p>
        <p className="text-sm md:text-base">
          Both <code>elif</code> and <code>else</code> statements must follow
          the same syntax as the <code>if</code> statement, ending their code
          block with a {'{'}
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">Example Code:</h3>
        <p className="text-sm md:text-base">
          Below is an example of how <code>elif</code> and <code>else</code>{' '}
          statements work:
        </p>
        <pre className="bg-gray-100 p-2 rounded text-sm md:text-base">
          {`if x > 10 {
    result = 100;
} elif x == 10 {
    result = 50;
} else {
    result = 0;
}`}
        </pre>

        <h3 className="font-bold mt-4 text-md md:text-lg">Your Turn!</h3>
        <p className="text-sm md:text-base">
          Try writing your own <code>elif</code> and <code>else</code>{' '}
          statements using the example above as a guide. Experiment with
          different conditions to see how the program behaves.
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
            execute for each condition.
          </li>
          <li>
            Test your conditions thoroughly to understand how they affect the
            flow of your program.
          </li>
        </ul>

        <div className="flex items-center mt-4">
          <Link
            className="rounded-lg flex items-center bg-red-800 hover:bg-red-600 text-white p-2 mr-2"
            to="/tutorial/3"
          >
            <ArrowLeft />
            <span>Previous</span>
          </Link>
          <Link
            className="rounded-lg flex items-center bg-gray-800 hover:bg-gray-600 text-white p-2"
            to="/tutorial/5"
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
          {loading && (
            <h3 className="text-md mt-12 md:text-lg">
              Compiling Code in Remote Server...
            </h3>
          )}
          {error && (
            <h3 className="text-md mt-12 md:text-lg text-red-500">
              An error occurred. Please try again.
            </h3>
          )}
          {compilerError.show && (
            <h3 className="text-md mt-12 md:text-lg text-red-500">
              Compilation Error: {compilerError.message}
            </h3>
          )}
          {output && (
            <pre className="text-md mt-12 bg-gray-100 p-2 rounded">
              {output}
            </pre>
          )}
        </div>
        <button
          onClick={e => compileCode(e)}
          className="absolute flex items-center justify-center top-5 right-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          <Play />
          <span className="ml-2">Run</span>
        </button>
      </div>
    </div>
  )
}
