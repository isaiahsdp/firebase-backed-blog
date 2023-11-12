// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { db } from "../firebaseConfig"
import { doc, deleteDoc, collection, query, getDocs, addDoc, orderBy, limit, Timestamp, startAfter } from "firebase/firestore"

export async function createArticle({ title, body, authorId }) {
  const data = { title, body, date: Timestamp.now(), authorId }
  const docRef = await addDoc(collection(db, "articles"), data)
  return { id: docRef.id, ...data }
}

export async function fetchArticles(lastVisible = null) {
  const articlesQuery = lastVisible
    ? query(collection(db, "articles"), orderBy("date", "desc"), startAfter(lastVisible), limit(5))
    : query(collection(db, "articles"), orderBy("date", "desc"), limit(5));

  const snapshot = await getDocs(articlesQuery);
  
  return {
    lastVisible: snapshot.docs[snapshot.docs.length - 1],
    articles: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
  };
}

export const deleteArticle = async (articleId) => {
    await deleteDoc(doc(db, "articles", articleId));
};