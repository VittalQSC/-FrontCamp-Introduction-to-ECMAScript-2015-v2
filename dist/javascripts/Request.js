'use strict';

(function () {
	var API_KEY = '5bfd3aff68c94f36a5d0d87e9e7a1f89';
	var url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=' + API_KEY;
	var xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status != 200) {
		console.log(xhr)
	} else {
		var response = JSON.parse(xhr.responseText);	
		var articles = new Articles(response.articles);
		articles.render();
	}

})();