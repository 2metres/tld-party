import through from "through"

export default function interpolateValues(file, opts) {
  let fileContent = '';

  through(write, end)

  let write(buf) => {
    fileContent += buf.toString('utf8').replace(/\$SERVER_DATA/, JSON.stringify(opts.values || {}))
  }

  let end() => {
    this.queue(fileContent)
    this.queue(null)
  }
}
