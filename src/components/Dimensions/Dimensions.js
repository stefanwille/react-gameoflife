import React from 'react'
import {connect} from 'react-redux'
import {resize} from 'redux/modules/actionCreators'

// import classes from './Dimensions.scss'

let Dimensions = ({width, height, onResize}) => {
  console.log("width", width, "height", height)
  let widthNode
  let heightNode
  const widthRef = (node) => { widthNode = node }
  const heightRef = (node) => { heightNode = node }
  const handleSubmit = (event) => {
    event.preventDefault()
    onResize(widthNode.value, heightNode.value)
  }

  return (
    <div className='row dimensions'>

      <div className='col-md-5'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <form className='form-inline' onSubmit={handleSubmit} >
              <div className='form-group'>
                <label htmlFor='width'>Width</label>
                <input type='number'
                  className='form-control'
                  id='width'
                  placeholder='Width'
                  defaultValue={width}
                  ref={widthRef} />
              </div>
              <div className='form-group'>
                <label htmlFor='height'>Height</label>
                <input type='number'
                  className='form-control'
                  id='height'
                  placeholder='Height'
                  defaultValue={height}
                  ref={heightRef} />
              </div>
              <button type='submit' className='btn btn-default'>Change Size</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  const {width, height} = state.board
  return {width, height}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResize (widthString, heightString) {
      console.log("onresize")
      const width = parseInt(widthString)
      const height = parseInt(heightString)
      if (isNaN(width) || isNaN(height)) {
        return
      }
      if (width > 0 && height > 0) {
        dispatch(resize(width, height))
      }
    }
  }
}

Dimensions = connect(mapStateToProps, mapDispatchToProps)(Dimensions)

export default Dimensions
