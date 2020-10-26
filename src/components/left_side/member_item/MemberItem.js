import React from 'react'
import "./MemberItem.css"

export default function MemberItem(props) {

    const date = new Date()
   
    return (
        <div className="MemberItem" onClick={() => props.handleMemberItem(props.member.uuid)}>
            <div className="member-info">
                <img src={props.member.img} alt={props.member.name} />
                <div>
                    <h2>{props.member.name}</h2>
                    <p>Message here...</p>
                </div>
            </div>
            <p className="member-date">{date.getHours() + ":" + date.getMinutes()}</p>
        </div>
    )
}
