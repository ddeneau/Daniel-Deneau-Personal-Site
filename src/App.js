import './App.css';
import Home from './Screens/Home'
import Film from './Screens/Film';
import Software from './Screens/Software';
import Header from './Components/Header'
import FilmPage from './Components/FIlm/FilmPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/Navigation/NavigationBar';

function App() {
  return (
      <div>
        <BrowserRouter>
          <div className="flex flex-col justify-center bg-slate-600">
            <Header/>
            <NavigationBar/>
          </div>
          <Routes>
            <Route path="/film" element={<Film></Film>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/software" element={<Software></Software>}></Route>
                  <Route path="/sample_space" element={<FilmPage title="Sample Space" description="A group of bartenders gets interrupted during closing by two strange men" credits="Kevin Bencosme, Veronica Dang, Jamiee Giorgi, Krystan Mompere, Nick Menendez, Ralf Ruevers, Justin Mendez"></FilmPage>}></Route>
            <Route path="/hot_jazz_saturday_knight" element={<FilmPage title="Sample Space" description="Radio host Rob gives a tour of his basement studio while telling the brief history of his show"></FilmPage>}></Route>
            <Route path="/knights" element={<FilmPage title="Sample Space" description="A group of bartenders gets interrupted during closing by two strange men"></FilmPage>}></Route>
          </Routes>
          </BrowserRouter>
          <p className="flex justify-center ">&copy; 2025 Daniel Deneau</p> 
      </div>
  );
}

export default App;
