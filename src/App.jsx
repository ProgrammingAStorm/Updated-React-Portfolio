import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Bottom from "./components/Bottom";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Construction from "./pages/Construction";

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Header />
      <Banner />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="contact" element={<ContactMe />} />
          <Route path="projects">
            <Route path="bootcamp" element={<Construction />} />
            <Route path="personal" element={<Construction />} />
            <Route path="toys" element={<Construction />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Bottom />
    </div>
  );
}

export default App;
