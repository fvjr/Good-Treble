import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 1rem;
  color: #271537;
  font-weight: 500;
  text-direction: none;
`;

export const BoldLink = styled.a`
  font-size: 1rem;
  color: #cb00ee;
  font-weight: 500;
  text-direction: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  font-family: Caveat, sans-serif;
  font-weight: 800;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 1.2rem;

  &::placeholder {
    color: black;
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #cb00ee;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 8px auto;
  font-family: Koulen, cursive;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #cb00ee;
  background: linear-gradient(58deg, #e4fe72 20%, #e4fe72, 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;
