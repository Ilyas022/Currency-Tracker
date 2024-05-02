interface PeriodMocks {
	value: string
	label: string
	unit: 'day' | 'month' | 'year'
}
interface CurrencyMocks {
	value: string
	label: string
}
interface TimelinePageMocks {
	periodMocks: PeriodMocks[]
	currencyMocks: CurrencyMocks[]
}
export const TimelinePageMocks: TimelinePageMocks = {
	periodMocks: [
		{ value: '1DAY', label: '1 day', unit: 'day' },
		{ value: '10DAY', label: '10 days', unit: 'month' },
		{ value: '1MTH', label: '1 month', unit: 'month' },
		{ value: '6MTH', label: '6 months', unit: 'year' },
		{ value: '1YRS', label: '1 year', unit: 'year' },
		{ value: '5YRS', label: '5 years', unit: 'year' },
	],
	currencyMocks: [
		{
			label: 'Bitcoin',
			value: 'BTC',
		},
		{
			label: 'Euro',
			value: 'EUR',
		},
		{
			label: 'British Pound',
			value: 'GBP',
		},
	],
}
