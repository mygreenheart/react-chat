import React from 'react'
import "./Message.css"

export default function Message(props) {
    console.log(props.messageDate)
    return (
        <div className="Message">
            <div className="message-icon">
                <img src={props.choosenMember.img} alt={props.choosenMember.name} />
            </div>
            <div className="message-content">
                <div className="message-text">{props.messageContent}</div>
                <div className="message-date">{props.messageDate.getMonth() + "/"
                    + props.messageDate.getDate() + "/"
                    + props.messageDate.getFullYear() + ", "
                    + props.messageDate.getHours() + ":"
                    + props.messageDate.getMinutes()}</div>
            </div>

        </div>
    )
}
