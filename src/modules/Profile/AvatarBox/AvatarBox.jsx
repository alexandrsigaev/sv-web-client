import React from 'react';
import css from './AvatarBox.module.css'

const AvatarModule = (props) => {
    return (
        <div className={css.avatar__module}>
            <img src={'https://m.media-amazon.com/images/M/MV5BMTcxOTk4NzkwOV5BMl5BanBnXkFtZTcwMDE3MTUzNA@@._V1_.jpg'}
                 alt={'avatar'}/>
            <span>User Name</span>
        </div>
    );
};

export default AvatarModule;