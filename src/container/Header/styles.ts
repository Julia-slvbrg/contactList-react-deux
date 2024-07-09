import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-image: linear-gradient(211deg, #d6a2e8, #bdc581);
  width: 100%;
  font-weight: bold;

  span {
    scale: 2;
  }
  label {
    margin-right: 16px;
  }
`
export const Input = styled.input`
  margin-left: 32px;
  height: 40px;
  width: 240px;
  padding: 8px;
  border-radius: 13px;
  border: none;
`
export const Radioinput = styled.input`
  margin-right: 8px;
`
