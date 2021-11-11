import styled from 'styled-components';

export const Container = styled.div`
padding-top: 50px;
width: 100vw;
height: 100vh;
justify-content: space-around;
align-items: center;
display: flex;
flex-direction: column;
background: ${({ theme }) => theme.background.paper};
`;

export const ImageContainer = styled.div`
padding-top: 50px;
width: 80rem;
height: 20vh;
justify-content: center;
align-items: center;
display: flex;
flex-direction: row;
background: ${({ theme }) => theme.background.paper};
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const ButtonsContainer = styled.div`
padding: 10px;
display: flex;
width: 200px;
justify-content: space-between
`;
