import React from 'react'
import MessageHeader from '../right_side/message_header/MessageHeader'
import MessageField from '../right_side/message_field/MessageField'
import "./RightSide.css"

export default function RightSide() {
    return (
        <div className="RightSide">
            <MessageHeader />
            <MessageField />
        </div>
    )
}
