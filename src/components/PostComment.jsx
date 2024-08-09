import { useState } from 'react';

const PostComment = ({ onPostComment }) => {

    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onPostComment(username, comment);
        setUsername('');
        setComment('');
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input
                    type='text'
                    value={ username }
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder='Username...'
                    required
                />
                <textarea
                    value={ comment }
                    onChange={(event) => setComment(event.target.value)}
                    placeholder='Comment...'
                    required
                />
                <button type='submit'>Post Comment</button>
            </form>
        </div>
    );
};

export default PostComment;