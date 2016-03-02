class CellsFile {
  constructor (string) {
    this.string = string
    this.rows = []
    this.width = 0
  }

  load () {
    const lines = this.string.split('\n')
    let index = 0
    while (index < lines.length) {
      const line = lines[index]
      const metaDataRegEx = /!(.*)/
      if (!metaDataRegEx.exec(line)) {
        break
      }

      const nameRegEx = /!Name: (.*)/
      const match = nameRegEx.exec(line)
      if (match) {
        this.name = match[1]
      }
      index++
    }

    while (index < lines.length) {
      const line = lines[index]
      this.rows.push(line)
      this.width = Math.max(this.width, line.length)
      index++
    }
  }

  cellAt (x, y) {
    return this.rows[y][x] == 'O'
  }

  get height () {
    return this.rows.length
  }
}

export default CellsFile
