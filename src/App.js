import React, { Component } from 'react'
import "./App.css"
import LeftSide from './components/left_side/LeftSide'
import RightSide from './components/right_side/RightSide'



export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      choosenMember: {},
      members: [
        {
          is_online: true,
          name: "Alice Freeman",
          img: "https://im.kommersant.ru/Issues.photo/CORP/2017/09/15/KMO_152927_00258_1_t218_132144.jpg",
          uuid: "98s7dfh9a8s7dhf"
        },
        {
          is_online: true,
          name: "Josefina",
          img: "https://steamuserimages-a.akamaihd.net/ugc/803174280547006276/37287CBC314D199C52C02991C01F566EB26BE2A7/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
          uuid: "mnzxcv97zx6chvo"
        },
        {
          is_online: false,
          name: "Valazquez",
          img: "https://sun9-63.userapi.com/VSEUlN2Ri6uPqoLLYbr-Gyv_3rtO5QU5MaE40g/T-iB7oCCqvY.jpg",
          uuid: "kjuhv987ashdfoua"
        },
        {
          is_online: false,
          name: "Barrera",
          img: "https://www.spletnik.ru/thumb/310x310/img/persons/kinopoisk_ru-Ryan-Gosling-1090000.jpg",
          uuid: "jdhnf978WEHJSNDL"
        },
        {
          is_online: false,
          name: "Barrera",
          img: "https://www.spletnik.ru/thumb/310x310/img/persons/kinopoisk_ru-Ryan-Gosling-1090000.jpg",
          uuid: "GJb19NYmVkyUDeuKYmyxtA"
        },
        {
          is_online: false,
          name: "Barrera",
          img: "https://www.spletnik.ru/thumb/310x310/img/persons/kinopoisk_ru-Ryan-Gosling-1090000.jpg",
          uuid: "DZTQzeR36keJiNoKYYuFZQ=="
        },
        {
          is_online: false,
          name: "Barrera",
          img: "https://www.spletnik.ru/thumb/310x310/img/persons/kinopoisk_ru-Ryan-Gosling-1090000.jpg",
          uuid: "jR7HZMdoKkaWMI76sOjpgQ=="
        },
      ]

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
        <RightSide members={this.state.members} choosenMember={this.state.choosenMember} />
      </div>
    )
  }
}
