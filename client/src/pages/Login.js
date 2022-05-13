import React, {
  useState
} from 'react';
import {
  Link
} from 'react-router-dom';
import {
  useMutation
} from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
import '../styles/style.css';
import styled from 'styled-components';
import { AccountBox } from '../components/accountBox';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const styles = {
  artistDisplay: {
    margin: '5px 5px 5px 5px',
  },
  container: {
    backgroundImage: 'url(https://wallpaperaccess.com/full/5154287.jpg)',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
  },
  aligned: {
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    boxShadow: '6px 1px 9px 1px #CD33FF',
  },
};

function Login() {
  return (
    <AppContainer style={styles.container}>
      <AccountBox />
    </AppContainer>
  );
}

export default Login;