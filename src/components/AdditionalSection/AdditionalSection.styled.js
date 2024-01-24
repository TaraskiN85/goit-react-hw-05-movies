import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  background-color: #14181d;
  height: auto;
`;

export const HeaderContainer = styled.div`
  height: 120px;
  display: flex;
  gap: 40px;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  border-bottom: 3px solid #445566;
`;

export const MainContainer = styled.div`
  margin-top: 36px;
  height: 80px;
  display: flex;
  gap: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: baseline;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    color: green;
  }
`;
