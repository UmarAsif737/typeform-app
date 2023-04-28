import _ from 'lodash'

export const makeUrl = (url: string, fields: { [key: string]: string | number | boolean } = {}): string => {
  let res: string = url
  Object.keys(fields).forEach((key: string) => {
    res = res.replace(`:${key}`, String(fields[key]))
  })
  return res
}

const parseArray = (value: number[] | string[]): string => {
  return JSON.stringify(value.map((v) => encodeURIComponent(v)))
}

export const makeGetUrlWithParams = (
    url: string,
    fields: { [key: string]: string | number | boolean | number[] | string[] } = {}
  ): string => {
    return Object.entries(fields)
      .filter(([, value]) => !_.isNil(value))
      .reduce<string>((acc, [key, value], index) => {
        const parsedValue = Array.isArray(value) ? parseArray(value) : encodeURIComponent(value)
  
        return acc.concat(`${index ? '&' : '?'}${key}=${parsedValue}`)
      }, url)
  }