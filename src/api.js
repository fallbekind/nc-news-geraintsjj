import axios from 'axios'

const api = axios.create({ baseURL: 'https://be-nc-news-o4ao.onrender.com/api' });

const getAllArticles = () => {
    return api.get('/articles').then(({ data }) => {
        return data;
    });
};

const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`).then(({ data }) => {
        return data;
    });
};

export { getAllArticles, getArticleById }

