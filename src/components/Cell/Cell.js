import React, {PropTypes} from 'react'

class Cell extends React.Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    live: PropTypes.bool.isRequired,
    liveCount: PropTypes.number.isRequired,
    drawingCell: PropTypes.bool.isRequired,
    onStartDrawing: PropTypes.func.isRequired,
    onDraw: PropTypes.func.isRequired
  }

  render () {
    let className = this.props.live ? 'live' : ''
    if (this.props.liveCount > 0) {
      className += ' lived'
    }
    return (
      <td
        className={className}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter} />
    )
  }

  handleMouseDown = (event) => {
    event.preventDefault()
    this.props.onStartDrawing(this.props.x, this.props.y, !this.props.live)
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
