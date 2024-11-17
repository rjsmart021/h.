//Task 4: Import components into an App component
//Develop a functional component called  App that imports and displays your  Header,   About, and Contact components.
import Header from "./h./Header.html";
import About from "./h./About.html";
import Contact from "./h./Contact.html";

function App() {

  return (
    <>
      <Header />
      <About />
      <Contact />
    </>
  );
};

export default App
import logo from './logo.svg';
import './app.css';

function App() {
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
