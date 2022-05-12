import './App.css';
import Header from "./components/Header"
import Files from './components/Files';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Files />}/>
          <Route path="/features" element={<Features />}/>
          {/* <Route path="/disclaimer" element={<Disclaimer />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
