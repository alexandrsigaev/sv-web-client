import React from "react";
import css from'./Profile.module.css'

const Profile = () => {
    return (
        <div className={css.profile}>
            <div>
                <img
                    src={'https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_bigbearlake_st_rf_1124601590_1280x640.jpg'}
                    alt={'Profile'}/>
            </div>
            <div>ava + desc</div>
            <div>My posts
                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    )
};

export default Profile;