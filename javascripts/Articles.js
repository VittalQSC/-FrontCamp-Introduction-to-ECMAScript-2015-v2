// import Observable from './Observable';
import Observer from './Observer.js'
import Article from './Article';

// export default class Articles extends Observable {
export default class Articles extends Observer {
	constructor(articleObjects, selector = '#main_content') {
		super();
		this.articles = articleObjects.map(articleObj => new Article(articleObj));
		this.articles.forEach(article => article.attach(this));
		this.selector = selector;
	}

	showArticles() {console.log(this.articles);}

	getTemplate() {
		return this.articles.map(article => article.getTemplate()).join('\n');
	}

	render() {document.querySelector(this.selector).innerHTML = this.getTemplate();}

	editNews (article, newArticle) {
		Object.assign(article, newArticle);
		this.notify();
	}

	update () {this.render();}
}