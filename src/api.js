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

const patchVote = (article_id) => {
    return api.patch(`/articles/${article_id}`, {alt_votes: 1}).then(({ data }) => {
        return data;
    });
}

export { getAllArticles, getArticleById, getArticleComments, getArticleVotes, patchVote }

