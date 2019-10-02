import React from 'react';
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = () => {
    return(
        <div className={css.myPosts}>My posts:
            <NewPost/>
            <Post message = 'How are you??'/>
            <Post message = 'It`s my posts'/>
        </div>
    )
};

export default MyPosts;