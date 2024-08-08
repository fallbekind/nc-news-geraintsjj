import './App.css'

import { Routes, Route } from 'react-router-dom'
import ArticleList from './components/ArticleList'
import ArticlePage from './components/ArticlePage'
import ArticleComments from './components/ArticleComments'
import ArticleVotes from './components/ArticleVotes'

function App() {
  return (
    <div className='App' >

    <Routes>

    <Route path='/articles' element={<ArticleList />} />

    <Route path='/articles/:article_id' element={<ArticlePage />} />

    <Route path='/articles/:article_id/comments' element={<ArticleComments />} />

    </Routes>

    </div>
  );
};

export default App
