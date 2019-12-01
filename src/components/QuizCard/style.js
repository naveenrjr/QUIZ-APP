import styled,{css} from 'styled-components';

export const Option = styled.div`
text-align:center;
display:flex;
flex:1;
background-color:light-grey;
color:white;
margin:5px;
border-radius:10px;
justify-content:center;
width:100%;
`;
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid blue;
  color: blue;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  max-width:100%;
  width:100%;

  ${props => props.isActive && css`
    background: palevioletred;
    color: white;
  `}
`;

