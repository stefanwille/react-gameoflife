import React from 'react'

import classes from './GameOfLife.scss'

const GameOfLife = () => {
  return (
    <div className='row'>
      <div className={classes.gameOfLife}>

        <div className='row headline'>
          <div className='col-md-12 text-center'>
            <h1>Game of Life</h1>
          </div>
        </div>

        <div className='row controls'>
          <div className='col-md-5'>
            <form className='form-inline'>
              <button type='submit' className='btn btn-default btn-lg'>
                <span className='glyphicon glyphicon-play'></span>
              </button>
              <button type='submit' className='btn btn-default btn-lg'>
                <span className='glyphicon glyphicon-pause'></span>
              </button>
              <button type='submit' className='btn btn-default btn-lg'>
                <span className='glyphicon glyphicon-step-forward'></span>
              </button>
            </form>
          </div>
        </div>

        <div className='row cells'>
          <div className='col-md-12'>
            <table>
              <tbody>
                <tr>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        <div className='row dimensions'>
          <div className='col-md-5'>
            <div className='panel panel-default'>
              <div className='panel-body'>

                <form className='form-inline'>
                  <div className='form-group'>
                    <label htmlFor='width'>Width</label>
                    <input type='number' className='form-control' placeholder='Width' value='10' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='height'>Height</label>
                    <input type='number' className='form-control' id='height' placeholder='Height' value='10' />
                  </div>
                  <button type='submit' className='btn btn-default'>Update</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default GameOfLife
