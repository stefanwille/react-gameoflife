import React from 'react'
import {PropTypes} from 'react'
import {connect} from 'react-redux'

import {step} from 'redux/modules/actionCreators'

class PlayLoop extends React.Component {
  static propTypes = {
    playing: PropTypes.bool.isRequired,
    speed: PropTypes.number.isRequired,
    onStep: PropTypes.func.isRequired
  };

  constructor () {
    super()
    this.state = { interval: null }
  }

  componentDidMount () {
    const {playing, speed} = this.props
    this.updatePlaying(playing, speed)
  }

  componentWillUnmount () {
    this.pause()
  }

  componentWillReceiveProps (nextProps) {
    const {playing, speed} = nextProps
    this.updatePlaying(playing, speed)
  }

  updatePlaying (playing, speed) {
    this.pause()
    this.play(playing, speed)
  }

  pause () {
    const interval = this.state.interval
    if (interval) {
      clearInterval(interval)
      this.setState({ interval: null })
    }
  }

  play (playing, speed) {
    if (!playing) {
      return
    }
    const delayInMs = (100-speed) * 20
    const interval = setInterval(this.props.onStep, delayInMs)
    this.setState({ interval: interval })
  }

  render () {
    return (
      <div className='playLoop'>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {playing, speed} = state
  return {
    playing,
    speed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStep () {
      dispatch(step())
    }
  }
}

const ConnectedPlayLoop = connect(mapStateToProps, mapDispatchToProps)(PlayLoop)

export default ConnectedPlayLoop
