import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getArticleVotes, patchVote } from '../api';

const ArticleVotes = () => {
    
    const [articleVotes, setArticleVotes] = useState(0);
    const [error, setError] = useState(null);

    const { article_id } = useParams();

    useEffect(() => {
        getArticleVotes(article_id).then((response) => {
            console.log(response.article.votes)
            setArticleVotes(response.article.votes);
        });
    }, []);

    const handleVote = () => {
        setArticleVotes((articleVotes) => articleVotes + 1);

        setError(null);
        patchVote(article_id).catch((err) => {
            setArticleVotes((articleVotes) => articleVotes - 1);
        });
    };
    return (
        <div>
            <button onClick={ handleVote }>Vote</button>
            {error ? <p>{error}</p> : null}
            <p>{articleVotes} Votes</p>
        </div>
    );
};

export default ArticleVotes