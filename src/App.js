import './App.css';
import Home from './Screens/Home'
import Film from './Screens/Film';
import Software from './Screens/Software';
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from "./Components/Navigation/NavigationBar"

function App() {
  return (
      <div>
        <BrowserRouter>
          <Header/>
          <NavigationBar/>
          <Routes>
            <Route path="/software" element={<Film></Film>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/film" element={<Software></Software>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
