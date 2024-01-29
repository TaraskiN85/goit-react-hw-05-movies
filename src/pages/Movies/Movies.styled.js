import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  margin: 40px 0;

  > input {
    width: 40%;
    max-width: 400px;
    font-size: 30px;
    padding: 8px 30px;
    text-transform: capitalize;
    outline: none;
    border-radius: 6px 0 0 6px;
    border: none;
  }

  > button {
    font-size: 30px;
    outline: none;
    padding: 8px 30px;
    border-radius: 0 6px 6px 0;
    border: none;
    cursor: pointer;
    background-color: #778899;
    transition: ease-in 0.1s;

    &:hover,
    &:focus {
      background-color: #99aacc;
    }
  }
`;

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
