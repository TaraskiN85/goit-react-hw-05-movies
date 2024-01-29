import React from 'react'
import { useLocation } from 'react-router-dom';

import { POSTER_URL } from 'services/api'

import { StyledItem, StyledTitle } from './TrendMovieItem.styled';

export const TrendMovieItem = ({ movieData }) => {
  const location = useLocation();
  const { title, id, poster_path, release_date, } = movieData;
  const release_year = release_date.slice(0, 4)

  return (
    <StyledItem to={`/movies/${movieData.id}`} state={{ from: location }}>
        <li key={id}>
          <img style={{ width: '100%' }} src={`${POSTER_URL}${poster_path}`} alt={`${title} poster`} />
          <StyledTitle>{title} ({release_year})</StyledTitle>
        </li>
    </StyledItem>
  )
}
