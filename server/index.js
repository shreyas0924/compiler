const express = require('express')
const bodyParser = require('body-parser')
const { exec } = require('child_process')
const fs = require('fs')
const path = require('path') 
const cors = require('cors')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())

app.post('/api/compile', (req, res) => {
  const { code } = req.body
  
  const outputDirectory = path.join(__dirname, 'dist')

  // Create the 'dist' directory if it doesn't exist
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory)
  }

  // Write the C code to a file in the 'dist' directory
  const cCodePath = path.join(outputDirectory, 'code.c')
  fs.writeFileSync(cCodePath, code)

  // Compile the C code using gcc in the 'dist' directory
  exec(
    `gcc ${cCodePath} -o ${path.join(outputDirectory, 'output')}`,
    (compileError, compileStdout, compileStderr) => {
      if (compileError) {
        console.error('Compilation Error:', compileError)
        return res.json({ output: compileStderr })
      }

      // Run the compiled binary from the 'dist' directory
      exec(
        `${path.join(outputDirectory, 'output')}`,
        (execError, execStdout, execStderr) => {
          if (execError) {
            console.error('Execution Error:', execError)
            return res.json({ output: execStderr })
          }

          res.json({ output: execStdout })
        }
      )
    }
  )
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
