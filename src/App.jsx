import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import MovieList from "./components/MovieList"
import MovieDetails from "./pages/MovieDetails"
import Favorites from "./components/Favorites"


function App() {

  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path="/movie/:id" element={<MovieDetails/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
    </Routes>
    </>
  )
}

export default App
