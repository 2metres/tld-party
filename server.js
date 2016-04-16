import express from "express"
import fs      from "fs"
import React   from "react"

const app = express()

app.get("/", (req, res) => {
  res.send(fs.readFileSync('./index.html', { encoding: 'utf8' }))
})

app.get("/static/bundle.js", function(req, res) {
  res.sendFile("bundle.js", {root: __dirname})
})

app.listen(3000)
