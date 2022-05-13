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
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

// export function SignupForm(props) {
//   const { switchToSignin } = useContext(AccountContext);

//   return (
//     <BoxContainer>
//       <FormContainer>
//         <Input type="text" placeholder="Full Name" />
//         <Input type="email" placeholder="Email" />
//         <Input type="password" placeholder="Password" />
//         <Input type="password" placeholder="Confirm Password" />
//       </FormContainer>
//       <Marginer direction="vertical" margin={10} />
//       <SubmitButton type="submit">Signup</SubmitButton>
//       <Marginer direction="vertical" margin="1em" />
//       <MutedLink href="#">
//         Already have an account?
//         <BoldLink href="#" onClick={switchToSignin}>
//           Signin
//         </BoldLink>
//       </MutedLink>
//     </BoxContainer>
//   );
// }

// export function SignupForm() {
//   const { switchToSignin } = useContext(AccountContext);
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [addUser, { error, data }] = useMutation(ADD_USER);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     try {
//       const { data } = await addUser({
//         variables: { ...formState },
//       });

//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <BoxContainer>
//       {data ? (
//         <p>
//           Successful log in. <Link to="/"> Now let's get you set up.</Link>
//         </p>
//       ) : (
//         <FormContainer onSubmit={handleFormSubmit}>
//           <Input
//             type="text"
//             placeholder="Full Name"
//             name="fullname"
//             value={formState.name}
//             onChange={handleChange}
//           />
//           <Input
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={formState.email}
//             onChange={handleChange}
//           />
//           <Input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formState.password}
//             onChange={handleChange}
//           />
//           {/* <Input type="password" placeholder="Confirm Password" />{' '} */}
//           <Marginer direction="vertical" margin={10} />
//           <SubmitButton type="submit">Signup</SubmitButton>
//           <Marginer direction="vertical" margin="1em" />
//         </FormContainer>
//       )}

//       <MutedLink href="#">
//         Already have an account?
//         <BoldLink href="#" onClick={switchToSignin}>
//           Signin
//         </BoldLink>
//       </MutedLink>
//     </BoxContainer>
//   );
// }

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupForm;
