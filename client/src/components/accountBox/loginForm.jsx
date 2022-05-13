import React, { useContext, useState } from 'react';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from './common';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <BoxContainer>
        <FormContainer>
          <form onSubmit={handleFormSubmit}>
            <Input
              type="email"
              placeolder="Email"
              value={formState.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="******"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1em" />
            <SubmitButton type="submit">Signin</SubmitButton>{' '}
          </form>
        </FormContainer>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Don't have an account?{' '}
          <BoldLink href="#" onClick={switchToSignup}>
            Signup
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </div>
  );
}
