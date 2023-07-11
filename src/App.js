import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    setDisplayedText(text);
  };

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <textarea
          placeholder="Enter some text..."
          value={text}
          onChange={handleTextAreaChange}
        />
        <button onClick={handleButtonClick}>Display Text</button>
        <p>{displayedText}</p>
      </main>
      <footer>
        <p>nodejs is fun</p>
      </footer>
    </div>
  );
}

export default App;
