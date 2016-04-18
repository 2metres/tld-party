import express            from "express"
import fs                 from "fs"
import interpolateValues  from "./interpolate-values-transform"

const app = express()

app.get("/", (req, res) => {
  res.send(fs.readFileSync('./index.html', { encoding: 'utf8' }))
})

app.get("/static/bundle.js", (req, res) => {
  var browserify = require("browserify")
  var b = browserify('index.js', {
    transform: ['babelify'],
    basedir: __dirname
  })

  b.transform(interpolateValues, {values: {tld: "red", image: "http://placekitten.com/200/300"}})
  b.bundle().pipe(res)
})

app.listen(3000)
