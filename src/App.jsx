
import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from './data'
// import Tours from "./components/Tours";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import NutritionChecker from "./components/NutritionCheck";
import Bmr from "./components/Bmr";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <Navbar></Navbar><br></br>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/NutritionCheck" element={<NutritionChecker />} />
        <Route path="/Health" element={<Bmr />} />
      </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Tours tours={tours} removeTour={removeTour}></Tours> */}
    </div>
  )
};

export default App;