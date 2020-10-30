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
      members: memberData,
      me: {
        isOnline: true,
        name: "Alex",
        img: "http://localhost:3000/static/media/user-profile.9ed2f905.svg",
        uuid: "lAWIy7U/50GcyxkUqEwGhA=="
      }
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
        <LeftSide messages={this.state.message} members={this.state.members} handleMemberItem={this.handleMemberItem} />
        <RightSide me={this.state.me} choosenMember={this.state.choosenMember} messages={this.state.message} />
      </div>
    )
  }
}
