import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledSpan, StyledInput, Container, ErrorMessage,
} from './UniversalInput.styled'

const UniversalInput = React.memo(({
  label, placeholder,
}) => (
  <Container>
    <StyledSpan>{label}</StyledSpan>
    <StyledInput placeholder={placeholder} />
    <ErrorMessage>Введено некорректное значение</ErrorMessage>
  </Container>
))

UniversalInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

export default UniversalInput
