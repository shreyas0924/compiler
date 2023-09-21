import { useState } from 'react'
import { Editor } from '@monaco-editor/react'

function CodeEditor() {
  const [code, setCode] = useState('')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleEditorChange = (value) => {
    setCode(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3001/api/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input }),
      })

      const data = await response.json()
      setOutput(data.output)
    } catch (error) {
      console.log('Error:', error)
    }
  }

  return (
    <>
      <div className='bg-black min-h-screen flex flex-row '>
        {/* <h1 className='text-3xl mb-4'>Online Compiler</h1> */}

        <form
          onSubmit={handleSubmit}
          className='bg-[#2c2f34] p-5  shadow-md w-3/5'
        >
          <Editor
            value={code}
            height='60vh'
            width='100%'
            language='c'
            theme='vs-dark'
            defaultValue={`/* \n Enter your code here \n*/`}
            onChange={handleEditorChange}
          />

          <label className='block mb-4 text-white mt-4'>
            User Input:
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='w-full text-black p-2 border outline-none rounded-lg'
              placeholder='Enter input (optional)'
            />
          </label>
          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
          >
            Compile & Execute
          </button>
        </form>
        <div className='bg-[#2c2f34] ml-2 p-2 w-2/5 h-screen  shadow-md'>
          <h2 className='text-xl text-white'>Output :<br /> {output}</h2>
        </div>
      </div>
    </>
  )
}

export default CodeEditor
