// import Articles from './Articles';
import Articles from './ArticlesDOMRenderAdapter';
// import Articles from './ArticlesConsoleRenderAdapter';

(function () {
	const API_KEY = '5bfd3aff68c94f36a5d0d87e9e7a1f89';
	const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${API_KEY}`;

	const request = url; 
	const init = {method: 'GET'};
	window.articlesGlobal;

	fetch(request, init)
		.then(response => response.json())
		.then(data => {
			const articles = new Articles(data.articles);
			articles.render();
			
			window.articlesGlobal = articles;
			document.querySelector('.edit-button').addEventListener('click', function () {
				var articles = window.articlesGlobal.articles;
				articles[0] && articles[0].setTitle("NEW TITLE");
			});
		})
		.catch(err => console.log(err))
	
})();
