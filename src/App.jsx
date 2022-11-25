import Header from "./components/Header";
import Home from "./pages/Home";
import Bottom from "./components/Bottom";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Construction from "./pages/Construction";
import Projects from "./pages/Projects";
import { useState } from "react";

function App() {
  const [section, setSection] = useState('home');

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: '#0B132B',
    }}>
      <Header 
        setSection={setSection}
      />

      {
        section === 'home' && <Home />
      }
      {
        section === 'contact' && <ContactMe />
      }
      {
        section === 'about' && <AboutMe />
      }
      {
        section === 'bootcamp' && <Projects />
      }
      {
        section === 'construction' && <Construction />
      }     

      <Bottom />
    </div>
  );
}

export default App;
