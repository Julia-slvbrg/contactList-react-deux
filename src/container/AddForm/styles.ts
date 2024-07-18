import styled from 'styled-components'

export const Aside = styled.aside`
  margin-top: 40px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 600px;

  input,
  button {
    height: 40px;
    width: 80%;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: bold;
  }
  input {
    padding: 8px;
    border-bottom: 1px solid #2c3a47;
  }
`

export const Btn = styled.button`
  background-color: #cad3c8;
  cursor: pointer;

  :active {
    transform: scale(1.8);
    transition: all ease 0.2s;
  }
`
