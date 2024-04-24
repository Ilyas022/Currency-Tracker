/* eslint-disable camelcase */

import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
	TimeScale,
} from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'
import React from 'react'
import { Chart } from 'react-chartjs-2'

import 'chartjs-adapter-date-fns'
import { config } from './config'
import { StyledChartContainer } from './styled'

ChartJS.register(CategoryScale, LinearScale, BarElement, TimeScale, Tooltip, Legend, zoomPlugin)

interface IChartItem {
	optionsData: {
		time_open: string
		price_open: number
		price_high: number
		price_low: number
		price_close: number
	}[]
	unit: 'month' | 'day' | 'year'
}

class ChartItem extends React.PureComponent<IChartItem> {
	render() {
		const { optionsData, unit } = this.props

		const { chartData, options, plugins } = config
		const chartItems = optionsData.map(
			({ price_close, price_open, price_low, price_high, time_open }) => ({
				x: Date.parse(time_open),
				o: price_open,
				h: price_high,
				l: price_low,
				c: price_close,
				s: [price_open, price_close],
			})
		)

		return (
			<StyledChartContainer>
				<Chart type="bar" plugins={plugins} data={chartData(chartItems)} options={options(unit)} />
			</StyledChartContainer>
		)
	}
}

export default ChartItem
