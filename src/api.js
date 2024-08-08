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

const getArticleComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
        return data;
    });
};

const getArticleVotes = (article_id) => {
    return api.get(`/articles/${article_id}`).then(({ data }) => {
        return data;
    });
};

const postVote = (article_id) => {
    return api.patch(`/articles/${article_id}/votes`).then(({ data }) => {
        return data;
    });
}

export { getAllArticles, getArticleById, getArticleComments, getArticleVotes, postVote }

