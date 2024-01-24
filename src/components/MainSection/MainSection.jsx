import React from 'react'
import { POSTER_URL } from 'services/api'
import { BgContainer, DescriptionContainer, DetailsContainer, StyledList, StyledSection, TitleContainer } from './MainSection.styled';

export const MainSection = ({movieInfo}) => {
  
  const { backdrop_path, poster_path, title, genres, overview, release_date, vote_average } = movieInfo
  // console.log(genres)
  const genresList = genres.map(genre => genre.name).join(", ");
  const release_year = release_date.slice(0, 4)

  return (
    <StyledSection>
      <BgContainer imgUrl={`${POSTER_URL}${backdrop_path}`}></BgContainer>
      <DetailsContainer>
        <img src={`${POSTER_URL}${poster_path}`} alt={`${title} poster`} style={{ maxWidth: '100%' }} />
        <DescriptionContainer>
          <TitleContainer>
            <h3>{title} ({release_year})</h3>
            <p>user Score: {vote_average}</p>
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

// adult // false
// backdrop_path // : // "/VvRIlfsBCLLXoPty0hf21ek6b6.jpg"
// genre_ids// : // (4) [16, 28, 14, 12]
// id// : // 1230393
// media_type// : // "movie"
// original_language// : // "ja"
// original_title // : // "MONSTERS 一百三情飛龍侍極"
// overview// : // "A samurai's path leads him to a young waitress whose hometown was destroyed by a dragon. He doesn't want any trouble — but it finds them anyway."
// popularity// : // 28.93
// poster_path// : // "/yG8QKnaiz7JoIMh3oxdm0JJN6IG.jpg"
// release_date// : // "2024-01-21"
// title// : // "Monsters 103 Mercies Dragon Damnation"
// video// : // false
// vote_average// : // 8.125
// vote_count// : // 20
// [[Prototype]]// : // Object