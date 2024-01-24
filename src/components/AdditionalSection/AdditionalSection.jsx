import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Cast } from 'components/Cast/Cast'
import { Comments } from 'components/Comments/Comments'
import { HeaderContainer, MainContainer, StyledLink, StyledSection } from './AdditionalSection.styled'


export const AdditionalSection = () => {
  return (
    <StyledSection>
      <HeaderContainer>
        <h3>Additional Info</h3>
        <StyledLink to='cast'>Cast</StyledLink>
        <StyledLink to='comments'>Comments</StyledLink>
      </HeaderContainer>
      <MainContainer>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="comments" element={<Comments />} />
        </Routes>
      </MainContainer>
    </StyledSection>
  )
}
