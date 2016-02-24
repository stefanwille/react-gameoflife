import React from 'react'

// import classes from './GameOfLife.scss'

const Controls = () => {
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
          <button type='submit' className='btn btn-default'>
            <span className='glyphicon glyphicon-step-forward'></span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Controls
