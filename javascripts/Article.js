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
		const article = document.createElement('div');
		article.className = 'article';
		article.innerHTML =  this.getTemplate();
		return article;
	}
}