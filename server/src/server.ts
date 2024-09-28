import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)

const port = 3000

app.post('/compile', (req: Request, res: Response) => {
  const { code } = req.body

  if (!code) {
    res.status(400).json({
      success: false,
      message: 'No code provided',
    })
    return
  }

  const compiledOutput = `${code}`
  //Now we need to compile the code and get it from stdout
  res.status(200).json({
    success: true,
    output: compiledOutput,
  })
  return
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
