import React from 'react'
import "./LeftSide.css"
import User from './user/User'
import MemberList from './member_list/MemberList'


export default function LeftSide(props) {
    return (
        <div className="LeftSide">
            <User />
            <MemberList members={props.members} />
        </div>
    )
}
