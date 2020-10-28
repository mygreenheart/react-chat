import React from 'react'
import MessageHeader from '../right_side/message_header/MessageHeader'
import MessageField from '../right_side/message_field/MessageField'
import "./RightSide.css"

export default function RightSide(props) {

    return (
        <div className="RightSide">
            <MessageHeader choosenMember={props.choosenMember} />
            <MessageField me={props.me} messages={props.messages} choosenMember={props.choosenMember} />
        </div>
    )
}
