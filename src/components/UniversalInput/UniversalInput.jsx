import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledSpan, StyledInput, Container, ErrorMessage,
} from './UniversalInput.styled'

const UniversalInput = React.memo(({
  label, name, placeholder, validate, isValid, setIsValid,
}) => (
  <Container>
    <StyledSpan>{label}</StyledSpan>
    <StyledInput placeholder={placeholder} name={name} onBlur={(e) => setIsValid(validate(e))} />
    <ErrorMessage hidden={isValid}>Введено некорректное значение</ErrorMessage>
  </Container>
))

UniversalInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.func,
  isValid: PropTypes.bool,
  setIsValid: PropTypes.func,
}

export default UniversalInput
