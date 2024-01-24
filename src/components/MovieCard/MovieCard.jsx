import React from 'react'
import { Description, StyledInfo } from './MovieCard.styled'
import { POSTER_URL } from 'services/api'

export const MovieCard = ({ movieInfo }) => {
 
  const { poster_path, release_date, title, vote_average, vote_count, popularity, overview } = movieInfo;

  const release_year = release_date.slice(0, 4)
  console.log(movieInfo)

  return (
    <StyledInfo>
      <img src={`${POSTER_URL}${poster_path}`} alt={`movie ${title} poster`} />
      <Description>
        <h3>{title} ({release_year})</h3>
        <p><span>Overview</span>{overview}</p>
        <div>
          <p><span>Votes</span>{vote_average}</p>
          <p><span>Viewed</span>{vote_count}</p>
          <p><span>Popularity</span>{popularity}</p>
        </div>

      </Description>
    </StyledInfo>
  )
}
