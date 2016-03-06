import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {resize, setSpeed} from 'redux/modules/actionCreators'

// import classes from './Dimensions.scss'

class DimensionsPresentation extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    onResize: PropTypes.func.isRequired,
    onSpeedChange: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className='row dimensions'>

        <div className='col-md-5'>
          <div className='panel panel-default'>
            <div className='panel-body'>
              <form className='form-inline' onSubmit={this.handleSubmit} >
                <div className='form-group'>
                  <label htmlFor='width'>Width</label>
                  {' '}
                  <input type='number'
                    className='form-control'
                    id='width'
                    placeholder='Width'
                    defaultValue={this.props.width}
                    ref={(ref) => { this.widthRef = ref }} />
                </div>
                {' '}
                <div className='form-group'>
                  <label htmlFor='height'>Height</label>
                  {' '}
                  <input type='number'
                    className='form-control'
                    id='height'
                    placeholder='Height'
                    defaultValue={this.props.height}
                    ref={(ref) => { this.heightRef = ref }} />
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
                <div className='form-group speed'>
                  <label htmlFor='width'>Speed</label>
                  {' '}
                  <p className='form-control-static'>{this.props.speed}</p>
                  {' '}
                  <input type='range'
                    className='form-control'
                    defaultValue={this.props.speed}
                    min={1}
                    max={100}
                    onChange={this.handleSpeedChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onResize(this.widthRef.value, this.heightRef.value)
  }

  handleSpeedChange = (event) => {
    this.props.onSpeedChange(event.target.value)
  }
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

const Dimensions = connect(mapStateToProps, mapDispatchToProps)(DimensionsPresentation)

export default Dimensions
