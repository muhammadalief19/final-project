import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Load from './components/Load';
import Partner from './pages/Partner';
import Member from './pages/Member';

function App() {
  return (
    <>
      <Load />
      <div className="w-full">
        <Navbar name={'Iyek Company'} />
        <div className="w-full">
          <Dashboard />
          <About />
          <Partner/>
          <Member />
        </div>
      </div>
    </>
  );
}

export default App;
