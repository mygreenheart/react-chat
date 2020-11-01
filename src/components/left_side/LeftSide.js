import React from 'react'
import "./LeftSide.css"
import User from './user/User'
import MemberList from './member_list/MemberList'


export default function LeftSide(props) {
    return (
        <div className="LeftSide">
            <User handleSearch={props.handleSearch} />
            <MemberList messages={props.messages} members={props.members} handleMemberItem={props.handleMemberItem} searchStr={props.searchStr} />
        </div>
    )
}
