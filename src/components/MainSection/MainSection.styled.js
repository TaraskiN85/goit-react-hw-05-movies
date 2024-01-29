import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 90%;
  height: auto;
  margin: auto;
`;

export const BgContainer = styled.div`
  width: 140%;
  height: 900px;
  left: 50%;
  transform: translate(-13%);
  background-image: url(${props => props.url});
  opacity: 0.6;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 55px 55px 40px #14181d, inset -55px -35px 40px #14181d;
  background-clip: content-box;
  padding: 1px;
  border: 1px solid #14181d;
`;

export const StyledImg = styled.div`
  height: auto;
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 54px;
  margin-top: 36px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: silver;

  > h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 45px;
  }
`;

export const StyledP = styled.p`
  flex-grow: auto;
  font-size: 26px;
  font-weight: 400;
  color: ${({ $color }) => `${$color}`};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > li {
    margin-bottom: 24px;

    > h4 {
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 40px;
      margin-bottom: 16px;
      color: lightgrey;
    }

    > p {
      font-size: 30px;
      line-height: 1.3;
    }
  }
`;
