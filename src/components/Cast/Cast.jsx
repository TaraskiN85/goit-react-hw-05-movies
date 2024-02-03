import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ActorCard } from 'components/ActorCard/ActorCard';
import { fetchMovieCast } from 'services/api';
import { Loader } from 'helpers/Loader/Loader';

import { CastContainer } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const movieId = useParams().movieId;
  
  useEffect(() => {
    const fetchData = async () => {
      try { 
        setIsLoading(true)
        const data = await fetchMovieCast(movieId)
      setMovieCast(data.cast);
      } catch (error) {
        setIsLoading(false)
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData(movieId);
  }, [movieId])

  return (
    <CastContainer>
      {movieCast.length > 0 && movieCast.filter(actor => actor.profile_path !== null).slice(0, 15).map(actor => {
        return <ActorCard key={actor.name} actor={actor} />
      })}
      {isLoading && <Loader/>}
    </CastContainer>)
}

export default Cast