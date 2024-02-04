import styled from 'styled-components';

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 50px;
  transition: ease-in 200ms;

  &:hover,
  &:focus {
    color: silver;

    h3 {
      color: #fff;
    }
  }

  > img {
    width: 100%;
    max-width: 200px;
    max-height: 300px;
    margin: auto 0;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 40px;
    margin-bottom: 16px;
    color: lightgrey;
    transition: ease-in 200ms;
  }

  > p {
    font-size: 29px;
    line-height: 1.2;
  }

  > div {
    display: flex;
    gap: 48px;

    > p {
      display: flex;
      gap: 16px;
      color: green;
      font-size: 24px;

      > span {
        color: silver;
        font-weight: 500;
      }
    }
  }
`;
