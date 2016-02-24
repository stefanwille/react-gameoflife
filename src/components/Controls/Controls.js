import React from 'react'
import {connect} from 'react-redux'

// import classes from './GameOfLife.scss'

import {step} from 'redux/modules/actionCreators'

let Controls = ({onStep}) => {
  return (
    <div className='row controls'>
      <div className='col-md-5'>
        <form className='form-inline' action='#'>
          <button type='submit' className='btn btn-default'>
            <span className='glyphicon glyphicon-play'></span>
          </button>
          <button type='submit' className='btn btn-default'>
            <span className='glyphicon glyphicon-pause'></span>
          </button>
          <button type='submit' className='btn btn-default' onClick={onStep}>
            <span className='glyphicon glyphicon-step-forward'></span>
          </button>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStep (event) {
      event.preventDefault()
      dispatch(step())
    }
  }
}

Controls = connect(null, mapDispatchToProps)(Controls)

export default Controls
