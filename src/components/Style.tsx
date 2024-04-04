import styled from "styled-components";

export const StyledWrapper = styled.div`
background: #f6f8f9;
width: 20rem;
padding: 2rem;
margin-top: 4rem;
border-radius: 1rem;
box-shadow: 0px 9px 15px -3px rgba(0, 0, 0, 0.1);
`
export const StyledInputValue = styled.div`
height: 4rem;
margin-bottom: 1rem;
`

export const StyledButtonBox = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: .5rem;
`
const BaseButton = `
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const StyledButton = styled.button`
${BaseButton}
  background: #e9f0f4;
  height: 3.5rem;
  padding: 15px;
  color: #242424;
  &:hover {
    border: 2px dotted #242424;
  }
`;

export const StyledEqual = styled.div`
  ${BaseButton}
  background: #4bd086;
  grid-column: 3 / 5;
`;

export const StyledOpt = styled.div`
  ${BaseButton}
  background: #f79505;
`;