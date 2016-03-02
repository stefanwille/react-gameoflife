import React from 'react'
import {connect} from 'react-redux'
import {resize, setSpeed} from 'redux/modules/actionCreators'

// import classes from './Dimensions.scss'

let Dimensions = ({width, height, speed, onResize, onSpeedChange}) => {
  let widthNode
  let heightNode
  let speedNode
  const widthRef = (node) => { widthNode = node }
  const heightRef = (node) => { heightNode = node }
  const speedRef = (node) => { speedNode = node }
  const handleSubmit = (event) => {
    event.preventDefault()
    onResize(widthNode.value, heightNode.value)
  }
  const handleSpeedChange = (event) => {
    onSpeedChange(speedNode.value)
  }

  console.log('Dimensions speed', speed)

  return (
    <div className='row dimensions'>

      <div className='col-md-5'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <form className='form-inline' onSubmit={handleSubmit} >
              <div className='form-group'>
                <label htmlFor='width'>Width</label>
                {' '}
                <input type='number'
                  className='form-control'
                  id='width'
                  placeholder='Width'
                  defaultValue={width}
                  ref={widthRef} />
              </div>
              {' '}
              <div className='form-group'>
                <label htmlFor='height'>Height</label>
                {' '}
                <input type='number'
                  className='form-control'
                  id='height'
                  placeholder='Height'
                  defaultValue={height}
                  ref={heightRef} />
              </div>
              {' '}
              <button type='submit' className='btn btn-default'>Resize</button>
            </form>
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <form className='form-inline'>
              <div className='form-group'>
                <label htmlFor='width'>Speed</label>
                {' '}
                <input type='range'
                  className='form-control'
                  defaultValue={speed}
                  min={1}
                  max={100}
                  onChange={handleSpeedChange}
                  ref={speedRef} />
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  const {board: {width, height}, speed} = state
  return {width, height, speed}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResize (widthString, heightString) {
      const width = parseInt(widthString)
      const height = parseInt(heightString)
      if (isNaN(width) || isNaN(height)) {
        return
      }
      if (width > 0 && height > 0) {
        dispatch(resize(width, height))
      }
    },

    onSpeedChange (speedString) {
      const speed = parseInt(speedString)
      dispatch(setSpeed(speed))
    }
  }
}

Dimensions = connect(mapStateToProps, mapDispatchToProps)(Dimensions)

export default Dimensions
