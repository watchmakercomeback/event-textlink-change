export const haveSpecialCharaters = (text: string) => {
  return text.search(/^[a-zA-Z/0-9]+(?:-[a-zA-Z/0-9]+)*$/g)
}

export const getLinkWithOutSpecialCharacters = (text: string) => {
  return text.replace(/^[a-zA-Z/0-9]+(?:-[a-zA-Z/0-9]+)*$/g, '')
}
