import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import MyClassComponent from './components/MyClassComponent';


function App() {
  return (
    <div className="App">
      <h1>This is the parent component</h1>
      <MyClassComponent myCity ="Hartland"/>
      <MyComponent/>
    </div>

  );
}
export default App;



/*
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
    Learn React
  </a>
</header>
</div>
*/
