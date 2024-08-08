document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/news')
    .then(response => response.json())
    .then(data => {
      const newsArticles = document.getElementById('news-articles');
      data.articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsArticles.appendChild(articleElement);
      });
    })
    .catch(error => console.error('Error fetching news:', error));
});
