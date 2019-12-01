import styled,{css} from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  width:30%;
  align-self:center;

  &:hover {
    background-color: palevioletred;
    color: white;
  }

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
  
`;

export const Container = styled.div`
  text-align: center;
  background-color:white;
  min-height:50vh;
  justify-content:center;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`;
export const Header = styled.h1`
  text-align: center;
  color:Red
`;

export const Input = styled.input`
align-self:center;
width:auto;
padding:8px;
`;
