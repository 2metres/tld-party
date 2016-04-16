import express     from "express"
import fs          from "fs"

const app = express()

app.get("/", (req, res) => {
  res.send(fs.readFileSync('./index.html', { encoding: 'utf8' }))
})

app.get("/static/bundle.js", (req, res) => {
  res.sendFile("bundle.js", { root: __dirname })
})

app.listen(3000)
