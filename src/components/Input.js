import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

const Styledinput = styled.input`
  background: #F5F5F5;
  border-radius: 11px;
  min-width: 335px;
  height: 59px;
  border: none;
  padding: 0px 25px;
  box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
  font-weight: 300;
  font-size: 18px;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-5px) ;
  }
`;

const Status = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #d5d5d5;
  margin-left: 15px;

  input:focus + & {
    background-color: #FFA689;
  }

  input:invalid + & {
    background-color: #FE2F75;
  }
  
  input:valid + & {
    background-color: #70EDB9;
  }


`;

const Input = ( {type, placeholder} ) => {
  return (
    <Container>
      <Styledinput
        type={type}
        placeholder={placeholder}
        required
        autoComplete="off"
      />
      <Status />
    </Container>
  );
};

export default Input;
