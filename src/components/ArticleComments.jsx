import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getArticleComments, postComment, deleteComment } from '../api';
import PostComment from './PostComment';

const ArticleComments = () => {

    const [articleComments, setArticleComments] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const { article_id } = useParams();

    const hardCodedUser = 'cooljmessy';

    useEffect(() => {

        getArticleComments(article_id).then((response) => {
    
            setArticleComments(response.comments);
            setIsLoading(false);
        });
    }, [article_id]);

    const handlePostComment = (username, comment) => {
        postComment(article_id, { username, body: comment }).then((response) => {
            setArticleComments((commentsList) => [response, ...commentsList]);
        });
    };

    const handleDeleteComment = (comment_id, commentAuthor) => {
        if (commentAuthor === hardCodedUser) {
        
        deleteComment(comment_id).then(() => {
            setArticleComments((commentsList) => 
                commentsList.filter((comment) => comment.comment_id !== comment_id)
            );
        });
    }
    }

    if(isLoading) {
        return <p>Loading...</p>
    };

    return (
        <>
            { articleComments.map((comment) => (
                <div className='article-comments' key={comment.comment_id}>
                    <p id='comment-body'>{comment.body}</p>
                    <p id='comment-author'>User: {comment.author}</p>
                    <p id='comment-votes'>Votes: {comment.votes}</p>

                    {comment.author === hardCodedUser && (
                        <button onClick={() => handleDeleteComment(comment.comment_id, comment.author)}>Delete</button>
                    )}
                </div>
            ))
            }
            <PostComment onPostComment={handlePostComment} />
        </>
    );
};
export default ArticleComments