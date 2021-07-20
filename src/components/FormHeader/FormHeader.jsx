import React from 'react'
import {
  FormHeaderContainer, FormHeaderText, ToSigninText, StyledSpanLink,
} from './FormHeader.styled'

const FormHeader = () => (
  <FormHeaderContainer>
    <FormHeaderText>Регистрация</FormHeaderText>
    <ToSigninText>
      Уже есть аккаунт? Супер!
      {' '}
      <StyledSpanLink>Войти</StyledSpanLink>
    </ToSigninText>
  </FormHeaderContainer>
)

export default FormHeader
