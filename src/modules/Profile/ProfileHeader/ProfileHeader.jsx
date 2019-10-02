import React from "react";
import css from './ProfileHeader.module.css'

const ProfileHeader = () => {
    return(
        <div className={css.profileHeader}>
            <img
                src={'https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_bigbearlake_st_rf_1124601590_1280x640.jpg'}
                alt={'Profile'}/>
        </div>
    )
};

export default ProfileHeader;