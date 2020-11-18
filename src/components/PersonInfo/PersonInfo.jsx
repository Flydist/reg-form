import React from 'react'
import UniversalInput from '../UniversalInput/UniversalInput'
import AgreeCheckbox from '../AgreeCheckbox/AgreeCheckbox'
import Selector from '../Selector/Selector'

const PersonInfo = () => (
  <>
    <UniversalInput label="Имя" placeholder="Введите ваше имя" />
    <UniversalInput label="Email" placeholder="Введите ваш email" />
    <UniversalInput label="Номер телефона" placeholder="Введите ваш номер телефона" />
    <Selector label="Язык" />
    <AgreeCheckbox checkboxId="checkbox" labelText="Принимаю условия использования" value="yes" />
  </>
)

export default PersonInfo
