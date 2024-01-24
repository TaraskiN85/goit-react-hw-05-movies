import React from 'react'
import { POSTER_URL } from 'services/api';
import { CardContainer } from './ActorCard.styled';

export const ActorCard = ({ actor }) => {
  
  const { name, profile_path, original_name, character } = actor;
  return (
      <CardContainer>
        <img src={`${POSTER_URL}${profile_path}`} alt={`${original_name}`} />
        <h4>{name}</h4>
        <h5>{character}</h5>
      </CardContainer>
    )
}
