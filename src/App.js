import logo from './logo.svg';
import './App.css';
import _ from 'loadsh'

function App() {
  const arr = ['hello ', 'world!']
  const t = _.join(arr)
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello feature</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello + Dev + feature</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Good:{t}</p>
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
