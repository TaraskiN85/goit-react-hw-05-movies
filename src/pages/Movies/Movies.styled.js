import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: auto;
  text-decoration: none;
`;

export const StyledMovies = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: auto;
  text-decoration: none;
  color: grey;
`;
