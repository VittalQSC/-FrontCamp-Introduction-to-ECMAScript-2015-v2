class Articles {
	constructor(articles) {
		var articleObj, article; 
		this.articles = []; //articles.slice(0);
		for (articleObj of articles) {
			article = new Article(articleObj);
			this.articles.push(article);
		}
	}

	showArticles() {this.articles.forEach(article => console.log(article));}

	getTemplate() {
		return this.articles.map(article => article.getTemplate()).join('\n');
	}

	render() {
		document.querySelector('#main_content').innerHTML = this.getTemplate();
	}

}

class Article {
	constructor(article) {Object.assign(this, article);}

	getTemplate() {
		return `
		<div class='article'>
			<img class='urlToImage' src='${this.urlToImage}'></img>
			<h1 class='title'>${this.title}<h1>
			<h2 class='publishedAt'>${this.publishedAt}<h2>
			<p class='description'>${this.description}<p>
			<h2 class='author'>${this.author}<h2>
			<a class='url' href='${this.url}'>${this.url}</a>
		</div>	
		`;
	}
	
	render() {
		let article = document.createElement('div');
		article.className = 'article';
		article.innerHTML =  this.getTemplate();
		return article;
	}
}

const API_KEY = '5bfd3aff68c94f36a5d0d87e9e7a1f89';
const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${API_KEY}`;

const request = new Request(url, {method: 'GET'}), 
	  init = {method: 'GET'};

fetch(request, init)
	.then(response => response.json())
	.then(data => {
		let articles = new Articles(data.articles);
		// articles.showArticles();
		// console.log(articles.getTemplate())
		articles.render();
	})
	.catch(err => console.log(err))
