import React from 'react'

import { Container, NavbarLink, StyledApp, StyledHeader } from './SharedLayout.styled'

export const SharedLayout = ({children}) => {
  return (
    <StyledApp>
      <Container>
        <StyledHeader>
          <NavbarLink to='/'>Home</NavbarLink>
          <NavbarLink to='/movies'>Movies</NavbarLink>
        </StyledHeader>
        <main>
          {children}
        </main>
      </Container>
    </StyledApp>
  )
}
