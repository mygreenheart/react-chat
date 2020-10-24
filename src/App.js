import React, { Component } from 'react'
import LeftSide from './components/left_side/LeftSide'
import RightSide from './components/right_side/RightSide'

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div className="App">
        <LeftSide />
        <RightSide />
      </div>
    )
  }
}
