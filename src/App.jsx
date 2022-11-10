import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar name={'Iyek Company'} />
        <div className="w-full">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
