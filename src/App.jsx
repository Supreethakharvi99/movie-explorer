import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import MovieList from "./components/MovieList"
import MovieDetails from "./pages/MovieDetails"


function App() {

  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path="/movie/:id" element={<MovieDetails/>}/>
    </Routes>
    </>
  )
}

export default App
