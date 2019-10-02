import React from 'react';
import css from './Post.module.css'

const Post = (props) => {
    console.log(props.message);
    return(
        <div className={css.post}>
            {props.message}
        </div>
    )
};

export default Post;