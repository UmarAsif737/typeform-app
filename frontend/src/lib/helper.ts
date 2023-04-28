export const removeSpacesFromInputField = (
    name: string,
    setValue: (field: any, value: string) => void,
    getValues: (field: any) => string
  ) => ({
    onBlur: () => setValue(name, getValues(name)?.trim()),
  })
  