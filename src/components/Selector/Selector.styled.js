import styled, { css } from 'styled-components'

export const StyledSpan = styled.span`
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  color: #756f86;
  display: block;
  margin-bottom: 5px;
`

export const DropDownContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`

export const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
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

  ${(props) => props.styled && css`
    border: 2px;
    border-color: #0880ae;
    border-style: solid;
    padding: 9px;
    box-sizing: border-box;
  `}

  :hover {
    cursor: pointer;
  }
`

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
`

export const DropDownList = styled.ul`
  background: #ffffff;
  border: 1px;
  border-color: #DBE2EA;
  border-style: solid;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  margin: 0;
  margin-top: 10px;
  padding: 7px 0px;
  outline: none;
  transition: border-color 0.3s ease, border-style 0.3s ease;
`

export const ListItem = styled.li`
  list-style: none;
  color: #756F86;
  margin-bottom: 20px;
  padding: 10px 15px;
  :hover {
    background-color: #EBF4F8;
    cursor: pointer;
  }
  :last-child {
    margin-bottom: 0px;
  }
`
