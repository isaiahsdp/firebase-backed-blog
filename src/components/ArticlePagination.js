import React, {useState, useEffect} from "react";
import { fetchArticles } from "../services/articleService";

const ArticleList = ({ onArticleSelect, onArticleDelete, articles, setArticles }) => {
    const [lastVisible, setLastVisible] = useState(null);
    const [loading, setLoading] = useState(false);
    

    const loadMoreArticles = async () => {
        if (loading) return;
        setLoading(true);
    try {
        const { articles: newArticles, lastVisible: newLastVisible} = await fetchArticles(lastVisible);
        setArticles(prev => {
            const existingIds = new Set(prev.map(a => a.id));
            const uniqueNewArticles = newArticles.filter(a => !existingIds.has(a.id));
            return [...prev, ...uniqueNewArticles];
          });
        setLastVisible(newLastVisible);
    } catch (error) {
        console.error("Failed to fetch articles: ", error)
    } finally {
        setLoading(false)
    }
    }; 

useEffect(() => {
    loadMoreArticles();
}, []);


return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <p onClick={() => onArticleSelect(article)}>
            {article.title}
          </p>
        </div>
      ))}
      <button onClick={loadMoreArticles} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default ArticleList;

