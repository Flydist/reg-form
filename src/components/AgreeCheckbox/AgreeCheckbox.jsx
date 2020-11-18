import React from 'react'
import PropTypes from 'prop-types'
import { StyledLabel, StyledSpanLink } from './AgreeCheckbox.styled'

const AgreeCheckbox = React.memo(({
  checkboxId, value, setIsChecked,
}) => (
  <StyledLabel>
    <input type="checkbox" id={checkboxId} value={value} onClick={() => setIsChecked((prevState) => !prevState)} />
    <p>
      Принимаю
      {' '}
      <StyledSpanLink>условия</StyledSpanLink>
      {' '}
      соглашения
    </p>
  </StyledLabel>
))

AgreeCheckbox.propTypes = {
  checkboxId: PropTypes.string,
  value: PropTypes.string,
  setIsChecked: PropTypes.func,
}

export default AgreeCheckbox
