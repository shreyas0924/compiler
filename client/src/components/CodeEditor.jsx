import { useState } from 'react'
import { Editor } from '@monaco-editor/react'
import CodeHeader from './CodeHeader'

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
    <main className='bg-[#2c2f34]'>
      <CodeHeader />
      <div className=' min-h-screen flex flex-row border-t border-gray-500 '>
        <form
          onSubmit={handleSubmit}
          className='bg-[#2c2f34]   shadow-md w-3/5 border-r border-gray-500'
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
          <div className='px-2'>
            <label className='block mb-4 text-white mt-4'>
              User Input:
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='w-1/2 mx-3 text-black p-2 border outline-none rounded-lg'
                placeholder='Enter input (optional)'
              />
            </label>
            <button
              type='submit'
              className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
            >
              Compile & Execute
            </button>
          </div>
        </form>
        <div className='bg-[#2c2f34] ml-2 p-2 w-2/5 h-screen  shadow-md'>
          <h2 className='text-xl text-white'>
            Output :<br /> {output}
          </h2>
        </div>
      </div>
    </main>
  )
}

export default CodeEditor
