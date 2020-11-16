import React from 'react'
import { FormHeaderContainer, FormHeaderText, ToSigninText } from './FormHeader.styled'

const FormHeader = () => (
  <FormHeaderContainer>
    <FormHeaderText>Регистрация</FormHeaderText>
    <ToSigninText>Уже есть аккаунт? Войти</ToSigninText>
  </FormHeaderContainer>
)

export default FormHeader
