import React from 'react'
import "./MessageField.css"
import Message from '../message/Message'

export default function MessageField(props) {
    const messageList = props.messages.map(message => {
        if (props.choosenMember.uuid === message.sender_id) {
            return (
                < Message
                    key={message.key}
                    messageDate={new Date(message.date)}
                    messageContent={message.content}
                    choosenMember={props.choosenMember}
                />)
        }

    })
    return (

        <div className="MessageField">
            {messageList}
        </div>
    )
}
