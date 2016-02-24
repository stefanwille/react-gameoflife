import React from 'react'
import {connect} from 'react-redux'

// import classes from './GameOfLife.scss'

import {play, pause, step, randomize} from 'redux/modules/actionCreators'

let Controls = ({playing, onPlay, onPause, onStep, onRandomize}) => {
  const playOnClick = (event) => onPause(event, playing)
  const playOrPauseButton = playing ? (
    <button type='submit' className='btn btn-default' onClick={playOnClick}>
      <span className='glyphicon glyphicon-pause'></span> Pause
    </button>
  ) : (
    <button type='submit' className='btn btn-default' onClick={onPlay}>
      <span className='glyphicon glyphicon-play'></span> Play
    </button>
  )

  return (
    <div className='row controls'>
      <div className='col-md-5'>
        <form className='form-inline' action='#'>
          <button type='submit' className='btn btn-default' onClick={onStep}>
            <span className='glyphicon glyphicon-step-forward'></span> Step
          </button>
          {playOrPauseButton}
          <button type='submit' className='btn btn-default' onClick={onRandomize}>
            <span className='glyphicon glyphicon-object-align-right'></span> Randomize
          </button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = ({playing}) => {
  return {
    playing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlay (event) {
      event.preventDefault()
      dispatch(play(dispatch))
    },

    onPause (event, interval) {
      event.preventDefault()
      clearInterval(interval)
      dispatch(pause())
    },

    onStep (event) {
      event.preventDefault()
      dispatch(step())
    },

    onRandomize (event) {
      event.preventDefault()
      dispatch(randomize())
    }
  }
}

Controls = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default Controls
