import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  display:flex;
  justify-content:center;
  align-items: center;
  
  h1 {
    font-weight: 900;
    font-size: 87px;
    line-height: 102px;
    color: #343434;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Main = () => {
  return (
    <Container>
      <h1>Join The <br />Team</h1>
    </Container>
  );
};

export default Main;
