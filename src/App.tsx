import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PhotoDetail from "./pages/PhotoDetail";

const App = () => {
  return (
    <main className="max-w-screen overflow-hidden bg-slate-100 min-h-screen">
      <section className="max-w-5xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo/:id" element={<PhotoDetail />} />
        </Routes>
        <Footer />
      </section>
    </main>
  );
};

export default App;
