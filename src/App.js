import './App.css';
import Home from './Screens/Home'
import Film from './Screens/Film';
import Software from './Screens/Software';
import Header from './Components/Header'
import FilmPage from './Components/FIlm/FilmPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/Navigation/NavigationBar';
import poster_aa from './Components/Images/poster_aa.jpg';
import poster_ss from './Components/Images/sample_space.png'

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
              <Route path="/asocial" element={<FilmPage title="Asocial Artist" posterSrc={poster_aa} altText={"poster for Asocial Artist"} description="After an injury impacts his ability to paint, an artist must get back into the habit." credits="Dana Nehdaran, Lily Sayre"></FilmPage>}></Route>
              <Route path="/sample_space" element={<FilmPage title="Sample Space" posterSrc={poster_ss} description="A group of bartenders gets interrupted during closing by two strange men" credits="Kevin Bencosme, Veronica Dang, Jamiee Giorgi, Krystan Mompere, Nick Menendez, Ralf Ruevers, Justin Mendez"></FilmPage>}></Route>
            <Route path="/hot_jazz_saturday_night" element={<FilmPage title="Hot Jazz" description="Radio host Rob gives a tour of his basement studio while telling the brief history of his show"></FilmPage>}></Route>
            <Route path="/hunch" element={<FilmPage title="Hunch" description="A group of bartenders gets interrupted during closing by two strange men"></FilmPage>}></Route>
              <Route path="/haunted" element={<FilmPage title="Jack is Haunted" description="A decoration"></FilmPage>}></Route>
          </Routes>
          </BrowserRouter>
          <p className="flex justify-center ">&copy; 2026 Daniel Deneau</p>
      </div>
  );
}

export default App;
