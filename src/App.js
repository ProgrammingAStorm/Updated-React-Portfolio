import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      
      <BrowserRouter>

      </BrowserRouter>
    </div>
  );
}

export default App;
