import logo from './logo.svg';
import './App.css';
import Demo from './shared-modules/demo/Demo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Version 1.4
          <Demo />
        </p>
      </header>
    </div>
  );
}

export default App;
