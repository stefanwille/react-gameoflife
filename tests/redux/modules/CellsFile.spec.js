import CellsFile from 'redux/modules/CellsFile'

describe('CellsFile', function () {
  describe('load', function () {
    it('Should load the given file', function () {
      // given
      const string = `
!Name: Glider
!Author: Richard K. Guy
!The smallest, most common, and first discovered spaceship.
!www.conwaylife.com/wiki/index.php?title=Glider
.O
..O
OOO
`.trim()
      const cellsFile = new CellsFile(string)

      // when
      cellsFile.load()

      // // then
      expect(cellsFile.name).to.equal('Glider')
      expect(cellsFile.width).to.equal(3)
      expect(cellsFile.height).to.equal(3)
      expect(cellsFile.cellAt(0, 0)).to.equal(false)
      expect(cellsFile.cellAt(1, 0)).to.equal(true)
      expect(cellsFile.cellAt(2, 0)).to.equal(false)
    })
  })
})
