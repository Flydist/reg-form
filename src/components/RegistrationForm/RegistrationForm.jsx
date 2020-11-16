import React from 'react'
import FormHeader from '../FormHeader/FormHeader'
import PersonInfo from '../PersonInfo/PersonInfo'
import { FlexContainer, FormContainer, RegButton } from './RegistrationForm.styled'

const RegistrationForm = () => (
  <FlexContainer>
    <FormContainer>
      <FormHeader />
      <PersonInfo />
      <RegButton>Зарегистрироваться</RegButton>
    </FormContainer>
  </FlexContainer>
)

export default RegistrationForm
