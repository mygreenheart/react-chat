import React from 'react'
import MessageHeader from '../right_side/message_header/MessageHeader'
import MessageField from '../right_side/message_field/MessageField'
import "./RightSide.css"
import MessageSend from './message_send/MessageSend'

export default function RightSide(props) {

    return (
        <div className="RightSide">
            <MessageHeader choosenMember={props.choosenMember} />
            <MessageField me={props.me} messages={props.messages} choosenMember={props.choosenMember} />
            {(Object.entries(props.choosenMember).length === 0) ? null : <MessageSend choosenMember={props.choosenMember} sendMessageData={props.sendMessageData} />}
        </div>
    )
}
