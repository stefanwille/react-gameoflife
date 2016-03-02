import React, {PropTypes} from 'react'

class Cell extends React.Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    alive: PropTypes.bool.isRequired,
    drawingCell: PropTypes.bool.isRequired,
    onStartDrawing: PropTypes.func.isRequired,
    onDraw: PropTypes.func.isRequired
  }

  render () {
    const className = this.props.alive ? 'alive' : 'dead'
    return (
      <td className={className} onMouseDown={this.handleMouseDown} onMouseEnter={this.handleMouseEnter}></td>
    )
  }

  handleMouseDown = (event) => {
    event.preventDefault()
    this.props.onStartDrawing(this.props.x, this.props.y, !this.props.alive)
  }

  handleMouseEnter = (event) => {
    event.preventDefault()
    if (event.buttons !== 1) {
      return
    }
    this.props.onDraw(this.props.x, this.props.y, this.props.drawingCell)
  }
}

export default Cell
