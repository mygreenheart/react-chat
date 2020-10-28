import React from 'react'
import "./MemberItem.css"

export default function MemberItem(props) {

    const date = new Date()
   
    return (
        <div className="MemberItem" onClick={() => props.handleMemberItem(props.member.uuid)}>
            <div className="member-info">
                <img src={props.member.img} alt={props.member.name} />
                <div className="member-text">
                    <div>{props.member.name}</div>
                    <div>Message here...</div>
                </div>
            </div>
            <p className="member-date">{date.getHours() + ":" + date.getMinutes()}</p>
        </div>
    )
}
