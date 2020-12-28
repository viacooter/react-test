import logo from './logo.svg';
import './App.css';
import _u from 'underscore'

function App() {
  const arr = ['Hi ', ' Abo']
  const str = _u.join(arr)
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello feature</h2>
        <p>God:{str}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
