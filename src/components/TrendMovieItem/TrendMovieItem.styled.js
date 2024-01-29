import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledItem = styled(Link)`
  width: 100%;
  height: 100%;
  color: grey;
  font-size: 32px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 24px auto;
  text-align: center;
  &:hover,
  &:focus {
    color: silver;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const StyledTitle = styled.h3`
  margin-top: 16px;
`;
