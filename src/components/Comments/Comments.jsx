import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

import { CommentItem } from 'components/CommentItem/CommentItem';
import { Loader } from 'helpers/Loader/Loader';

import { fetchMovieComments } from 'services/api';
import { StyledList } from './Comments.styled';

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const movieId = useParams().movieId;
  
  useEffect(() => {

    const fetchData = async () => {
      try { 
        setIsLoading(true)
        const data = await fetchMovieComments(movieId)
        setComments(data.results);
        setIsSuccess(true)
      } catch (error) {
        toast.error(error.message)
        setIsLoading(false)
        setIsSuccess(false)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchData(movieId);
  }, [movieId])

  return (
    <StyledList>
      {comments.length > 0 & isSuccess ? comments.slice(0, 5).map(comment => {
        return <CommentItem key={comment.id} comment={comment} />
      }) : ''}
      {isSuccess & comments.length === 0 ? 'This movie has no comments yet.' : ''}
      {isLoading && <Loader/>}
    </StyledList>
  )
}
