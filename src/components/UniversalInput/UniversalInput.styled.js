import styled from 'styled-components'

export const Container = styled.div`
  margin: 15px 0;
  width: 100%;
  min-height: 90px;
`
export const StyledSpan = styled.span`
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  color: #756f86;
  display: block;
  margin-bottom: 5px;
`

export const StyledInput = styled.input`
  background: #ffffff;
  border: 1px;
  border-color: #dbe2ea;
  border-style: solid;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  padding: 10px;
  outline: none;
  transition: border-color 0.3s ease, border-style 0.3s ease;

  :focus {
    border: 2px;
    border-color: #0880ae;
    border-style: solid;
    padding: 9px;
    box-sizing: border-box;
  }
`
export const ErrorMessage = styled.span`
  margin-top: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #ff7171;
`
