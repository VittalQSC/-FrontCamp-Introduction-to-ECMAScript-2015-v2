'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Article = function () {
	function Article(article) {
		_classCallCheck(this, Article);

		for (var key in article) {this[key] = article[key];}
	}

	_createClass(Article, [{
		key: 'getTemplate',
		value: function getTemplate() {
			return '\n\t\t<div class=\'article\'>\n\t\t\t<img class=\'urlToImage\' src=\'' + this.urlToImage + '\'></img>\n\t\t\t<h1 class=\'title\'>' + this.title + '<h1>\n\t\t\t<h2 class=\'publishedAt\'>' + this.publishedAt + '<h2>\n\t\t\t<p class=\'description\'>' + this.description + '<p>\n\t\t\t<h2 class=\'author\'>' + this.author + '<h2>\n\t\t\t<a class=\'url\' href=\'' + this.url + '\'>' + this.url + '</a>\n\t\t</div>\t\n\t\t';
		}
	}, {
		key: 'render',
		value: function render() {
			var article = document.createElement('div');
			article.className = 'article';
			article.innerHTML = this.getTemplate();
			return article;
		}
	}]);

	return Article;
}();