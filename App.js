//Task 4: Import components into an App component
//Develop a functional component called  App that imports and displays your  Header,   About, and Contact components.
import Header from "./h./Header";
import About from "./h./About";
import Contact from "./h./Contact";

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
