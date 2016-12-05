import './stylesheets/showNews.css';


// if (NODE_ENV == "production") {
//  	console.log("you are now in proudction mode!");
// }

import './stylesheets/taskStyle.css';
import articles from './javascripts/Request.js';

window.editNews = function () {
	var articleCopy = {};
	articles[0] && (Object.assign(articleCopy, articles[0]));
	articleCopy.title = 'THIS NEWS EDITED';
	articles.editNews(articles[0], articleCopy);
}
