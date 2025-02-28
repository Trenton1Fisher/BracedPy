import { ArrowLeft, Play } from 'lucide-react'
import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { sendCodeToBackend } from '../../utils/sendCodeToBackend'

export default function TutorialPage6() {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [output, setOutput] = useState('')
  const [compilerError, setCompilerError] = useState({
    show: false,
    message: '',
  })

  async function compileCode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setLoading(true);
  
    setError(false);
    setCompilerError({ show: false, message: '' });
  
    try {
      const data = await sendCodeToBackend(code);
      if(!data){
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
          });
          return;
        }

        return;
      }
      if (!data.output) {
        setCompilerError({
          show: true,
          message: 'No Output Found Please try again, Please double check syntax errors',
        });
        return;
      }
  
      setOutput(data.output); 
    } catch (error) {
      console.error('Compilation error:', error);
    } finally {
      setLoading(false);
    }
  }

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

while x < 5: {
    l = x * 2;

    if x < 2: {
        result = x * 10 + (l + 4);
    } elif x < 4: {
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
        <h3 className="font-bold mt-4 text-md md:text-lg">
          Or Try This
        </h3>
        <p className="text-sm md:text-base">
          This code snippet will calculate the nth fibonacci number, change n to acheive different results
        </p>
        <pre className="bg-gray-100 p-2 rounded text-sm md:text-base">
          {`# This program computes and returns the n'th Fibonacci number.
n = 6;
f0 = 0;
f1 = 1;
i = 0;
while True:  {
    fi = f0 + f1;
    f0 = f1;
    f1 = fi;
    i = i + 1;
    if i >= n:  {
        break;
    }
}
f = f0;
`}
        </pre>

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
