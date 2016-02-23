import React from 'react'
import GameOfLife from 'components/GameOfLife/GameOfLife'

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class HomeView extends React.Component {
  render () {
    return (
      <div className='container'>
        <GameOfLife />
      </div>
    )
  }
}

export default HomeView
