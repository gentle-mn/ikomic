import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Comic from "./pages/Comic";
import Manga from "./pages/Manga";
import Merchandise from "./pages/merchandise";
import Marvel from "./Marvel";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comic" exact element={<Comic />} />
            <Route path="/manga" element={Manga} />
            <Route path="/merchandise" element={Merchandise} />
            <Route path="/marvel" element={<Marvel/>} />
            <Route path="/:id" element={<Comic/>} />
          </Routes>
          <div className="sticky top-[100vh]">
          <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
