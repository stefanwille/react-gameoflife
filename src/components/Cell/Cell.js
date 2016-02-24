import React from 'react'

const Cell = ({x, y, alive, onClick}) => {
  const className = alive ? 'alive' : 'dead'
  const onClickHandler = () => onClick(x, y, alive)
  return (
    <td className={className} onMouseDown={onClickHandler}></td>
  )
}

export default Cell
