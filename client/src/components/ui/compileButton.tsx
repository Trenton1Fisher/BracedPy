import { Play } from 'lucide-react'

interface CompileButtonProps {
  onClickFunction: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>
}

export default function CompileButton({ onClickFunction }: CompileButtonProps) {
  return (
    <button
      onClick={onClickFunction}
      className="absolute flex items-center justify-center top-5 right-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
    >
      <Play />
      <span className="ml-2">Run</span>
    </button>
  )
}
