import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { getAllArticles, getArticlesByTopic } from '../api';
import TopicDropdown from './Topics';

const ArticleList = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const { topic_slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        if (topic_slug) {
            getArticlesByTopic(topic_slug)
            .then((articlesArray) => {
                setArticles(articlesArray.articles);
            })

        } else {
            getAllArticles().then((articlesArray) => {
                setArticles(articlesArray.articles);
            })
        }
    }, [topic_slug]);

    const handleTopic = (selectedTopic) => {
        if (selectedTopic === '') {
            navigate('/articles');
        } else {
        navigate(`/topics/${ selectedTopic }`);
        };
    };

    if(isLoading) {
        return <p>Loading...</p>
    };

    return (
        <>
        <TopicDropdown onTopicChange={ handleTopic } />

        { articles.map((article) => {
            return (
            <div className='article-list' key={ article.article_id } >

                <Link to={`/articles/${ article.article_id }`} > 
                    <button id='article-list-button'>
                        <img src={ article.article_img_url } alt='article-image' id='article-image' />
                        <h2 id='article-title'>{ article.title }</h2>
                    </button>
                </Link>
            </div>
            )
        })}
        </>
    );
};

export default ArticleList