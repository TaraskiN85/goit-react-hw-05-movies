import styled from 'styled-components';

export const CardContainer = styled.div`
  height: auto;
  width: calc((100% - 150px) / 5);
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 24px;

  > h4 {
    font-size: 28px;
    font-weight: 500;
    padding-bottom: 12px;
  }

  > h5 {
    font-size: 24px;
  }
`;
