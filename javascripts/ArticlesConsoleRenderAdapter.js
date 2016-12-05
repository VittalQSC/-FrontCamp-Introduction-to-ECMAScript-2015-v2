import Articles from './Articles';

export default class ArticlesConsoleRenderAdapter extends Articles {
	render () {
		console.log(this.getTemplate())
	}
}
