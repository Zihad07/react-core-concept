import logo from './logo.svg';
import './App.css';

function App() {
  let dateStyle = {
    color:'cyan',
    border: '1px solid',
    padding: '10px'
  }
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React with FUN :)
        </a>
        <h2 style={dateStyle}>Today : { new Date().toDateString() }</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, itaque?</p>
        <p>Simple math : {2+4*4}</p>

      </header>
    </div>
  );
}

export default App;
