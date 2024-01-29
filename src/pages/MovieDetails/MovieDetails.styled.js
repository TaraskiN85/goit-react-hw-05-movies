import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: #14181d;

  > button {
    background: transparent;
    border: none;
    color: gray;
    cursor: pointer;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 24px;

    &:hover,
    &:focus,
    &.active {
      color: silver;
    }
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 8px;
  text-decoration: none;
  color: grey;
  font-size: 26px;
  transition: ease-in 0.1s;

  &:hover,
  &:focus {
    color: silver;
  }
`;
