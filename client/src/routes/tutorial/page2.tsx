import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'

export default function TutorialPage2() {
  const [code, setCode] = useState('')

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 h-screen">
      <div className="relative col-span-1 md:col-span-2 row-span-2 border-r-4 border-blue-200 p-4 py-8 overflow-auto">
        <h2 className="text-lg md:text-xl font-bold">
          Basic Operations Tutorial
        </h2>
        <p className="text-sm md:text-base">
          In this section, you will learn about the basic arithmetic operations
          supported in our custom programming language. Below are the key
          concepts to understand:
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">
          1. Supported Operations:
        </h3>
        <p className="text-sm md:text-base">
          The language supports the following basic arithmetic operations:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>
            <strong>Addition (+)</strong>: Combines two numbers to produce a
            sum. For example, <code>a = 10 + 5;</code>
          </li>
          <li>
            <strong>Subtraction (-)</strong>: Calculates the difference between
            two numbers. For example, <code>b = 20.5 - 3.2;</code>
          </li>
          <li>
            <strong>Multiplication (*)</strong>: Multiplies two numbers
            together. You can combine <code>int</code> and <code>float</code>{' '}
            values, like <code>c = 4 * 2.5;</code>
          </li>
          <li>
            <strong>Division (/)</strong>: Divides one number by another. Note
            that dividing integers can yield a floating-point result, such as{' '}
            <code>d = 9 / 2;</code>
          </li>
        </ul>

        <h3 className="font-bold mt-4 text-md md:text-lg">
          2. Combining Types:
        </h3>
        <p className="text-sm md:text-base">
          You can combine <code>int</code> and <code>float</code> values in your
          operations. The result will always follow the usual mathematical
          rules. For example, adding an integer and a floating-point number will
          yield a floating-point result.
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">Example Code:</h3>
        <p className="text-sm md:text-base">
          You can use the code editor below to practice basic arithmetic
          operations. Here are some examples to get you started:
        </p>
        <pre className="bg-gray-100 p-2 rounded text-sm md:text-base">
          {`# Addition
  a = 10 + 5;      # int addition
  
  # Subtraction
  b = 20.5 - 3.2;  # float subtraction
  
  # Multiplication
  c = 4 * 2.5;     # int and float multiplication
  
  # Division
  d = 9 / 2;       # float division (result is a float)`}
        </pre>

        <h3 className="font-bold mt-4 text-md md:text-lg">Additional Tips:</h3>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>
            Experiment with different values to understand how arithmetic
            operations work in your code.
          </li>
          <li>
            If you encounter any errors, double-check your syntax and ensure
            that you are using valid operations.
          </li>
          <li>
            Remember, the compiler will automatically display the results of
            your operations, making it easy to see the outputs of your code.
          </li>
        </ul>

        <h3 className="font-bold mt-4 text-md md:text-lg">
          Try Some Advanced Operations:
        </h3>
        <p className="text-sm md:text-base">
          As you become more comfortable with basic operations, try out more
          advanced expressions! For example, you can experiment with:
        </p>
        <pre className="bg-gray-100 p-2 rounded text-sm md:text-base">
          {`l = (10 + 8 * z) - 9 * 7;`}
        </pre>
        <p className="text-sm md:text-base">
          This expression combines addition, multiplication, and subtraction,
          showcasing how operations can be nested.
        </p>

        <div className="flex items-center mt-4">
          <Link
            className="rounded-lg flex items-center bg-red-800 hover:bg-red-600 text-white p-2 mr-2"
            to="/tutorial/1"
          >
            <ArrowLeft />
            <span>Previous</span>
          </Link>
          <Link
            className="rounded-lg flex items-center bg-gray-800 hover:bg-gray-600 text-white p-2"
            to="/tutorial/3"
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
