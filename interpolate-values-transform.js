import through from "through"

export default function interpolateValues(file, opts) {
  debugger
  var fileContent = ''
  return through(write, end)

  function write(buf) {
    fileContent += buf.toString('utf8').replace(/\$SERVER_DATA/, JSON.stringify(opts.values || '{}'))
  }

  function end() {
    this.queue(fileContent)
    this.queue(null)
  }
}

