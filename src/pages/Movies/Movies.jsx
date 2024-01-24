import React, { useState } from 'react'
import { fetchSearchedMovies } from 'services/api'
import { MoviesContainer, StyledMovies } from './Movies.styled'
import { MovieCard } from 'components/MovieCard/MovieCard'

const Movies = () => {

  const [movies, setMovies] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    const searchTerm = e.currentTarget.elements.search.value
    console.log(searchTerm)
    const fetchMovie = async (searchTerm) => {
      try {
        const data = await fetchSearchedMovies(searchTerm)
        setMovies(data.results)
        console.log(data.results)
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchMovie(searchTerm)
    e.currentTarget.reset();
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">
          <input type="text" name="search" placeholder='search...'/>
          <button type='submit'>Search</button>
        </label>
      </form>
      <MoviesContainer>
        {movies.length > 0 && movies.map(movie => 
          <StyledMovies to={`/movies/${movie.id}`} key={movie.id} ><MovieCard movieInfo={movie} /></StyledMovies>
        )}
      </MoviesContainer>
    </div>
  )
}

export default Movies


// backdrop_path: null
// genre_ids: []
// id: 1192753
// original_language: "en"
// original_title: "Love"
// overview: "Love explores the shapeshifting nature of language on the internet. In the video, images extracted from Instagram—all found under #love—are transformed and integrated with original footage shot by the artist. #love is the most used hashtag on Instagram and currently there are over 2 billion posts tagged in this way. Connecting seemingly disparate images, Love tries to understand and link all of the possible associations of a given word at a single moment in time through narrative. A voiceless narrator—a loose personification of the Instagram platform or perhaps even the internet itself—addresses the viewer in the form of a love letter."
// popularity: 0.846
// poster_path: "/9rH0yCe7CPyToe8tg7YowDCui7D.jpg"
// release_date: "2023-10-27"
// title: "Love"
// video: false
// vote_average: 0
// vote_count: 0