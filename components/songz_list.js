'use strict';

class SongZListElement extends HTMLElement {
	
	/** {Number} How many days' song plays should be considered */
	static TIME_SPAN = 28;
	/** {Number} How many songs to list */
	static ITEMS_TO_SHOW = 5;
	/** {String} The URL of the SongZ Wrapped API endpoint, with placeholders for the start and end dates */
	static SONGZ_WRAPPED_URL = `https://songz-production.up.railway.app/wrapped/api/songs?count=${this.ITEMS_TO_SHOW}&start=%s&end=%s`;
	
	/** {Object<String, String>} The class name for the music medium label */
	static MUSIC_MEDIUM_LABEL = 'music';
	
	static LOAD_STATA = {
		loading: 0,
		done: 1,
		error: 2
	};
	loadStatus = SongZListElement.LOAD_STATA.loading;
	
	listItems = []
	
	constructor () {
		super();
		this.render();
		
		this.handleListLoad()
			.catch((err) => {
				console.error(err);
				this.loadStatus = SongZListElement.LOAD_STATA.error;
				this.render();
			});
	}
	
	async handleListLoad() {
		const date = new Date(),
			currentDateStr = date.toISOString().split('T')[0];
		date.setDate(date.getDate() - SongZListElement.TIME_SPAN);
		const startDateStr = date.toISOString().split('T')[0],
			songsResponse = await fetch(SongZListElement.SONGZ_WRAPPED_URL.replace('%s', startDateStr).replace('%s', currentDateStr));
		this.listItems = await songsResponse.json();
		
		this.loadStatus = SongZListElement.LOAD_STATA.done;
		this.render();
	}
	
	render() {
		let songsHTML = '';
		if (this.listItems.length > 0) {
			songsHTML = `<ul class="items">
				${this.listItems.map((song) => `
					<li class="${SongZListElement.MUSIC_MEDIUM_LABEL}">
						${song.title}
						<br />
						<small>${song.album?.title || ''}</small>
					</li>
				`).join('')}
			</ul>`;
		}
		this.innerHTML = `
			${this.loadStatus === SongZListElement.LOAD_STATA.loading ?
				'<i>Loading...</i>' :
			this.loadStatus === SongZListElement.LOAD_STATA.error ?
				'<i>Something went wrong loading the list.</i>' :
				songsHTML
			}
		`;
	}
}

customElements.define('songz-list', SongZListElement);
