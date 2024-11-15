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
