import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { AdditionalSection } from 'components/AdditionalSection/AdditionalSection';
import { MainSection } from 'components/MainSection/MainSection';

import { fetchMovieDetails } from 'services/api';
import { StyledContainer } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const movieId = useParams().movieId;
  
  useEffect(() => {

    try { 
      const fetchData = async movieId => {
        const data = await fetchMovieDetails(movieId)
        setMovieDetails(data);
      }
      fetchData(movieId);
    } catch (error) {
      console.log(error)
    }

  }, [movieId])

  return (
    <StyledContainer>
      <Link to="/">Go Back</Link>
      {movieDetails && <>
        <MainSection movieInfo={movieDetails} /></>}
        <AdditionalSection />


      
    </StyledContainer>
  )
}

export default MovieDetails