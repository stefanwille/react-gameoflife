import React from 'react'

const Cell = ({x, y, alive, onClick}) => {
  const className = alive ? 'alive' : 'dead'
  return (
    <td className={className} onMouseDown={onClick}></td>
  )
}

export default Cell
