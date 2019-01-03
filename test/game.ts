import { Api } from '..'

declare const STBK: Api

const random = (max: number) => (Math.random() * (max + 1)) | 0

export class Game {

  public cubes: number = 0

  public scores: number = 0

  public lose: number = 10

  public rate: number = 500

  public game?: number

  constructor(

    public $root: HTMLElement

  ) {

    if (!STBK) throw Error('Не найден набор утилит STBK')

    STBK.init()

  }

  public start() {
    // O^O Beacuse types error
    const game: any = setInterval(this.addCube.bind(this), this.rate)

    this.game = game

  }

  public game_over() {

    clearInterval(this.game)

    console.log(`Игра окончена число очков: ${this.scores}`)

  }

  public addCube() {

    this.cubes++

    const $cube = document.createElement('div')

    Object.assign($cube.style, {
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      position: 'absolute',
      border: '1px solid #000',
      top: `${random(90)}%`,
      left: `${random(90)}%`,
      background: `rgb(${random(255)}, ${random(255)}, ${random(255)})`,
    } as CSSStyleDeclaration)

    $cube.addEventListener('click', this.removeCube.bind(this))

    this.$root.appendChild($cube)

    if (this.cubes >= this.lose) this.game_over()

  }

  private removeCube(event: MouseEvent) {

    event.srcElement && this.$root.removeChild(event.srcElement)

    this.cubes--

    this.scores++

  }

}

export default Game