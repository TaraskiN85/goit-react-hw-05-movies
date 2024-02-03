import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { HeaderContainer, MainContainer, StyledLink, StyledSection } from './AdditionalSection.styled'
import { Loader } from 'helpers/Loader/Loader'

const Cast = lazy(() => import('../Cast/Cast'))
const Comments = lazy(() => import('../Comments/Comments'))

export const AdditionalSection = () => {
  return (
    <StyledSection>
      <HeaderContainer>
        <h3>Additional Info</h3>
        <StyledLink to='cast'>Cast</StyledLink>
        <StyledLink to='comments'>Comments</StyledLink>
      </HeaderContainer>
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="comments" element={<Comments />} />
          </Routes>
        </Suspense>
      </MainContainer>
    </StyledSection>
  )
}
