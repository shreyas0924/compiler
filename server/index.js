const express = require('express')
const bodyParser = require('body-parser')
const { exec } = require('child_process')
const fs = require('fs')
const cors = require('cors')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())

app.post('/api/compile', (req, res) => {
  const { code } = req.body

  // Write the C code to a file
  const cCodePath = 'code.c'
  fs.writeFileSync(cCodePath, code)

  // Compile the C code using gcc
  exec(
    `gcc ${cCodePath} -o output`,
    (compileError, compileStdout, compileStderr) => {
      if (compileError) {
        console.error('Compilation Error:', compileError)
        return res.json({ output: compileStderr })
      }

      // Run the compiled binary
      exec('./output', (execError, execStdout, execStderr) => {
        if (execError) {  
          console.error('Execution Error:', execError)
          return res.json({ output: execStderr })
        }

        res.json({ output: execStdout })
      })
    }
  )
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
