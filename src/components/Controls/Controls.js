import React from 'react'
import {connect} from 'react-redux'

import './Controls.scss'

import {play, pause, step, randomize, clear} from 'redux/modules/actionCreators'

let Controls = ({playing, speed, onPlay, onPause, onStep, onRandomize, onClear}) => {
  const handlePlayOnClick = (event) => onPlay(event, speed)
  const handlePauseOnClick = (event) => onPause(event, playing)
  const handlePatternSelected = (event) => {
    console.log(event.target.value)
  }

  let playOrPauseButton
  if (playing) {
    playOrPauseButton = (
      <a type='submit' className='btn btn-default' onClick={handlePauseOnClick}>
        <span className='glyphicon glyphicon-pause'></span> Pause
      </a>
    )
  } else {
    playOrPauseButton = (
      <a type='submit' className='btn btn-default' onClick={handlePlayOnClick}>
        <span className='glyphicon glyphicon-play'></span> Play
      </a>
    )
  }

  return (
    <div className='row controls'>
      <div className='col-md-5'>
        <form className='form-inline' action='#'>
          {playOrPauseButton}
          {' '}
          <a type='submit' className='btn btn-default' onClick={onStep}>
            <span className='glyphicon glyphicon-step-forward'></span> Step
          </a>
          {' '}
          <a type='submit' className='btn btn-default' onClick={onRandomize}>
            <span className='glyphicon glyphicon-repeat'></span> Randomize
          </a>
          {' '}
          <select className='form-control' onChange={handlePatternSelected}>
            <option value={1}>Pattern</option>
            <option value='glider'>Glider</option>
            <option value={3}>Big Glider</option>
            <option value={4}>Canon</option>
            <option value={5}>Sneeker</option>
          </select>
          {' '}
          <a type='submit' className='btn btn-default' onClick={onClear}>
            <span className='glyphicon glyphicon-remove'></span> Clear
          </a>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = ({playing, speed}) => {
  return {
    playing,
    speed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlay () {
      event.preventDefault()
      dispatch(play())
    },

    onPause () {
      event.preventDefault()
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
