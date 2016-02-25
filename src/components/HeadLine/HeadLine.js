import React from 'react'

import classes from './HeadLine.scss'

const HeadLine = () => {
  return (
    <div className={classes.headline}>
      <div className='row'>
        <div className='col-md-12'>
          <h1>Game of Life</h1>
        </div>
      </div>
    </div>
  )
}

export default HeadLine
