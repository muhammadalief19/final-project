import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Load from "./components/Load";
import Partner from "./pages/Partner";
import Member from "./pages/Member";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Load />
      <div className="w-full relative overflow-x-hidden">
        <Navbar name={"Iyek Company"} />
        <Dashboard />
        <About />
        <Partner />
        <Member />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
