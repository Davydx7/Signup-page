import styled from 'styled-components';
import bckImg from './assets/bg.png';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const Container = styled.div`
  width:100vw;
  height: 100vh;
  background-color: #E5E5E5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-image: url(${bckImg});
  background-color: #eefcff;
  background-position: center;
  background-size: cover;
  position: absolute;
  min-width: 1440px;
  min-height: 1024px;
  display: flex;
`;

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </Container>
  );
};

export default App;
