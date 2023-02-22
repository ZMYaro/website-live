'use strict';

import './songz_list.js';
import './trello_list.js';

class RecentMediaElement extends HTMLElement {
	
	static QUEUE_IN_PROGRESS_LIST_ID = '52e9f7f65bbb073934347e5e';
	static QUEUE_DONE_LIST_ID = '52e9f7f65bbb073934347e5f';
	
	constructor () {
		super();
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.adoptedStyleSheets = [RecentMediaElement.styles];
		shadowRoot.innerHTML = `
			<h2>Currently consuming:</h2>
			<trello-list list="${RecentMediaElement.QUEUE_IN_PROGRESS_LIST_ID}"></trello-list>
			<h2>Recently consumed:</h2>
			<trello-list list="${RecentMediaElement.QUEUE_DONE_LIST_ID}"></trello-list>
			<h2>Top songs of the month:</h2>
			<songz-list></songz-list>
		`;
	}
}

RecentMediaElement.styles = new CSSStyleSheet();
RecentMediaElement.styles.replace(`
	:host {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: safe center;
		padding: 8px;
		padding-left: 16px;
		overflow-y: auto;
	}
	h2 {
		margin-bottom: 0;
		font-size: 1.1em;
	}
	.items {
		margin: 0;
		padding-left: 1.5em;
		list-style-type: none;
	}
		.items li::before {
			content: '\\25cf';
			display: inline-block;
			width: 1.5em;
			margin-left: -1.5em;
			text-align: center;
		}
			.items li.movie::before {
				content: '🎥';
			}
			.items li.game::before {
				content: '🎮';
			}
			.items li.tv::before {
				content: '📺';
			}
			.items li.book::before {
				content: '📕';
			}
			.items li.play::before {
				content: '🎭';
			}
			.items li.comic::before {
				content: '🗯️';
			}
			.items li.music::before {
				content: '🎵';
			}
			.items li.software::before {
				content: '💿';
			}
`);

customElements.define('recent-media', RecentMediaElement);
