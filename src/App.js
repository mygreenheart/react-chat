import React, { Component } from 'react'
import "./App.css"
import LeftSide from './components/left_side/LeftSide'
import RightSide from './components/right_side/RightSide'
import messageData from './messageData.json'
import memberData from './membersData.json'



export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      choosenMember: {},
      message: messageData,
      members: memberData
    }
    this.handleMemberItem = this.handleMemberItem.bind(this)
  }


  handleMemberItem(id) {
    this.state.members.map(member => {
      if (member.uuid === id) {
        this.setState(
          this.state.choosenMember = member
        )
      }
    })
  }

  render() {
    return (
      <div className="App">
        <LeftSide members={this.state.members} handleMemberItem={this.handleMemberItem} />
        <RightSide choosenMember={this.state.choosenMember} messages={this.state.message} />
      </div>
    )
  }
}
