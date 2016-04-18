import express     from "express"
import fs          from "fs"

const app = express()

app.get("/", (req, res) => {
  res.send(fs.readFileSync('./index.html', { encoding: 'utf8' }))
})

app.get("/static/bundle.js", (req, res) => {
  var browserify = require("browserify");
  var b = browserify('index.js', {
    transform: ['babelify'],
    basedir: __dirname
  });

  b.bundle().pipe(res);
})

app.listen(3000)
