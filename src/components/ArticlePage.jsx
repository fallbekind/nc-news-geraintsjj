import { useEffect, useState } from 'react'

import { getArticleById } from '../api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ArticlePage = () => {

    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const { article_id } = useParams();

    useEffect(() => {

        getArticleById(article_id).then((response) => {
            setArticle(response.article);
            setIsLoading(false);
        });
    }, [article_id]);

    if(isLoading) {
        return <p>Loading...</p>
    }
    let date = new Date(article.created_at).toLocaleString().split(', ')[0];

    return (
        <>
        <div className='article-page' key={article.article_id} > 
            <img src={article.article_img_url} alt='article-image' id='article-image' />
            <h1 id='article-title'>{article.title}</h1>

            <h3 id='article-author'>Author: {article.author}</h3>
            <h3 id='article-topic'>Topic: {article.topic}</h3> 
            <h3 id='article-date'>Date: {date}</h3>

            <p id='article-body'>{article.body}</p>

            <Link to={`/articles/${article.article_id}/comments`} > 
                    <button id='article-comments-button'>See comments</button>
            </Link>
        </div>
        </>
    );
};

export default ArticlePage