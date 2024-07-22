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

  button {
    height: 40px;
    width: 80%;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #2c3a47;
  }
`
export const dataInput = styled.input`
  height: 40px;
  width: 80%;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
  border-bottom: 1px solid #2c3a47;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`
export const TypeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap: 24px;
  width: 80%;
  font-size: 16px;
  font-weight: bold;
  color: #2c3a47;
`
export const Btn = styled.button`
  background-color: #cad3c8;
  cursor: pointer;

  :active {
    transform: scale(1.8);
    transition: all ease 0.2s;
  }
`
