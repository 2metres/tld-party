import express           from "express"
import fs                from "fs"
import browserify        from "browserify"

import interpolateValues from "./lib/interpolate-values-transform"
import domains           from "./config/domains"

const app = express()

app.get("/", (req, res) => {
  res.send(fs.readFileSync('./index.html', { encoding: 'utf8' }))
})

app.get("/static/bundle.js", (req, res) => {
  let b = browserify('index.js', {transform: ['babelify'], basedir: __dirname })

  b.transform(interpolateValues, {values: domains})
  b.bundle().pipe(res)
})

app.listen(3000)
