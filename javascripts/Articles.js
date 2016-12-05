import Article from './Article';

export default class Articles {
	constructor(articleObjects, selector = '#main_content') {
		this.articles = articleObjects.map(articleObj => new Article(articleObj));
		this.selector = selector;
	}

	showArticles() {console.log(this.articles);}

	getTemplate() {
		return this.articles.map(article => article.getTemplate()).join('\n');
	}

	render() {document.querySelector(this.selector).innerHTML = this.getTemplate();}

}