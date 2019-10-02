import React from "react";
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Profile = () => {
    return (
        <div>
            <ProfileHeader/>

            <div>ava + desc</div>

            <MyPosts/>
        </div>
    )
};

export default Profile;