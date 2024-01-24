import React from 'react'
import { StyledItem } from './CommentsItem.styled'

export const CommentItem = ({ comment }) => {
  return (
    <StyledItem>
      <h4>Author: {comment.author}</h4>
      <p>{comment.content}</p>
    </StyledItem>
  )
}
