import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import iconList from '../assets/images/icon-list.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 23vw;
  background: white;
  border-radius: 20px;
  margin: 50px;
  padding: 5px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  img {
      width: 35px;
      margin-right: 170px;
    }

  h1 {
    font-size: 24px;
    color: rgb(40, 39, 70);
    font-weight:800;
    height: 60px;
    margin: 0;
    line-height: 1.2;
  }

  ul {
    margin-right: 50px;
    text-align: left;
    font-weight: 500;
    font-size: 10px;
    color: black;
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
  padding: 10px 65px;
  border: none;
  border-radius: 5px;
  color: white;
  background: rgb(40, 39, 70);
  font-size: 10px;
  margin: 10px;
`;


const Success: React.FC = () => {
  const location = useLocation()
  const email = location.state?.email;

  return (
    <Container>
      <Content>
        <Column>
        <img src={iconList} alt='Icon' />
          <ul>
          <h1>Thanks for Subscribing!</h1>
            <p>A confirmation email has been sent to <strong>{email}</strong>. 
            Please open it and click the button inside to confirm your subscription</p>
          </ul>
          <SubmitButton type="submit">
                  Dismiss message
              </SubmitButton>
        </Column>
      </Content>
    </Container>
  );
};

export default Success;

