import express, { Request, Response } from 'express';
import cors from 'cors';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'https://braced.trentonfisher.xyz',
  })
);

const port = 9001;

app.post('/compile', (req, res) => {
  const { code } = req.body;

  if (!code) {
    res.status(400).json({
      success: false,
      message: 'No input provided',
    });
    return;
  }

  const inputFilePath = path.join('./', 'input.py');
  const outputFilePath = path.join('./', 'output.c');
  const compiledFilePath = './parse';

  fs.writeFileSync(inputFilePath, code, 'utf8');

  const interpreterCommand = `../compiler/a.out < ${inputFilePath} > ${outputFilePath}`;
  exec(interpreterCommand, (err, stdout, stderr) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Error executing the compiler',
        error: stderr || err.message,
      });
      return;
    }

    const timeout = 7000;
    const compileCommand = `gcc ${outputFilePath} -o ${compiledFilePath}`;
    exec(compileCommand, { timeout }, (err, stdout, stderr) => {
      if (err) {
        console.log(err)
        if (typeof err.code === 'string' && err.code === 'ETIMEDOUT') {
          res.status(500).json({
            success: false,
            message: 'Code execution took too long. Please double-check your loop conditions.',
          });
        } else {
          res.status(500).json({
            success: false,
            error: err.message,
          });
        }
        return;
      }

      exec(compiledFilePath, { timeout }, (err, stdout, stderr) => {
        if (err) {
          console.log(err.signal)
          if ( err.signal === 'SIGTERM') {
            res.status(500).json({
              success: false,
              error: 'Code execution took too long. Please double-check your loop conditions if any or double check syntax.',
            });
          } else {
            res.status(500).json({
              success: false,
              message: 'Error running the compiled C code',
              error: stderr || err.message,
            });
          }
          return;
        }

        res.status(200).json({
          success: true,
          output: stdout,
        });

        fs.unlinkSync(inputFilePath);
        fs.unlinkSync(outputFilePath);
        fs.unlinkSync(compiledFilePath);
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

