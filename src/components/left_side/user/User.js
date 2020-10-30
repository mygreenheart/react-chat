import React from 'react'
import "./User.css"
import userProfileImg from "./user-profile.svg"
export default function User() {

    return (
        <div className="User">
            {/* <input type="text" value={userName} onChange={e => setName(e)} /> */}
            <div className="user-info">
                <img src={userProfileImg} className="user-img" alt="user" />
                <i class="far fa-check-circle"></i>
            </div>
            <div className="search">
                <input type="text" placeholder="&#xF002; Search or start a new chat" />
            </div>
        </div>
    )
}
