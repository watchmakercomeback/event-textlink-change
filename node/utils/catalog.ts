/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
export const haveSpecialCharaters = (text: string) => {
  const checkerOne: boolean = text.includes("ñ")
  let checkerTwo: boolean | number = text.search(/^[a-zA-Z/0-9]+(?:-[a-zA-Z/0-9]+)*$/g)
  if (checkerTwo === -1) {
    checkerTwo = false
  } else {
    checkerTwo = true
  }
  if (checkerTwo || checkerOne) {
    return true
  }
  return false
}

export const getLinkWithOutSpecialCharacters = (text: string) => {
  return text.replace(/[^a-zA-Z0-9-]/g, '').replace(/[ñÑ]/g, '')
}
