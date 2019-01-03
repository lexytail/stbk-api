import * as webpack from 'webpack'
import { resolve } from 'path'
import { create, BrowserSyncInstance } from 'browser-sync'
import * as HTMLPlugin from 'html-webpack-plugin'

const env: string = process.env.NODE_ENV || 'development'

const browser: BrowserSyncInstance = create()

browser.init({ server: './test' })

const compiler: webpack.Compiler = webpack({

  entry: './test/index.ts',

  output: {

    filename: 'bundle.js',

    path: resolve('test')

  },

  mode: env,

  module: {

    rules: [{ test: /.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }]

  },

  plugins: [new HTMLPlugin],

  resolve: { extensions: ['.js', '.ts', '.tsx'] }

} as webpack.Configuration)

const handler: webpack.ICompiler.Handler = (err, stats) => {

  console.log(stats.toString())

  browser.reload()

}

if (env === 'development') compiler.watch({}, handler)

else compiler.run(handler)
