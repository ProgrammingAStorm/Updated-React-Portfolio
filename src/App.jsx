import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Bottom from "./components/Bottom";
import AboutMe from "./pages/AboutMe";

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
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Home />} />
          <Route path="about" element={<AboutMe />}/>
        </Routes>
      </BrowserRouter>

      <Bottom />
    </div>
  );
}

export default App;
