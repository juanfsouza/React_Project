import logo from './logo.svg';
import './App.css';

import RenderCond from './components/RenderCond';
import Images from './components/images';
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Images />
        <AnotherComponent />
        <FirstComponent />
        <RenderCond y={11} />  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
