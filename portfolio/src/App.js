import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import Solarsystem from './Solarsystem';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
        path="/"
        element={<LandingPage />}>
        </Route>
        <Route
        path="/sinaverse"
        element={<Solarsystem />}>
        </Route>
        </Routes>
    </BrowserRouter>



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* </header> */}
    </>
  );
}

export default App;
