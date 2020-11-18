/* eslint-disable no-useless-escape */
export const emailValidation = (e) => {
  const { value } = e.target
  return (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).test(value)
}

export const nameValidation = (e) => {
  const { value } = e.target
  return (/^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/).test(value)
}

export const phoneValidation = (e) => {
  const { value } = e.target
  return (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/).test(value)
}
