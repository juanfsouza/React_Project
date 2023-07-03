import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import signUp from '../assets/images/illustration-sign-up-desktop.svg';
import iconList from '../assets/images/icon-list.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 40vw;
  background: white;
  border-radius: 20px;
  margin: 50px;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80vw;
    margin: 20px;
  }
`;

const LeftColumn = styled.div`
  flex: 2.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  h1 {
    font-size: 24px;
    color: rgb(40, 39, 70);
    font-weight: 800;
    height: 10px;
  }

  ul {
    text-align: left;
    font-weight: 500;
    font-size: 10px;
    margin-top: 10px;
    color: black;
  }

  p {
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 15px;
    color: black;
  }

  li {
    font-size: 10px;
    display: flex;
    align-items: center;
    margin: 5px 0;

    img {
      width: 12px;
      margin-right: 10px;
    }
  }
`;

const RightColumn = styled.div`
  flex: 1.7;
  padding: 5px;

  img {
    width: 100%;
    background-size: cover;
    background-position: center;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ErrorMessage = styled.p`
  text-align: right;
  margin: 0px;
`;

const EmailInput = styled.input<{ isValid: boolean }>`
  cursor: pointer;
  text-align: center;
  width: 15vw;
  padding: 7px;
  border: ${props => (props.isValid ? '1.3px solid gray' : '1.3px solid red')};
  border-radius: 5px;
  background-color: white;
  color: ${props => (props.isValid ? 'black' : 'red')};
  font-size: 10px;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  padding: 10px 35px;
  border: none;
  border-radius: 5px;
  color: white;
  background: rgb(40, 39, 70);
  font-size: 10px;
  margin: 10px;
`;

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [eemail, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (eemail === '' || !eemail.includes('@') || !emailPattern.test(eemail)) {
      setIsValidEmail(false);
      return;
    }

    // Email is valid
    console.log('Email', eemail);

    // Example: Navigate to another route
    navigate('/success', { state: { email: eemail } })
  };

  return (
    <Container>
      <Content>
        <LeftColumn>
          <h1>Stay Updated!</h1>
          <ul>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <li>
              <img src={iconList} alt='Icon' />
              Product discovery and building what matters
            </li>
            <li>
              <img src={iconList} alt='Icon' />
              Measuring to ensure updates are a success
            </li>
            <li>
              <img src={iconList} alt='Icon' />
              And much more!
            </li>
          </ul>
          <p style={{ 
              margin: '2px',
              width: '200px', 
              height: '0px', 
              fontWeight: 'bold', 
              fontSize: '8px' 
              }}>
                Email Address
            </p>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              {!isValidEmail && 
              <ErrorMessage 
              style={{ 
                width: '200px', 
                color: 'red', 
                height: '0px', 
                borderColor: 'red' 
                }}>
                Invalid email address.
              </ErrorMessage>}
              <EmailInput
                type='email'
                placeholder='Your Email'
                onChange={handleEmailChange}
                isValid={isValidEmail}
                required
              />
              <SubmitButton type="submit" value={eemail}>
                  Subscribe to monthly newsletter
              </SubmitButton>
            </form>
          </FormContainer>
        </LeftColumn>
        <RightColumn>
          <img src={signUp} alt='Sign Up' />
        </RightColumn>
      </Content>
    </Container>
  );
};

export default Home;
