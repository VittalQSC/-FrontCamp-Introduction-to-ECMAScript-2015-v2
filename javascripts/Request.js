const Articles = require('./Articles');

(function () {
	const API_KEY = '5bfd3aff68c94f36a5d0d87e9e7a1f89';
	const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${API_KEY}`;

	const request = url; 
	const init = {method: 'GET'};

	fetch(request, init)
		.then(response => response.json())
		.then(data => {
			const articles = new Articles(data.articles);
			articles.render();
		})
		.catch(err => console.log(err))

})()