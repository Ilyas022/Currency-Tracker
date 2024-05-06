import { Dispatch, bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import ChartItem from 'components/Chart'
import { ErrorBoundary } from 'components/ErrorBoundary'
import LoadingSpinner from 'components/LoadingSpinner'
import observable from 'components/Observable'
import Select from 'components/Select'
import { RootState } from 'store/index'
import { fetchHistory as fetchHistoryData } from 'store/slices/historySlice'

import { TimelinePageMocks, config } from './config'
import { TimelinePageComp, TimelineContainer, TimelineSelects, TimelineTitle } from './styled'
import { TimelinePageProps, TimelinePageState } from './types'

class TimelinePage extends React.PureComponent<TimelinePageProps, TimelinePageState> {
	constructor(props: TimelinePageProps) {
		super(props)
		this.state = { date: '1DAY', currency: 'BTC', isLoaded: false, isError: false }
		this.handleDateSelect = this.handleDateSelect.bind(this)
		this.handleCurrencySelect = this.handleCurrencySelect.bind(this)
		this.handleLoadedData = this.handleLoadedData.bind(this)
	}

	componentDidMount(): void {
		const { data, fetchHistory } = this.props
		const { currency, date } = this.state
		observable.subscribe(this.handleLoadedData)
		if (!data[`${currency}-${date}`]) {
			fetchHistory({ currency, date })
		}
	}

	componentDidUpdate() {
		const { data, fetchHistory } = this.props
		const { currency, date } = this.state

		if (!data[`${currency}-${date}`]) {
			fetchHistory({ currency, date })
		}
	}

	componentWillUnmount() {
		observable.unsubscribe(this.handleLoadedData)
	}

	handleLoadedData({ isLoaded, isError }: { isLoaded: boolean; isError?: boolean }) {
		const { toastConfig } = config
		this.setState({ isLoaded })

		if (isError) {
			this.setState({ isError })
			return toast.error('🦄 Something went wrong!', toastConfig)
		}
		return toast.success('🦄 Data is loaded!', toastConfig)
	}

	handleDateSelect(date: string) {
		this.setState({ date })
	}

	handleCurrencySelect(currency: string) {
		this.setState({ currency })
	}

	render() {
		const { data } = this.props
		const { date, currency, isLoaded, isError } = this.state
		const { currencyMocks, periodMocks } = TimelinePageMocks
		const historyData = data[`${currency}-${date}`]

		const dateDefaultValue = periodMocks.find((item) => item.value === date)
		const dateFilteredOptions = periodMocks.filter((item) => item.value !== date)

		const currencyDefaultValue = currencyMocks.find((item) => item.value === currency)
		const currencyFilteredOptions = currencyMocks.filter((item) => item.value !== currency)

		return (
			<TimelinePageComp>
				<ErrorBoundary
					fallback={<TimelineTitle>Smth went wrong, we&apos;re fixing this problem</TimelineTitle>}
				>
					<TimelineContainer>
						<TimelineSelects>
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
						</TimelineSelects>

						{historyData && (
							<>
								<TimelineTitle $textalign="left">{currencyDefaultValue?.label}</TimelineTitle>
								<ChartItem optionsData={historyData} unit={dateDefaultValue?.unit || 'month'} />
							</>
						)}
						{!isLoaded && !isError && <LoadingSpinner />}
					</TimelineContainer>
				</ErrorBoundary>
				{isError && <TimelineTitle>Smth went wrong, we&apos;re fixing this problem</TimelineTitle>}
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
