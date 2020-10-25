import React from 'react'
import "./MemberList.css"
import MemberItem from '../member_item/MemberItem'

export default function MemberList(props) {
    const members = props.members.map((member) => {
        return (
            <MemberItem key={member.uuid} member={member} />
        )
    })
    return (
        <div>
            <h1>Chats</h1>
            {members}
        </div>
    )
}
