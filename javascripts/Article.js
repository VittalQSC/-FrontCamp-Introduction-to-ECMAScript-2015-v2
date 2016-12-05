// import Observer from './Observer.js'
import Observable from './Observable';
import ArticleBuilder from './ArticleBuilder.js'

// export default class Article extends Observer {
export default class Article extends Observable {
	constructor(article) {
		super();
		Object.assign(this, article);
		this.articleBuilder = new ArticleBuilder();
	}

	getTemplate() {
		this.articleBuilder.clear();
		this.articleBuilder.buildImgTitle(this.urlToImage);
		this.articleBuilder.buildTitle(this.title);
		this.articleBuilder.buildPublishDate(this.publishedAt);
		this.articleBuilder.buildDescription(this.description);
		this.articleBuilder.buildAuthor(this.author);
		this.articleBuilder.buildUrl(this.url);

		return this.articleBuilder.getResult();
	}
	
	render() {
		const article = document.createElement('div');
		article.className = 'article';
		article.innerHTML =  this.getTemplate();
		return article;
	}

	setTitle (title) {
		this.title = title;
		this.notify();
	}
}
 