import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { sendCodeToBackend } from '../../utils/sendCodeToBackend'
import CompileButton from '../../components/ui/compileButton'

export default function TutorialPage1() {
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
        setCompilerError({
          show: true,
          message: 'No output found, Please Try again and double check syntax',
        })
        return
      }

      if (!data.success) {
        if (data.error) {
          setCompilerError({
            show: true,
            message: data.error,
          })
          return
        }

        return
      }
      if (!data.output) {
        setCompilerError({
          show: true,
          message:
            'No Output Found Please try again, Please double check syntax errors',
        })
        return
      }

      setOutput(data.output)
    } catch (error) {
      console.error('Compilation error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 h-screen">
      <div className="relative col-span-1 md:col-span-2 row-span-2 border-r-4 border-blue-200 p-4 py-8 overflow-auto">
        <h2 className="text-lg md:text-xl font-bold">
          Variable Declaration Tutorial
        </h2>
        <p className="text-sm md:text-base">
          In this section, you will learn how to declare variables in our custom
          programming language. Below are the key concepts to understand:
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">
          1. Variable Declaration:
        </h3>
        <p className="text-sm md:text-base">
          To declare a variable, simply assign a value to it. For example,{' '}
          <code>x = 5;</code> declares a variable <code>x</code> and assigns it
          an integer value of 5. You must initialize every variable with a value
          at the time of declaration; uninitialized variables are not allowed.
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">
          2. Supported Data Types:
        </h3>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>
            <strong>Integers (int)</strong>: Whole numbers without a decimal
            point. For example, <code>age = 30;</code>.
          </li>
          <li>
            <strong>Floating Point Numbers (float)</strong>: Numbers with a
            decimal point. For example, <code>price = 9.99;</code>.
          </li>
          <li>
            <strong>Booleans</strong>: Represents <code>true</code> or{' '}
            <code>false</code> values. You can declare boolean variables like{' '}
            <code>isActive = true;</code>.
          </li>
        </ul>

        <h3 className="font-bold mt-4 text-md md:text-lg">3. Syntax Rules:</h3>
        <p className="text-sm md:text-base">
          Each variable declaration statement must end with a semicolon{' '}
          <code>;</code>. This is crucial to indicate the end of the statement.
          You don’t need to specify the type of the variable; the compiler will
          infer it from the value assigned.
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">Example Code:</h3>
        <p className="text-sm md:text-base">
          You can use the code editor below to practice declaring variables.
          Here are some examples to get you started:
        </p>
        <pre className="bg-gray-100 p-2 rounded text-sm md:text-base">
          {`# Declare an integer variable 
numberOfStudents = 25;  

# Declare a floating-point variable
averageScore = 85.5;    

# Declare a boolean variable
isClassActive = True;   `}
        </pre>
        <h3 className="font-bold mt-4 text-md md:text-lg">Your Turn!</h3>
        <p className="text-sm md:text-base">
          Try declaring your own variables using the examples above as a guide.
          Remember to end each statement with a semicolon. Experiment with
          different integer and float values to see how the compiler handles
          them.
        </p>

        <p className="text-sm md:text-base">
          Once you click the "Run" button, the compiler will automatically print
          the values of the variables you declared, so you can see the results
          immediately!
        </p>

        <h3 className="font-bold mt-4 text-md md:text-lg">Additional Tips:</h3>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>
            Make sure to test your code with different values to understand how
            variable declarations work.
          </li>
          <li>
            If you encounter any errors, review your syntax to ensure that you
            are using semicolons correctly and that all variables are
            initialized.
          </li>
          <li>
            Remember, the compiler will automatically display the values of your
            declared variables, making it easy to see the output of your code.
          </li>
        </ul>
        <div className="flex items-center mt-4">
          <Link
            className="rounded-lg flex 
          items-center bg-gray-800 hover:bg-gray-600 text-white p-2"
            to="/tutorial/2"
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
        <CompileButton onClickFunction={compileCode} />
      </div>
    </div>
  )
}
