import { CommentItem } from 'components/CommentItem/CommentItem';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieComments } from 'services/api';
import { StyledList } from './Comments.styled';

export const Comments = () => {
  // console.log(params)
  const [comments, setComments] = useState([]);

  const movieId = useParams().movieId;
  
  useEffect(() => {

    const fetchData = async () => {
    try { 
        const data = await fetchMovieComments(movieId)
      setComments(data.results);
      console.log(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchData(movieId);
  }, [movieId])

  return (
    <StyledList>
      {comments.length > 0 && comments.slice(0, 5).map(comment => {
        return <CommentItem key={comment.id} comment={comment} />
      })}
    </StyledList>
  )
}
