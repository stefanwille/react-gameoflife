import React from 'react'
import {connect} from 'react-redux'

// import classes from './GameOfLife.scss'

import {play, pause, step, randomize, clear} from 'redux/modules/actionCreators'

let Controls = ({playing, onPlay, onPause, onStep, onRandomize, onClear}) => {
  const playOnClick = (event) => onPause(event, playing)
  const playOrPauseButton = playing ? (
    <a type='submit' className='btn btn-default' onClick={playOnClick}>
      <span className='glyphicon glyphicon-pause'></span> Pause
    </a>
  ) : (
    <a type='submit' className='btn btn-default' onClick={onPlay}>
      <span className='glyphicon glyphicon-play'></span> Play
    </a>
  )

  return (
    <div className='row controls'>
      <div className='col-md-5'>
        <form className='form-inline' action='#'>
          <a type='submit' className='btn btn-default' onClick={onStep}>
            <span className='glyphicon glyphicon-step-forward'></span> Step
          </a>
          {playOrPauseButton}
          <a type='submit' className='btn btn-default' onClick={onRandomize}>
            <span className='glyphicon glyphicon-repeat'></span> Randomize
          </a>
          <a type='submit' className='btn btn-default' onClick={onClear}>
            <span className='glyphicon glyphicon-remove'></span> Clear
          </a>
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
    },

    onClear (event) {
      event.preventDefault()
      dispatch(clear())
    }
  }
}

Controls = connect(mapStateToProps, mapDispatchToProps)(Controls)

export default Controls
