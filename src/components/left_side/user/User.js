import React from 'react'
import "./User.css"
import userProfileImg from "./user-profile.svg"
export default function User(props) {

    return (
        <div className="User">
            {/* <input type="text" value={userName} onChange={e => setName(e)} /> */}
            <div className="user-info">
                <img src={userProfileImg} className="user-img" alt="user" />
                <i class="far fa-check-circle"></i>
            </div>
            <input type="text" onChange={(e) => props.handleSearch(e)} placeholder="&#xF002; Search or start a new chat" />
        </div>
    )
}
