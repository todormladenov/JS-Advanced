function getArticleGenerator(articles) {
    
    return function addArticle(){
        let contentElement = document.getElementById('content');

        if (!articles.length) {
            return
        }

        let article = document.createElement('article');
        article.textContent = articles.shift();
        contentElement.appendChild(article);
    }
}
