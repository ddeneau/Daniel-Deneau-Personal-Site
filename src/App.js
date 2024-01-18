import './App.css';
import Home from './Screens/Home'
import Film from './Screens/Film';
import Software from './Screens/Software';
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/Navigation/NavigationBar';

function App() {
  return (
      <div>
        <BrowserRouter>
          <div className="flex flex-row justify-center">
            <Header/>
            <NavigationBar/>
          </div>
          <Routes>
            <Route path="/film" element={<Film></Film>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/software" element={<Software></Software>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
