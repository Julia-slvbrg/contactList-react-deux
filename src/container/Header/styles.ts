import { Link } from 'react-router-dom'
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

  label {
    margin-right: 16px;
    color: #2c3a47;
  }
`
export const ListIcon = styled.span`
  scale: 2;
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
export const BackLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  margin: 8px 0 8px 0;

  :active {
    text-decoration: underline;
  }
`
export const LinkBox = styled.span`
  display: flex;
  gap: 16px;
  color: #2c3a47;
  font-size: 18px;
`
