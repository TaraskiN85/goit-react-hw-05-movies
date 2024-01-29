import React, { useState } from 'react'

import { Button, StyledItem } from './CommentsItem.styled'

export const CommentItem = ({ comment }) => {
  const [readMore, setReadMore] = useState(true)
  const isLong = comment.content.length > 700

  return (
    <StyledItem>
      <h4>Author: {comment.author}</h4>
      {isLong && readMore && <>
        <p>{comment.content.slice(0, 500)} ...</p>
        <Button onClick={() => setReadMore(false)}>Read more</Button>
      </>}
      {isLong && !readMore && <>
        <p>{comment.content}</p>
        <Button onClick={() => setReadMore(true)}>Collapse</Button>
      </>}
      {!isLong && <p>{comment.content}</p>}
    </StyledItem>
  )
}
