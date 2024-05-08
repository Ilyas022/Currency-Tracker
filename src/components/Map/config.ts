export const config = {
	banks: [
		{
			id: '1',
			latitude: 53.938302,
			longitude: 27.473401,
			name: 'Белагропромбанк',
			currencies: ['USD', 'EUR', 'GBP'],
		},

		{
			id: '2',
			latitude: 53.908074,
			longitude: 27.548897,
			name: 'Belarusbank',
			currencies: ['EUR', 'JPY'],
		},

		{
			id: '3',
			latitude: 53.863788,
			longitude: 27.482719,
			name: 'Белинвестбанк',
			currencies: ['USD', 'EUR', 'CNY'],
		},

		{
			id: '4',
			latitude: 53.874619,
			longitude: 27.629984,
			name: 'МТБАНК',
			currencies: ['USD', 'CNY', 'GBP'],
		},

		{
			id: '5',
			latitude: 53.911147,
			longitude: 27.633543,
			name: 'БСБ Банк',
			currencies: ['GBP', 'JPY'],
		},

		{
			id: '6',
			latitude: 53.94161,
			longitude: 27.608514,
			name: 'Alpha bank',
			currencies: ['JPY', 'USD'],
		},
		{
			id: '7',
			latitude: 53.895302,
			longitude: 27.653344,
			name: 'Belarusbank',
			currencies: ['USD', 'CNY'],
		},
		{
			id: '8',
			latitude: 53.937939,
			longitude: 27.487805,
			name: 'BelAgroPromBank',
			currencies: ['USD', 'JPY'],
		},
		{
			id: '9',
			latitude: 53.955623,
			longitude: 27.611349,
			name: 'Paritetbank',
			currencies: ['GBP', 'EUR'],
		},
		{
			id: '10',
			latitude: 53.918344,
			longitude: 27.450397,
			name: 'БСБ Банк',
			currencies: ['GBP', 'EUR'],
		},
	],
	currencies: [
		{
			label: 'Euro',
			value: 'EUR',
		},
		{
			label: 'British Pound',
			value: 'GBP',
		},
		{
			label: 'Chinese Yuan',
			value: 'CNY',
		},
		{
			label: 'Japanese Yen',
			value: 'JPY',
		},
		{
			label: 'US Dollar',
			value: 'USD',
		},
	],
	initialViewState: {
		longitude: 27.5615,
		latitude: 53.9045,
		zoom: 10,
	},
	mapStyle: 'mapbox://styles/mapbox/streets-v9',
}
