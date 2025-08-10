
import './App.css'
import MovieCard from './Components/MovieCard'
function App() {
  

  return (
    <>
      <h1>Welcome to My App</h1>
      <MovieCard movie={{
        title: "Inception",
        release_date: "2010-07-16",
        url: "https://example.com/inception.jpg"
      }} />
    </>
  )
}

export default App
