import { Link, Route, Routes } from "react-router-dom";

import Home from "pages/Home/Home";

import { Container, NavbarLink, StyledApp, StyledHeader } from "./App.styled";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <StyledApp>
      <Container>
        <StyledHeader>
          <NavbarLink to='/'>Home</NavbarLink>
          <NavbarLink to='/movies'>Movies</NavbarLink>
          {/* <NavLink to='/movies/movieId'></NavLink> */}
        </StyledHeader>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:movieId/*' element={<MovieDetails />} />
          </Routes>
        </main>
      </Container>
    </StyledApp>
  );
};
