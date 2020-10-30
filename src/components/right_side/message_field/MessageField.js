import React from 'react'
import "./MessageField.css"
import Message from '../message/Message'

export default function MessageField(props) {
    //Creating message components
    const messageList = props.messages.map(message => {
        if (props.choosenMember.uuid === undefined) {
            return null
        } else if ((props.choosenMember.uuid === message.sender_id) || (props.choosenMember.uuid === message.receiver_id)) {
            return (
                < Message
                    key={message.key}
                    messageDate={new Date(message.date)}
                    message={message}
                    choosenMember={props.choosenMember}
                />)
        }
    })
    console.log(messageList.childNodes)
    return (

        <div className="MessageField">
            {messageList}
        </div>
    )
}
