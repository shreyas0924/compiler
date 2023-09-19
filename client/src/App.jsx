import { useState } from 'react';

function CompilerApp() {
  const [code, setCode] = useState('');
  const [input, setInput] = useState(''); // Add 'input' state

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
    <div>
      <h1>Online Compiler</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows='10'
          cols='50'
        />
        <label>
          User Input:
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button type='submit'>Compile & Execute</button>
      </form>
      <div>
        <h2>Output</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default CompilerApp;
