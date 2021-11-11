import styled from 'styled-components';

export const ModalContainer = styled.div`
  color: ${({ theme })=> theme.primary};
  background-color: ${({ theme })=> theme.secondary};
  height: 200px;
  border-radius: 1em;
  
  margin-top: 5em;
  padding: 1em;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-size: medium; 
  }
  h2{
    margin-left: 25px;
    font-size: smaller;
  }
  `;
  