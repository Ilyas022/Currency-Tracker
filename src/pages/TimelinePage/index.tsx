import React from 'react'
import { toast } from 'react-toastify'

import ChartItem from 'components/Chart'
import Select from 'components/Select'
import observable from 'src/components/observable'
import { axiosInstanceHistory } from 'src/utils/axios'

import { TimelinePageMocks } from './config'
import {
	StyledTimelinePage,
	StyledTimelinePageContainer,
	StyledTimelineSelects,
	StyledTimelineTitle,
} from './styled'

class TimelinePage extends React.PureComponent<
	{},
	{ date: string; currency: string; data: []; isLoaded: boolean; isError: boolean }
> {
	constructor(props: {}) {
		super(props)
		this.state = { date: '1DAY', currency: 'BTC', data: [], isLoaded: false, isError: false }
		this.handleDateSelect = this.handleDateSelect.bind(this)
		this.handleCurrencySelect = this.handleCurrencySelect.bind(this)
		this.handleLoadedData = this.handleLoadedData.bind(this)
		this.getData = this.getData.bind(this)
	}

	componentDidMount(): void {
		observable.subscribe(this.handleLoadedData)
		this.getData()
	}

	componentDidUpdate(
		prevProps,
		prevState: { date: string; currency: string; data: []; isLoaded: boolean }
	) {
		const { currency, date } = this.state
		if (prevState.date !== date || prevState.currency !== currency) {
			this.getData()
		}
	}

	componentWillUnmount() {
		observable.unsubscribe(this.handleLoadedData)
	}

	handleLoadedData({ isLoaded, isError }: { isLoaded: boolean; isError?: boolean }) {
		this.setState({ isLoaded })
		if (isError) {
			this.setState({ isError })
			return toast.error('🦄 Something went wrong!', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				theme: 'light',
			})
		}
		return toast.success('🦄 Data is loaded!', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: 'light',
		})
	}

	handleDateSelect(date: string) {
		this.setState({ date })
	}

	handleCurrencySelect(currency: string) {
		this.setState({ currency })
	}

	getData = async () => {
		const { currency, date } = this.state
		try {
			const res = await axiosInstanceHistory.get(
				`https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${currency}_USD/history?period_id=${date}`
			)
			this.setState({ data: res.data })
			observable.notify({ isLoaded: true })
		} catch (error) {
			observable.notify({ isLoaded: false, isError: true })
		}
	}

	render() {
		const { date, currency, data, isLoaded, isError } = this.state
		const { currencyMocks, periodMocks } = TimelinePageMocks

		const dateDefaultValue = periodMocks.find((item) => item.value === date)
		const dateFilteredOptions = periodMocks.filter((item) => item.value !== date)

		const currencyDefaultValue = currencyMocks.find((item) => item.value === currency)
		const currencyFilteredOptions = currencyMocks.filter((item) => item.value !== currency)
		console.log('data', data)
		console.log('isLoaded', isLoaded)
		return (
			<StyledTimelinePage>
				{isLoaded && (
					<StyledTimelinePageContainer>
						<StyledTimelineSelects>
							<Select
								placeholder="Select date"
								options={dateFilteredOptions}
								handleSelect={this.handleDateSelect}
								defaultValue={dateDefaultValue}
							/>
							<Select
								placeholder="Select currency"
								options={currencyFilteredOptions}
								handleSelect={this.handleCurrencySelect}
								defaultValue={currencyDefaultValue}
							/>
						</StyledTimelineSelects>
						<StyledTimelineTitle $textalign="left">
							{currencyDefaultValue?.label}
						</StyledTimelineTitle>
						<ChartItem optionsData={data} unit={dateDefaultValue?.unit || 'month'} />
					</StyledTimelinePageContainer>
				)}
				{isError && (
					<StyledTimelineTitle>Smth went wrong, we&apos;re fixing this problem</StyledTimelineTitle>
				)}
			</StyledTimelinePage>
		)
	}
}

export default TimelinePage
