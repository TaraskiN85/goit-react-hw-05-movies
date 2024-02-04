import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { MovieCard } from 'components'

import { Loader } from 'helpers/Loader/Loader'
import { fetchSearchedMovies } from 'services/api'

import { Form, MoviesContainer, StyledMovies } from './Movies.styled'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation()
  
  const query = searchParams.get('q')

  useEffect(() => {
    if (query === null) return

    const fetchMovie = async (searchTerm) => {
      try {
        setIsLoading(true)
        const data = await fetchSearchedMovies(searchTerm)
        const validData = data.results.filter(movie => {
          return movie.poster_path !== null & movie.backdrop_path !== null
        })
        setMovies(validData)
      } catch (error) {
        toast.error(error.message)
        setIsLoading(false)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchMovie(query)
  }, [query])
  const handleSearch = (e) => {
    e.preventDefault()
    const searchTerm = e.currentTarget.elements.search.value
    setSearchParams({q: searchTerm})
  }

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <input type="text" name="search" defaultValue={query} placeholder='search...'/>
        <button type='submit' >Search</button>
      </Form>
      <MoviesContainer>
        {movies.length > 0 && movies.map(movie => 
          <StyledMovies to={`/movies/${movie.id}`} state={{from: location}} key={movie.id} ><MovieCard movieInfo={movie} /></StyledMovies>
        )}
      </MoviesContainer>
      {isLoading && <Loader/>}
    </div>
  )
}

export default Movies
