import React from 'react'
import { POSTER_URL } from 'services/api'
import { StyledItem, StyledTitle } from './TrendMovieItem.styled';

export const TrendMovieItem = ({ movieData }) => {
  const { title, id, poster_path, release_date, } = movieData;
  const release_year = release_date.slice(0, 4)
  console.log(movieData)
  return (
    <StyledItem to={`/movies/${movieData.id}`}>
        <li key={id}>
          <img style={{ width: '100%' }} src={`${POSTER_URL}${poster_path}`} alt={`${title} poster`} />
          <StyledTitle>{title} ({release_year})</StyledTitle>
        </li>
    </StyledItem>
  )
}
