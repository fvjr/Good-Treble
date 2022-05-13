import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './loginForm';
import { motion } from 'framer-motion';
import { AccountContext } from './accountContext';
import SignupForm from './signupForm';

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #6cf1fd;
  box-shadow: 0 14px 28px #cb00ee, 0 10px 10px #d20020;
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: #cb00ee;
  background: linear-gradient(58deg, #cb00ee 20%, #cb00ee 100%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #e4fe72;
  font-family: Caveat, cursive;
  font-weight: 700;
  font-size: 1.3rem;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: '233%',
    height: '1050px',
    borderRadius: '20%',
    transform: 'rotate(60deg)',
  },
  collapsed: {
    width: '160%',
    height: '550px',
    borderRadius: '50%',
    transform: 'rotate(60deg',
  },
};

const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState('signin');

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signup');
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setActive(() => {
      setActive('signin');
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === 'signin' && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Good Treble Inside</SmallText>
            </HeaderContainer>
          )}
          {active === 'signup' && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Your favorite music awaits!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === 'signin' && <LoginForm />}
          {active === 'signup' && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
