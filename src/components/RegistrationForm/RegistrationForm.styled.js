import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  p {
    margin: 0;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  width: 100%;
  min-width: 310px;
  max-width: 430px;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
  padding: 20px 25px;
  color: #2c2738;
  font-size: 16px;
`

export const RegButton = styled.button`
  background: #0880ae;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  width: 100%;
  color: #fff;
  outline: none;
  border: 1px;
  border-style: solid;
  border-color: #0880ae;
  padding: 15px;
  margin: 10px 0;
  transition: box-shadow 0.3s ease, border-style 0.3s ease, border-color 0.3s ease;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #EBF4F8;
  transition: 0.3s ease;

  :focus {
    padding: 14px;
    border: 2px;
    border-style: solid;
    border-color: rgba(44, 39, 56, 0.86);
    box-sizing: border-box;
  }
  :hover {
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16);
    cursor: pointer;
  }
  :disabled {
    background: #DBE2EA;
    color: #B1B5BF;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
    border-color: #DBE2EA;
    cursor: default;
  }
`
