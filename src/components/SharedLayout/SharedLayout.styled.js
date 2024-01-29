import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledApp = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: grey;
  background-color: #14181d;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0 16px;
`;

export const StyledHeader = styled.header`
  color: silver;
  text-decoration: none;
  padding-left: 40px;
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 5px solid #445566;
  margin: 0;
`;

export const NavbarLink = styled(NavLink)`
  color: grey;
  font-size: 70px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  transition: ease-in 0.1s;

  &:hover,
  &:focus,
  &.active {
    color: silver;
  }
`;
