import { useEffect, useState } from 'react';

import { getArticleComments } from '../api';
import { useParams } from 'react-router-dom';

const ArticleComments = () => {

    const [articleComments, setArticleComments] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const { article_id } = useParams();

    useEffect(() => {

        getArticleComments(article_id).then((response) => {
            console.log(response.comments)
            setArticleComments(response.comments);
            setIsLoading(false);
        });
    }, [article_id]);

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
        { articleComments.map((comment) => {
            return (
            <div className='article-comments' key={comment.comment_id} >

                {/* <Link to={`/articles/${article.article_id}`} >  */}

                    <p id='comment-body'>{comment.body}</p>
                    <p id='comment-author'>User: {comment.author}</p>
                    <p id='comment-votes'>Votes: {comment.votes}</p>

                {/* </Link> */}
            </div>
            )
        })}
        </>
    );
};

export default ArticleComments