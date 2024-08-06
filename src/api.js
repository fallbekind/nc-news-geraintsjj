import axios from 'axios'
import React from 'react'

const api = axios.create({ baseURL: 'https://be-nc-news-o4ao.onrender.com/api' });

const getAllArticles = () => {
    return api.get('/articles').then(({ data }) => {
        console.log(data)
        return data;
    });
};

export { getAllArticles };

