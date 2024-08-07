import './App.css'

import { Routes, Route } from "react-router-dom";
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <div className='App' >

    <Routes>

    <Route path='/articles' element={<ArticleList />} />

    <Route path='/articles/:article_id' element={<ArticlePage />} />

    </Routes>

    </div>
  );
};

export default App
