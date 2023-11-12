import { deleteArticle } from "../services/articleService"
import happyface from '../happyface.jpeg'
export default function Article({ article, onDelete }) {

  const handleDelete = async event => {
    await deleteArticle(article.id)
    if (onDelete){
        onDelete(article.id)
    }
  }
  
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p>Written by {article.authorId ?? 'Anon'}</p>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
          <button onClick={handleDelete}>Delete Article</button>
        </section>
      )}
    </article>
  )
}
