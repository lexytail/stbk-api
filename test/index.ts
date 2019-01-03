import { Api } from '../index'
import Game from './game'
import axios from 'axios'

(window as any).STBK = new Api(location, axios, {})

const game = new Game(document.body)

game.start()
