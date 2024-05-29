import React from 'react';
import './App.css';
import { createHeader } from './components/header';

function App() {
  React.useEffect(() => {
    const appElement = document.getElementById('app');
    const header = createHeader();
    appElement.appendChild(header);
  }, []);

  return (
    <div className="App">
      <div id="particles-js"></div>
      <div id="app"></div>
    </div>
  );
}

export default App;
