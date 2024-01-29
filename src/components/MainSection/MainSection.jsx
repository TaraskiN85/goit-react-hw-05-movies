import React from 'react'

import { POSTER_URL } from 'services/api'

import { BgContainer, DescriptionContainer, DetailsContainer, StyledList, StyledP, StyledSection, TitleContainer } from './MainSection.styled';

export const MainSection = ({ movieInfo }) => {
  
  const { backdrop_path, poster_path, title, genres, overview, release_date, vote_average } = movieInfo

  const genresList = genres.map(genre => genre.name).join(", ");
  const release_year = release_date.slice(0, 4)
  const color = vote_average < 4 ? 'darkorange' : vote_average < 6 ? 'yellow' : 'mediumseagreen';
  const score = vote_average.toFixed(2)

  return (
    <StyledSection>
      <BgContainer url={`${POSTER_URL}${backdrop_path}`}></BgContainer>
      <DetailsContainer>
        <img src={`${POSTER_URL}${poster_path}`} alt={`${title} poster`} style={{ maxWidth: '100%' }} />
        <DescriptionContainer>
          <TitleContainer>
            <h3>{title} ({release_year})</h3>
              <StyledP $color={color}>User Score: {score}</StyledP>
          </TitleContainer>
          <StyledList>
            <li>
              <h4>Overview</h4>
              <p>{overview}</p>
            </li>
            <li>
              <h4>Genres</h4>
              <p>{genresList}</p>
            </li>
          </StyledList>
        </DescriptionContainer>
      </DetailsContainer>
    </StyledSection>
  )
}
