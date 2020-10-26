import React from 'react'
import "./MessageHeader.css"

export default function MessageHeader(props) {
    return (
        <div className="MessageHeader">
            <img src={props.choosenMember.img} alt={props.choosenMember.name} />
            <p>{props.choosenMember.name}</p>
        </div>
    )
}
