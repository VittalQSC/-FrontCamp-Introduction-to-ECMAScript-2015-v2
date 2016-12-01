require('./stylesheets/showNews.css');


if (NODE_ENV == "production") {
 	console.log("you are now in proudction mode!");
}

const sn = document.querySelector(".show-news");

window.showNews = function () {
	require('./stylesheets/taskStyle.css');
	require('./javascripts/Request.js');
}