import React, { useState } from 'react'
import FormHeader from '../FormHeader/FormHeader'
import PersonInfo from '../PersonInfo/PersonInfo'
import { FlexContainer, FormContainer, RegButton } from './RegistrationForm.styled'

const RegistrationForm = () => {
  const [isValidToSend, setIsValidToSend] = useState(false)
  const [selectorValue, setSelectorValue] = useState('Русский')

  const submited = (e) => {
    e.preventDefault()
    const { name, email, phone } = e.target.elements
    // eslint-disable-next-line no-console
    console.log({
      name: name.value,
      email: email.value,
      phone: phone.value,
      language: selectorValue,
    })
  }
  return (
    <FlexContainer>
      <FormContainer onSubmit={(e) => submited(e)}>
        <FormHeader />
        <PersonInfo
          validToSend={setIsValidToSend}
          selectorValue={selectorValue}
          setSelectorValue={setSelectorValue}
        />
        <RegButton type="submit" disabled={!isValidToSend}>Зарегистрироваться</RegButton>
      </FormContainer>
    </FlexContainer>
  )
}

export default RegistrationForm
