import React, { Component } from 'react'
import "./App.css"
import LeftSide from './components/left_side/LeftSide'
import RightSide from './components/right_side/RightSide'
import messageData from './messageData.json'
import memberData from './membersData.json'
import { v1 as uuidv1 } from 'uuid';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      choosenMember: {},
      message: messageData,
      members: memberData,
      searchStr: "",
      me: {
        isOnline: true,
        name: "Alex",
        img: "http://localhost:3000/static/media/user-profile.9ed2f905.svg",
        uuid: "lAWIy7U/50GcyxkUqEwGhA=="
      }
    }
    this.handleMemberItem = this.handleMemberItem.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.sendMessageData = this.sendMessageData.bind(this)
  }


  componentDidMount() {
    const localMessage = JSON.parse(localStorage.getItem("message") || "[]")
    if (Object.entries(localMessage).length > 0) {
      this.setState(() => ({
        message: localMessage
      }))
    }
  }

  componentDidUpdate() {
    localStorage.setItem("message", JSON.stringify(this.state.message))
  }

  sendMessageData(sendMessage, sendUuid) {
    const date = new Date()
    this.setState(prevState => ({
      message: [
        ...prevState.message, {
          "content": sendMessage, "my_id": this.state.me.uuid, "sender_id": sendUuid, "uuid": uuidv1(), "date": date.getMonth() + "/" +
            date.getDate() + "/" + date.getFullYear() + ", " +
            date.getHours() + ":" +
            date.getMinutes()
        }
      ]
    }))
    setTimeout(() => {
      fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(response => {
          this.setState(prevState => ({
            message: [
              ...prevState.message, {
                "content": response.value, "sender_id": sendUuid, "uuid": uuidv1(), "date": date.getMonth() + "/" +
                  date.getDate() + "/" + date.getFullYear() + ", " +
                  date.getHours() + ":" +
                  date.getMinutes()
              }
            ]
          }))
        })
      alert("message is comming")
    }, 10000)
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

  handleSearch(e) {
    this.setState({ searchStr: e.target.value })
  }

  render() {
    console.log(this.state.searchSrt)
    return (
      <div className="App">
        <LeftSide messages={this.state.message}
          members={this.state.members}
          handleMemberItem={this.handleMemberItem}
          handleSearch={this.handleSearch} 
          searchStr={this.state.searchStr}
          />

        <RightSide me={this.state.me}
          choosenMember={this.state.choosenMember}
          messages={this.state.message}
          sendMessageData={this.sendMessageData} />
      </div>
    )
  }
}
