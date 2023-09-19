import { useState } from 'react';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send code and user input to the backend for compilation and execution
      const response = await fetch('http://localhost:3001/api/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input }), // Include 'input' in the request body
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-4">Online Compiler</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows="10"
          cols="50"
          className="w-full p-2 border rounded-lg mb-4"
          placeholder="Enter your code here"
        />
        <label className="block mb-4">
          User Input:
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter input (optional)"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Compile & Execute
        </button>
      </form>
      <div className="bg-white mt-4 w-[32%] p-2 rounded-lg shadow-md">
        <h2 className="text-xl ">{output}</h2>
        {/* <pre>{output}</pre> */}
      </div>
    </div>
  );
}

export default CodeEditor;
