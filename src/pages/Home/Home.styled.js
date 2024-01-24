import styled from 'styled-components';

export const StyledHome = styled.div`
  padding: 40px 0;
  width: 100%;
  background-color: #14181d;

  > h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 60px;
    font-weight: 500;
    color: silver;
  }
`;

export const TrendingList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fit, minmax(280px, 320px)); */
  grid-gap: 40px;
  list-style: none;
  margin: 40px auto;
`;
