import Articles from './Articles';

export default class ArticlesDOMRenderAdapter extends Articles {
	render() {document.querySelector(this.selector).innerHTML = this.getTemplate();}
}