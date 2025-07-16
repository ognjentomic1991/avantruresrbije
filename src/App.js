import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import pocetnaImage from './pocetna.png';
import './App.css';
import Pocetna from './components/pocetna/pocetna'; // Ispravljen put do fajla pocetna.js
import Vinske_ture from './components/vinske_ture/vinske_ture';
import Pesacke_ture from './components/pesacke_ture/pesacke_ture';
import Izleti from './components/izleti/izleti';
import Festivali from './components/festivali/festivali';
import Biciklisticke_ture from './components/bicikilsticke_ture/bicikilsticke_ture';
import Adrenalinske_ture from './components/adrenalinske_ture/adrenalinske_ture';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={pocetnaImage} alt="pocetna" className="App-image" />
        <button className="App-button" onClick={() => navigate('/pocetna')}>
          KRENI U AVANTURU
        </button>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pocetna" element={<Pocetna />} />
        <Route path="/vinske_ture" element={<Vinske_ture />} />
        <Route path="/pesacke_ture" element={<Pesacke_ture />} />
        <Route path="/izleti" element={<Izleti />} />
        <Route path="/festivali" element={<Festivali />} />
        <Route path="/biciklisticke_ture" element={<Biciklisticke_ture />} />
        <Route path="/adrenalinske_ture" element={<Adrenalinske_ture />} />
      </Routes>
    </Router>
  );
}

export default App;