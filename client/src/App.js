import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import NavBar from "./Components/NavBar";
import ArtCalendar from "./Components/ArtCalendar";

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <ArtCalendar/>
    </div>
  );
}

export default App;
