import { useEffect, useState } from 'react';
import { getAllArticles } from '../api';

const ArticlesList = () => {

    const [articles, setArticles] = useState([]);
    // const [topic, setTopic] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    useEffect(() => {
        getAllArticles().then((articlesArray) => {
            setArticles(articlesArray.articles)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
        { articles.map((article) => {
            return <div className='article' key={article.article_id} >
                <button id='article-button'>
                    <img src={article.article_img_url} alt='article-image' id='article-image' />
                    <h2 id='article-title'>{article.title}</h2>
                </button>

            </div>
        })
        }
        </>
    )
}

export default ArticlesList