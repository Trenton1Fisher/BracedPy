import express, { Request, Response } from 'express'
import cors from 'cors'
import { exec } from 'child_process'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: 'api-endpoint',
  })
)

const port = 9001

app.post('/compile', (req, res) => {
  const { code } = req.body;

  if (!code) {
    res.status(400).json({
      success: false,
      message: 'No input provided',
    });
    return
  }

  const command = '../compiler/echo';
  const child = exec(command, (err, stdout, stderr) => {
  if (err) {
    return res.status(500).json({
      success: false,
      output: stderr,
    });
  }

    res.status(200).json({
      success: true,
      output: stdout,
    });
  });

  if (child.stdin) {
    child.stdin.write(code + '\n'); 
    child.stdin.end(); 
  } else {
    res.status(500).json({
      success: false,
      message: "Couldn't write to process stdin",
    });
    return
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
