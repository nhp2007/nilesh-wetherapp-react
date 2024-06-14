// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
// import './App.css';
import Weather from "./weatherapp/weatherapp";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Weather/>}/>
        </Routes>
    </div>
  );
}

export default App;
