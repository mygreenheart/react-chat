import React from 'react'
import "./MemberItem.css"
import isOnline from "../../../img/isOnline.png"

export default function MemberItem(props) {

    const date = new Date()

    return (
        <div className="MemberItem" onClick={() => props.handleMemberItem(props.member.uuid)}>
            <div className="member-info">
                <div className="member-icon">
                    <img src={props.member.img} alt={props.member.name}></img>
                    {props.member.is_online ? <i class="far fa-check-circle"></i> : null}

                </div>
                <div className="member-text">
                    <div>{props.member.name}</div>
                    <div>{props.lastMessage}</div>
                </div>
            </div>
            <div className="member-date">{date.getHours() + ":" + date.getMinutes()}</div>
        </div>
    )
}
