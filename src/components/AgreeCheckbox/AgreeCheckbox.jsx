import React from 'react'
import PropTypes from 'prop-types'
import { StyledLabel } from './AgreeCheckbox.styled'

const AgreeCheckbox = React.memo(({ checkboxId, labelText, value }) => (
  <StyledLabel>
    <input type="checkbox" id={checkboxId} value={value} />
    <span>{labelText}</span>
  </StyledLabel>
))

AgreeCheckbox.propTypes = {
  checkboxId: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.string,
}

export default AgreeCheckbox
