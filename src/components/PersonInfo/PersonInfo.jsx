import React from 'react'
import NameInput from '../NameInput/NameInput'
import EmailInput from '../EmailInput/EmailInput'
import PhoneInput from '../PhoneInput/PhoneInput'
import AgreeCheckbox from '../AgreeCheckbox/AgreeCheckbox'

const PersonInfo = () => (
  <>
    <NameInput />
    <EmailInput />
    <PhoneInput />
    <AgreeCheckbox checkboxId="checkbox" labelText="Принимаю условия использования" value="yes" />
  </>
)

export default PersonInfo
