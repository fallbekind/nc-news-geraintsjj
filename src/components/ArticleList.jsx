import { useEffect, useState } from 'react'
import { getAllArticles } from '../api'
import { Link } from 'react-router-dom'

const ArticleList = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    useEffect(() => {
        getAllArticles().then((articlesArray) => {
            setArticles(articlesArray.articles);
            setIsLoading(false);
        });
    }, []);

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
        { articles.map((article) => {
            return (
            <div className='article-list' key={article.article_id} >

                <Link to={`/articles/${article.article_id}`} > 
                    <button id='article-list-button'>
                        <img src={article.article_img_url} alt='article-image' id='article-image' />
                        <h2 id='article-title'>{article.title}</h2>
                    </button>
                </Link>
            </div>
            )
        })}
        </>
    );
};

export default ArticleList