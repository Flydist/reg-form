import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  DropDownContainer, DropDownHeader, DropDownListContainer,
  DropDownList, ListItem, StyledSpan,
} from './Selector.styled'

const options = ['Русский', 'Английский', 'Китайский', 'Итальянский']

const Selector = React.memo(({ label, setSelectorValue }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Русский')

  useEffect(() => {
    setSelectorValue(selectedOption)
  }, [selectedOption])

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value) => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  return (
    <>
      <StyledSpan>{label}</StyledSpan>
      <DropDownContainer>
        <DropDownHeader onClick={toggling} styled={isOpen}>
          <span>{selectedOption}</span>
          <div>
            <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579Z" fill="#0880AE" />
            </svg>
          </div>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  )
})

Selector.propTypes = {
  label: PropTypes.string,
  setSelectorValue: PropTypes.func,
}

export default Selector
