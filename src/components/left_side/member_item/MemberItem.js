import React from 'react'
import "./MemberItem.css"

export default function MemberItem(props) {

    return (
        <div className="MemberItem">
            <img src={props.member.img} alt={props.member.name} />
            <div>
                <h2>{props.member.name}</h2>
                <p>Message here...</p>
            </div>

        </div>
    )
}
