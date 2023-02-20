'use strict';

class TrelloListElement extends HTMLElement {
	
	/** {Number} How many items to list */
	static ITEMS_TO_SHOW = 5;
	static TRELLO_API_KEY = '33e67e59b586b67d525f2a924043e116';
	static TRELLO_FETCH_LIST_CARDS_URL = `https://api.trello.com/1/lists/%s/cards?key=${this.TRELLO_API_KEY}`;
	static QUEUE_BOARD_ID = 'N4Pdptjz';
	
	/** {Object<String, String>} The class name for each Trello board medium label */
	static MEDIUM_LABELS = {
		'movie(s) or similar': 'movie',
		'game(s)': 'game',
		'TV series, radio series, or similar': 'tv',
		'book(s) or similar': 'book',
		'play(s) or similar': 'play',
		'comic or similar': 'comic',
		'music': 'music',
		'software': 'software'
	};
	
	static LOAD_STATA = {
		loading: 0,
		done: 1,
		error: 2
	};
	loadStatus = TrelloListElement.LOAD_STATA.loading;
	
	listItems = []
	
	constructor () {
		super();
		this.render();
		
		this.handleListLoad()
			.catch((err) => {
				console.error(err);
				this.loadStatus = TrelloListElement.LOAD_STATA.error;
				this.render();
			});
	}
	
	async handleListLoad() {
		const listID = this.getAttribute('list'),
			listResponse = await fetch(TrelloListElement.TRELLO_FETCH_LIST_CARDS_URL.replace('%s', listID)),
			cards = await listResponse.json();
		this.listItems = cards.slice(0, TrelloListElement.ITEMS_TO_SHOW);
		
		this.loadStatus = TrelloListElement.LOAD_STATA.done;
		this.render();
	}
	
	render() {
		let cardsHTML = '';
		if (this.listItems.length > 0) {
			cardsHTML = `<ul class="items">
				${this.listItems.map((card) =>
					`<li class="${TrelloListElement.MEDIUM_LABELS[card.labels[0]?.name] || ''}">${card.name}</li>`).join('')}
			</ul>`;
		}
		this.innerHTML = `
			${this.loadStatus === TrelloListElement.LOAD_STATA.loading ?
				'<i>Loading...</i>' :
			this.loadStatus === TrelloListElement.LOAD_STATA.error ?
				'<i>Something went wrong loading the list.</i>' :
				cardsHTML
			}
		`;
	}
}

customElements.define('trello-list', TrelloListElement);
