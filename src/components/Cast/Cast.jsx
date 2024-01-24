import { ActorCard } from 'components/ActorCard/ActorCard';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { CastContainer } from './Cast.styled';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);

  const movieId = useParams().movieId;
  
  useEffect(() => {
    const fetchData = async () => {
    try { 
        const data = await fetchMovieCast(movieId)
      setMovieCast(data.cast);
      console.log(data.cast)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData(movieId);
  }, [movieId])

  return (
     

    <CastContainer>
      {movieCast.length > 0 && movieCast.filter(actor => actor.profile_path !== null).slice(0, 15).map(actor => {
        return <ActorCard key={actor.name} actor={actor} />
      })}
    </CastContainer>)
}
