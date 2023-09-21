const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/compile', (req, res) => {
  const { code, input } = req.body; 

  const outputDirectory = path.join(__dirname, 'dist');

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }

  const cCodePath = path.join(outputDirectory, 'code.c');
  fs.writeFileSync(cCodePath, code);

  // Create an input file with user input
  const inputFilePath = path.join(outputDirectory, 'input.txt');
  fs.writeFileSync(inputFilePath, input || ''); 

  exec(
    `gcc ${cCodePath} -o ${path.join(outputDirectory, 'output')}`,
    (compileError, compileStdout, compileStderr) => {
      if (compileError) {
        console.error('Compilation Error:', compileError);
        return res.json({ output: compileStderr });
      }

      exec(
        `${path.join(outputDirectory, 'output')} < ${inputFilePath}`, // Redirect input from the 'input.txt' file
        (execError, execStdout, execStderr) => {
          if (execError) {
            console.error('Execution Error:', execError);
            return res.json({ output: execStderr });
          }

          res.json({ output: execStdout });
        }
      );
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
