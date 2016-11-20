'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Articles = function () {
	function Articles(articleObjects) {
		var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#main_content';

		_classCallCheck(this, Articles);

		this.articles = articleObjects.map(function (articleObj) {
			return new Article(articleObj);
		});
		this.selector = selector;
	}

	_createClass(Articles, [{
		key: 'showArticles',
		value: function showArticles() {
			console.log(this.articles);
		}
	}, {
		key: 'getTemplate',
		value: function getTemplate() {
			return this.articles.map(function (article) {
				return article.getTemplate();
			}).join('\n');
		}
	}, {
		key: 'render',
		value: function render() {
			document.querySelector(this.selector).innerHTML = this.getTemplate();
		}
	}]);

	return Articles;
}();