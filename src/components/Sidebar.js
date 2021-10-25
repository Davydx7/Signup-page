import styled from 'styled-components';
import logo from '../assets/logo.png';
import Input from './Input';

const Container = styled.div`
  width: 519px;
  background: rgba(255, 255, 255, 0.87);
  backdrop-filter: blur(48px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    width: 100%;
  }

  h3 {
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    color: #808080;

    span {
      color: #FF8D8D;
      cursor: pointer;
    }
  }
`;

const Logowrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 125px;
  }

  h3 {
    font-size: 28px;
    line-height: 33px;
    color: #FF8D8D;
    font-weight: 700px;

    span {
      font-size: 21px;
      color: #5DC399;
      font-weight: 300;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #666666;
    font-size: 24px;
    font-weight: 700px;
    margin-bottom: 32px;
  }

  button {
    background: #70edb9;
    color: #ffffff;
    border-radius: 11px;
    width: 70%;
    height: 59px;
    border: none;
    padding: 0px 25px;
    box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
    font-weight: 500;
    font-size: 21px;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-5px) ;
    }
  }
`;

const Terms = styled.p`
  font-weight: 300;
  font-size: 15px;
  color: #808080;
  line-height: 18px;
  text-align: center;
`;

const Sidebar = () => {
  return (
    <Container>
      <Logowrapper>
        <img src={logo} alt="logo" />
        <h3>Eli <span>codes</span></h3>
      </Logowrapper>
      <Form>
        <h3>Sign up</h3>
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <button type='submit'> Sign up</button>
      </Form>
      <Terms>
        By signing up, I agree to the Privacy Policy <br/> and Terms of Service
      </Terms>
      <h3>Already have an account? <span>Sign In </span></h3>
    </Container>
  );
};

export default Sidebar;
