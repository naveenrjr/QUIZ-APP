import styled,{css} from 'styled-components';

export const NextButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  // &:hover{
  //   background: palevioletred;
  //   color: white;
  // }

  ${props => props.disabled===0 && css`
  color: #d12028;
  background: #fff;
  `}
`;
export const PrevButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
  color: #d12028;
  background: #fff;
  `}
`;

export const ActionsContainer = styled.div`
  display:flex;
  text-align:center;
  justify-content:center;
`;

export const Input = styled.input`
`;