import { Dispatch, bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { connect } from 'react-redux'

import ChartItem from 'components/Chart'
import { ErrorBoundary } from 'components/ErrorBoundary'
import LoadingSpinner from 'components/LoadingSpinner'
import observable from 'components/Observable'
import Select from 'components/Select'
import { RootState } from 'store/index'
import { fetchHistory as fetchHistoryData } from 'store/slices/historySlice'
import { createErrorToast, createSuccessToast } from 'utils/createToast'

import { TimelinePageMocks } from './config'
import HistoryDataPopUp from './HistoryDataPopUp'
import {
	TimelinePageComp,
	TimelineContainer,
	TimelineSelects,
	TimelineTitle,
	CustomChartBtn,
	AddDataBtn,
} from './styled'
import { TimelinePageProps, TimelinePageState } from './types'

class TimelinePage extends React.PureComponent<TimelinePageProps, TimelinePageState> {
	constructor(props: TimelinePageProps) {
		super(props)
		this.state = {
			isPopUpOpened: false,
			date: { label: '1 day', value: '1DAY' },
			currency: { label: 'Bitcoin', value: 'BTC' },
			isLoaded: false,
			isError: false,
			isChartCustom: false,
			customData: [
				{
					time_open: '2024-12-20T21:00:00.000Z',
					price_open: 300,
					price_high: 400,
					price_low: 200,
					price_close: 350,
				},
			],
		}

		this.handleDateSelect = this.handleDateSelect.bind(this)
		this.handleCurrencySelect = this.handleCurrencySelect.bind(this)
		this.handleLoadedData = this.handleLoadedData.bind(this)
		this.setCustomChart = this.setCustomChart.bind(this)
		this.addHistoryData = this.addHistoryData.bind(this)
		this.handleClosePopUp = this.handleClosePopUp.bind(this)
	}

	componentDidMount(): void {
		const { data, fetchHistory } = this.props
		const { currency, date } = this.state
		observable.subscribe(this.handleLoadedData)
		if (!data[`${currency.value}-${date.value}`]) {
			fetchHistory({ currency: currency.value, date: date.value })
		} else {
			this.setState({ isLoaded: true })
		}
	}

	componentDidUpdate() {
		const { data, fetchHistory } = this.props
		const { currency, date } = this.state

		if (!data[`${currency.value}-${date.value}`]) {
			fetchHistory({ currency: currency.value, date: date.value })
		} else {
			this.setState({ isLoaded: true })
		}
	}

	componentWillUnmount() {
		observable.unsubscribe(this.handleLoadedData)
	}

	handleLoadedData({ isLoaded, isError }: { isLoaded: boolean; isError?: boolean }) {
		this.setState({ isLoaded })

		if (isError) {
			this.setState({ isError })
			return createErrorToast('Something went wrong!')
		}
		return createSuccessToast('Data is loaded!')
	}

	handleDateSelect(date: { label: string; value: string }) {
		this.setState({ date })
	}

	handleCurrencySelect(currency: { label: string; value: string }) {
		this.setState({ currency })
	}

	handleClosePopUp() {
		const { isPopUpOpened } = this.state
		this.setState({ isPopUpOpened: !isPopUpOpened })
	}

	setCustomChart() {
		const { isChartCustom } = this.state
		this.setState({ isChartCustom: !isChartCustom })
	}

	addHistoryData(data: {
		time_open: string
		price_open: number
		price_high: number
		price_low: number
		price_close: number
	}) {
		const { customData } = this.state
		this.setState({ customData: [...customData, data] })
	}

	render() {
		const { data } = this.props
		const { date, currency, isLoaded, isError, isChartCustom, customData, isPopUpOpened } =
			this.state

		const { currencyMocks, periodMocks } = TimelinePageMocks

		const historyData = isChartCustom ? customData : data[`${currency.value}-${date.value}`]

		const dateDefaultValue = periodMocks.find((item) => item.value === date.value)

		const currencyDefaultValue = currencyMocks.find((item) => item.value === currency.value)

		return (
			<TimelinePageComp>
				<ErrorBoundary
					fallback={<TimelineTitle>Smth went wrong, we&apos;re fixing this problem</TimelineTitle>}
				>
					<TimelineContainer>
						<TimelineSelects>
							<Select
								options={currencyMocks}
								value={currency}
								onSelect={this.handleCurrencySelect}
								isDisabled={isChartCustom}
							/>
							<Select
								options={periodMocks}
								value={date}
								onSelect={this.handleDateSelect}
								isDisabled={isChartCustom}
							/>
							<CustomChartBtn>
								<input onClick={this.setCustomChart} type="checkbox" />
								<span>Custom chart</span>
							</CustomChartBtn>
							{isChartCustom && (
								<AddDataBtn type="button" onClick={this.handleClosePopUp}>
									Add data
								</AddDataBtn>
							)}
						</TimelineSelects>

						{historyData && (
							<>
								<TimelineTitle $textalign="left">
									{isChartCustom ? 'Custom data' : currencyDefaultValue?.label}
								</TimelineTitle>
								<ChartItem
									optionsData={historyData}
									unit={isChartCustom ? 'year' : dateDefaultValue?.unit || 'month'}
								/>
							</>
						)}
						{!isLoaded && !isError && <LoadingSpinner />}
					</TimelineContainer>
				</ErrorBoundary>
				{isError && <TimelineTitle>Smth went wrong, we&apos;re fixing this problem</TimelineTitle>}
				{isPopUpOpened && (
					<HistoryDataPopUp handleClose={this.handleClosePopUp} handleAdd={this.addHistoryData} />
				)}
			</TimelinePageComp>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	data: state.history.data,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(
		{
			fetchHistory: fetchHistoryData,
		},
		dispatch
	)

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePage)
