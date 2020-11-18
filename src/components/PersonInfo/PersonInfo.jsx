import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import UniversalInput from '../UniversalInput/UniversalInput'
import AgreeCheckbox from '../AgreeCheckbox/AgreeCheckbox'
import Selector from '../Selector/Selector'
import { emailValidation, nameValidation, phoneValidation } from '../../helpers/validationFuncs'

const PersonInfo = React.memo(({ validToSend, selectorValue, setSelectorValue }) => {
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isNameValid, setIsNameValid] = useState(true)
  const [isPhoneValid, setIsPhonelValid] = useState(true)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    validToSend(Boolean(isEmailValid && isNameValid
      && isPhoneValid && selectorValue && isChecked))
  }, [isEmailValid, isNameValid, isPhoneValid, selectorValue, isChecked])

  return (
    <>
      <UniversalInput label="Фамилия и имя" name="name" placeholder="Введите ваше имя" validate={nameValidation} isValid={isNameValid} setIsValid={setIsNameValid} />
      <UniversalInput label="Email" name="email" placeholder="Введите ваш email" validate={emailValidation} isValid={isEmailValid} setIsValid={setIsEmailValid} />
      <UniversalInput label="Номер телефона" name="phone" placeholder="Введите ваш номер телефона" validate={phoneValidation} isValid={isPhoneValid} setIsValid={setIsPhonelValid} />
      <Selector label="Язык" setSelectorValue={setSelectorValue} />
      <AgreeCheckbox checkboxId="checkbox" value="yes" setIsChecked={setIsChecked} />
    </>
  )
})

PersonInfo.propTypes = {
  validToSend: PropTypes.func,
  selectorValue: PropTypes.string,
  setSelectorValue: PropTypes.func,
}

export default PersonInfo
