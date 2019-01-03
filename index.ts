import { parseQuery } from './lib'
import { KeysObject } from './lib/typings'

export class Api {

  public host?: Function

  public join?: Function

  public options: KeysObject<string>

  public supported: boolean = false

  constructor(

    public location: Location,

    public axios: any,

    public user: any

  ) {

    this.options = parseQuery(location.search)

  }

  public init() {

    this.supported = true

  }

  public newRecord(score: number) {

    const splited = this.location.href.split('/')

    const game_id = splited[splited.length - 1]

    return this.axios.put(`games/${game_id}/leaders`, { score, user: this.user._id })
      
  }

}
