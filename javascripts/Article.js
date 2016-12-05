import ArticleBuilder from './ArticleBuilder.js'

export default class Article {
	constructor(article) {
		Object.assign(this, article);
		this.articleBuilder = new ArticleBuilder();
	}

	getTemplate() {
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
}
 