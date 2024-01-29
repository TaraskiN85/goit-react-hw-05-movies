import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

import { AdditionalSection } from 'components/AdditionalSection/AdditionalSection';
import { MainSection } from 'components/MainSection/MainSection';

import { fetchMovieDetails } from 'services/api';
import { Loader } from 'helpers/Loader/Loader';

import { StyledContainer, StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation();

  const movieId = useParams().movieId;
  const backLinkHref = location.state?.from ?? "/"
  
  useEffect(() => {

    try { 
      setIsLoading(true)
      const fetchData = async movieId => {
        const data = await fetchMovieDetails(movieId)
        setMovieDetails(data);
      }
      fetchData(movieId);
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }

  }, [movieId])

  return (
    <StyledContainer>
      <StyledLink to={backLinkHref}>Go Back</StyledLink>
      {movieDetails && <>
        <MainSection movieInfo={movieDetails} />
      </>}
      {isLoading && <Loader/>}
      <AdditionalSection />
    </StyledContainer>
  )
}

export default MovieDetails