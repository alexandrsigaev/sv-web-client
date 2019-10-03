import React from "react";
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import AvatarModule from "./AvatarBox/AvatarBox";

const Profile = () => {
    return (
        <div className={css.profile}>
            <ProfileHeader/>
            <AvatarModule/>
            <MyPosts/>
        </div>
    )
};

export default Profile;