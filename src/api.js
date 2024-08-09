import axios from 'axios'

const api = axios.create({ baseURL: 'https://be-nc-news-o4ao.onrender.com/api' });

const getAllArticles = () => {
    return api.get('/articles').then(({ data }) => {
        return data;
    });
};

const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`)
    .then(({ data }) => {
        return data;
    });
};

const getArticleComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
        return data;
    });
};

const getArticleVotes = (article_id) => {
    return api.get(`/articles/${article_id}`)
    .then(({ data }) => {
        return data;
    });
};

const patchVote = (article_id) => {
    return api.patch(`/articles/${article_id}`, {alt_votes: 1})
    .then(({ data }) => {
        return data;
    });
};

const postComment = (article_id, { username, body }) => {
    return api.post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => {
        return data.comment;
    });
};

const deleteComment = (comment_id) => {
    return api.delete(`/comments/${comment_id}`)
    .then(({ data }) => {
        return data
    });
};

const getTopics = () => {
    return api.get(`/topics`).then(({ data }) => {
        return data
    });
};

const getArticlesByTopic = (topic_slug) => {
    return api.get(`/articles?topic=${topic_slug}`)
    .then(({ data }) => {
        return data
    });
};

export { getAllArticles, getArticleById, getArticleComments, 
    getArticleVotes, patchVote, postComment, deleteComment, getTopics, 
    getArticlesByTopic };

