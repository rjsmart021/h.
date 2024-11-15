//Task 4: Import components into an App component
//Develop a functional component called  App that imports and displays your  Header,   About, and Contact components.
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

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
