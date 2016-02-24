import React from 'react'

// import classes from './Dimensions.scss'

const Dimensions = () => {
  return (
    <div className='row dimensions'>

      <div className='col-md-5'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <form className='form-inline'>
              <div className='form-group'>
                <label htmlFor='width'>Width</label>
                <input type='number' className='form-control' id='width' placeholder='Width' defaultValue='10'/>
              </div>
              <div className='form-group'>
                <label htmlFor='height'>Height</label>
                <input type='number' className='form-control' id='height' placeholder='Height' defaultValue='10'/>
              </div>
              <button type='submit' className='btn btn-default'>Change Size</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dimensions
