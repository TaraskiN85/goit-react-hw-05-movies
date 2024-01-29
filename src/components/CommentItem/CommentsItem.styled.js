import styled from 'styled-components';

export const StyledItem = styled.li`
  margin-bottom: 24px;

  > h4 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 40px;
    margin-bottom: 16px;
    color: lightgrey;
  }

  > p {
    font-size: 29px;
    line-height: 1.2;
  }
`;

export const Button = styled.button`
  font-size: 24px;
  color: green;
  border: none;
  background-color: transparent;
  cursor: pointer;
  float: right;
  margin-right: 120px;
  margin-top: 16px;

  transition: ease-in 0.1s;

  &:hover,
  &:focus {
    color: limegreen;
  }
`;
