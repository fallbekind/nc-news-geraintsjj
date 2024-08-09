import './App.css'
import { Routes, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import ArticleList from './components/ArticleList'
import ArticlePage from './components/ArticlePage'
import ArticleComments from './components/ArticleComments'

function App() {
  return (

    <div className='App' >

    <Routes>

    <Route path='/' element={<HomePage />} />

    <Route path='/articles' element={<ArticleList />} />

    <Route path='/topics/:topic_slug' element={<ArticleList />} />

    <Route path='/articles/:article_id' element={<ArticlePage />} />

    <Route path='/articles/:article_id/comments' element={<ArticleComments />} />

    </Routes>

    </div>


    
  );
};

export default App
