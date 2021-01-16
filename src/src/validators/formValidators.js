
export const isRequired = (value) => {
  return value === '' ? true : null;
}

export const emailValidator = (value) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@'|={}`"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(value) ? null : true;
}
