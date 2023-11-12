Overview:
Super Fun Blog is a straightforward and easy-to-use web app for sharing articles and connecting with others.

App.js

- Supports user authentication for secure sign-in and sign-out.
- Allows users to create new articles and refresh the list upon deletion.
- Conditionally displays content based on user login status and whether the user is writing an article.
- Incorporates an article list with pagination for article navigation.

Article.js

- Allows for the display of individual articles with title, author, and content.
- Integrates deletion functionality, allowing for articles to be removed using the deleteArticle service.
- Includes date and body text sections, plus a delete button for article.

ArticleEntry.js

- Contains a form for entering and submitting new articles.
- Captures user input for article title and body with stateful variables.
- Validates input to ensure title and body are provided before submission.
- Displays an error message if submission criteria are not met.

ArticlePagination.js

- An ArticleList component that fetches and displays a list of articles.
- Manages pagination state through lastVisible and loading state.
- Loads additional articles with a "Load More" button, avoiding duplicates.
- Allows for article selection through a passed handler.
- Handles loading states and fetch errors.

articleService.js

- Adds a new article to the Firebase Firestore database with a timestamp, returning the generated document ID along with the article data.
- Retrieves articles from Firestore in descending order by date, with support for pagination using a lastVisible document snapshot to fetch subsequent articles.
- Removes an article from Firestore using its document ID.
