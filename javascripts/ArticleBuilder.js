export default class ArticleBuilder {
	constructor (articleFields) {
		Object.assign(this, articleFields);
		this.body = ``;
	}

	buildImgTitle (urlToImage) {
		urlToImage = urlToImage || this.urlToImage;
		this.body += `<img class='urlToImage' src='${urlToImage}'></img>
		`
	}

	buildTitle (title) {
		title = title || this.title;
		this.body += `<h1 class='title'>${title}<h1>
		`		
	}

	buildPublishDate (publishedAt) {
		publishedAt = publishedAt || this.publishedAt;
		this.body += `<h2 class='publishedAt'>${publishedAt}<h2>
		`		
	}

	buildDescription (description) {
		description = description || this.description;
		this.body += `<p class='description'>${description}<p>
		`		
	}

	buildAuthor (author) {
		author = author || this.author;
		this.body += `<h2 class='author'>${author}<h2>
		`		
	}

	buildUrl (url) {
		url = url || this.url;
		this.body += `<a class='url' href='${url}'>${url}</a>
		`		
	}

	getResult() {
		return `
		<div class='article'>
			${this.body}
		</div>	
		`
	}

}

 /*
		<div class='article'>
			<img class='urlToImage' src='${this.urlToImage}'></img>
			<h1 class='title'>${this.title}<h1>
			<h2 class='publishedAt'>${this.publishedAt}<h2>
			<p class='description'>${this.description}<p>
			<h2 class='author'>${this.author}<h2>
			<a class='url' href='${this.url}'>${this.url}</a>
		</div>	
 */