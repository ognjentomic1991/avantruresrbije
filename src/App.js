import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import pocetnaImage from "./pocetna.png";
import "./App.css";
import Pocetna from "./components/pocetna/Pocetna";
import VinskeTure from "./components/vinske_ture/VinskeTure";
import PesackeTure from "./components/pesacke_ture/PesackeTure";
import Izleti from "./components/izleti/Izleti";
import Festivali from "./components/festivali/Festivali";
import BiciklistickeTure from "./components/bicikilsticke_ture/BiciklistickeTure";
import AdrenalinskeTure from "./components/adrenalinske_ture/AdrenalinskeTure";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={pocetnaImage} alt="pocetna" className="App-image" />
        <button className="App-button" onClick={() => navigate("/pocetna")}>
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
        <Route path="/vinske_ture" element={<VinskeTure />} />
        <Route path="/pesacke_ture" element={<PesackeTure />} />
        <Route path="/izleti" element={<Izleti />} />
        <Route path="/festivali" element={<Festivali />} />
        <Route path="/biciklisticke_ture" element={<BiciklistickeTure />} />
        <Route path="/adrenalinske_ture" element={<AdrenalinskeTure />} />
      </Routes>
    </Router>
  );
}

export default App;
