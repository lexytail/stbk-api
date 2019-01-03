import { KeysObject } from './typings'

export function parseQuery(query: string): KeysObject<string> {

  const parsed: KeysObject<string> = {}

  const pairs: string[] = (query[0] === '?' ? query.substr(1) : query).split('&')

  for (let index: number = 0; index < pairs.length; index++) {

    const pair: string[] = pairs[index].split('=')

    parsed[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')

  }

  return parsed

}