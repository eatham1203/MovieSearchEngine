import './App.css'
import {MovieCard} from './components/MOvieCard'

function App() {
  return (
    <>
      <MovieCard movie={{title: "Tim's Film", release_date: "2024"}}/>
      <MovieCard movie={{title: "Joe's Film", release_date: "2020"}}/>
    </>
  )
}

export default App
