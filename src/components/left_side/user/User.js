import React from 'react'
import "./User.css"
import userProfileImg from "./user-profile.svg"
export default function User() {

    return (
        <div className="User">
            {/* <input type="text" value={userName} onChange={e => setName(e)} /> */}
            <div className="user-info">
                <div>
                    <img src={userProfileImg} className="user-img" />
                </div>
            </div>
            <div className="search">
                <i class="fas fa-search"></i>
                <input type="search" placeholder="Search or start a new chat"/>
            </div>
        </div>
    )
}
