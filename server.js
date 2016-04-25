import express           from "express"
import fs                from "fs"
import morgan            from "morgan"
import browserify        from "browserify"
import URI               from "urijs"

import interpolateValues from "./lib/interpolate-values-transform"
import domains           from "./config/domains"

const app = express()

app.use(morgan('short'))

app.get("/", (req, res) => {
  res.send(fs.readFileSync('./index.html', { encoding: 'utf8' }))

  console.log(`${Date(Date.UTC())}: ${URI(req).tld()} - ${req.hostname}`)
})

app.get("/static/bundle.js", (req, res) => {
  let b = browserify('index.js', {transform: ['babelify'], basedir: __dirname })

  b.transform(interpolateValues, {values: domains[0]})
  b.bundle().pipe(res)
})

app.listen(3000)
