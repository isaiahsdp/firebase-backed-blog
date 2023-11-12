import React, { useState } from 'react';
import Article from './Article';
import ArticleEntry from './ArticleEntry';
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { createArticle } from '../services/articleService';
import ArticleList from './ArticlePagination'
import './App.css';

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(false);
  const user = useAuthentication();

  const handleDelete = articleid => {
    setArticle(null)
    window.location.reload()
  }
  function addArticle({ title, body }) {
    createArticle({ title, body, authorId: user.uid }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles]);
      setWriting(false)
    })
  }

  return (
    <div className="App">
      <header>
        <span>Super Fun Blog</span>
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        {!user ? <SignIn /> : <SignOut />}{' '}
      </header>
      
      {!user ? (
        ""
      ) : (
          <div className="navigation-container">
          <ArticleList articles = {articles} setArticles = {setArticles} onArticleSelect={setArticle} />
          </div>

      )}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        article && <Article article={article} onDelete={handleDelete}/>
      )}
    </div>
  );
}
