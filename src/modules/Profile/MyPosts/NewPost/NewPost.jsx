import React from 'react';
import css from './NewPost.module.css'

const NewPost = () => {
    return(
        <div>
            <form className={css.new_post}>
                <textarea></textarea>
                <br/>
                <button>add</button>
            </form>
        </div>
    )
};

export default NewPost;