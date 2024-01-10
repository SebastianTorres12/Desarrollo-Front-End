import '../App.css'
import { Movies } from '../components/Movies'
import { useMovies } from '../hooks/useMovies.js'
import { useEffect, useRef, useState } from 'react'

function useSearch() {

  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  const isFirstInput = useRef(true)

  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puedo buscar pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar con solo numeros')
      return
    }

    if (search.length < 3) {
      setError('No se puedo buscar menos de 3 caracteres')
      return
    }

    setError(null)

  }, [search])

  return { search, updateSearch, error }
}



export function Home() {


  const { search, updateSearch, error } = useSearch()

  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' action="" onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} onChange={handleChange} value={search} placeholder='Buscar una Pelicula' name='query' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
