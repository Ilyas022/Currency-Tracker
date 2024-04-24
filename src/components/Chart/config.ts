/* eslint-disable no-underscore-dangle */

export const config = {
	chartData(chartItems) {
		return {
			datasets: [
				{
					label: 'Weekly Sales',
					data: chartItems,
					backgroundColor: (ctx) => {
						const {
							raw: { o, c },
						} = ctx
						let color
						if (c >= o) {
							color = 'rgba(75, 192, 192, 1)'
						} else {
							color = 'rgba(255,26, 104, 1)'
						}
						return color
					},
				},
			],
		}
	},
	plugins: [
		{
			id: 'candleStick',
			beforeDatasetsDraw(chart) {
				const {
					ctx,
					data,
					scales: { y },
				} = chart
				ctx.save()
				ctx.lineWidth = 2
				ctx.strokeStyle = 'rgba(0, 0, 0, 1)'
				data.datasets[0].data.forEach((datapoint, index) => {
					ctx.strokeStyle = chart.getDatasetMeta(0).data[index].options.backgroundColor
					ctx.beginPath()
					ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y)
					ctx.lineTo(
						chart.getDatasetMeta(0).data[index].x,
						y.getPixelForValue(data.datasets[0].data[index]!.h as number)
					)
					ctx.stroke()

					ctx.beginPath()
					ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y)
					ctx.lineTo(
						chart.getDatasetMeta(0).data[index].x,
						y.getPixelForValue(data.datasets[0].data[index]!.l as number)
					)
					ctx.stroke()
				})
			},
		},
		{
			id: 'crosshairHover',
			temp: {
				xHoverCoor: undefined,
				yHoverCoor: undefined,
				hoverIndex: undefined,
			},
			beforeDatasetsDraw(chart) {
				const {
					ctx,
					data,
					chartArea: { top, right, height },
					scales: { x, y },
				} = chart
				const { xHoverCoor, yHoverCoor, hoverIndex } = this.temp

				if (xHoverCoor && yHoverCoor && hoverIndex) {
					const nearestX = x.getValueForPixel(xHoverCoor)
					ctx.save()
					ctx.beginPath()
					ctx.fillStyle = 'rgba(255,26, 104, 0.2)'
					ctx.fillRect(x.getPixelForValue(nearestX as number) - 10, top, 20, height)
					ctx.restore()

					// crosshariLabel
					ctx.save()
					ctx.fillStyle = 'orange'
					ctx.beginPath()
					ctx.fillRect(
						right,
						y.getPixelForValue(data.datasets[0].data[hoverIndex]!.c as number) - 12,
						right,
						24
					)
					ctx.font = 'bold 12px sans-serif'
					ctx.fillStyle = 'black'
					ctx.textBaseline = 'middle'
					ctx.fillText(
						`$${data.datasets[0].data[hoverIndex]!.c.toFixed(2)}`,
						right + 10,
						y.getPixelForValue(data.datasets[0].data[hoverIndex]!.c)
					)
					ctx.restore()
				}
			},
			afterEvent(chart, args) {
				if (args.inChartArea) {
					const points = chart.getElementsAtEventForMode(
						args.event.native as Event,
						'index',
						{ intersect: false },
						true
					)
					this.temp.xHoverCoor = args.event.x
					this.temp.yHoverCoor = args.event.y
					if (points.length) {
						this.temp.hoverIndex = points[0].index
						this.temp.xHoverCoor = points[0].element.x
						this.temp.yHoverCoor = points[0].element.y
					}
				} else {
					this.temp.xHoverCoor = undefined
					this.temp.yHoverCoor = undefined
					this.temp.hoverIndex = undefined
				}

				args.changed = true
			},
		},
		{
			id: 'crosshair',
			afterDatasetsDraw(chart) {
				const {
					ctx,
					tooltip,
					chartArea: { top, bottom, left, right },
					scales: { y },
				} = chart

				if (tooltip && tooltip._active && tooltip._active.length) {
					const activePoint = tooltip._active[0]

					ctx.setLineDash([3, 3])
					ctx.lineWidth = 2
					ctx.strokeStyle = 'rgba(102, 102, 102, 1)'

					ctx.beginPath()
					ctx.moveTo(activePoint.element.x, top)
					ctx.lineTo(activePoint.element.x, bottom)
					ctx.stroke()
					ctx.closePath()

					ctx.beginPath()
					ctx.moveTo(left, y.getPixelForValue(tooltip.dataPoints[0].raw.c))
					ctx.lineTo(right, y.getPixelForValue(tooltip.dataPoints[0].raw.c))
					ctx.stroke()
					ctx.closePath()

					ctx.setLineDash([])

					chart.canvas.style.cursor = 'crosshair'
				} else {
					chart.canvas.style.cursor = 'default'
				}
			},
		},
		{
			id: 'axisLines',
			afterDraw: (chart) => {
				const { ctx } = chart
				const xAxis = chart.scales.x
				const yAxis = chart.scales.y

				ctx.save()
				ctx.textBaseline = 'middle'
				ctx.font = '400 12px sans-serif'
				ctx.textAlign = 'center'
				ctx.translate(xAxis.left, yAxis.top - 7)
				ctx.fillText('Value', 0, 0)
				ctx.restore()
				ctx.textAlign = 'center'
				ctx.translate(xAxis.right - 20, yAxis.bottom - 10)
				ctx.fillText('DAY', 0, 0)
				ctx.restore()

				// Draw line with arrow

				ctx.fillStyle = 'white'
				ctx.beginPath()
				ctx.moveTo(xAxis.left, yAxis.bottom)
				ctx.lineTo(xAxis.right, yAxis.bottom)
				ctx.lineTo(xAxis.right - 5, yAxis.bottom - 2)
				ctx.moveTo(xAxis.right, yAxis.bottom)
				ctx.lineTo(xAxis.right - 5, yAxis.bottom + 2)
				ctx.strokeStyle = 'white'
				ctx.lineWidth = 1
				ctx.stroke()

				ctx.beginPath()
				ctx.moveTo(xAxis.left, yAxis.bottom)
				ctx.lineTo(xAxis.left, yAxis.top)
				ctx.lineTo(xAxis.left - 2, yAxis.top + 5)
				ctx.moveTo(xAxis.left, yAxis.top)
				ctx.lineTo(xAxis.left + 2, yAxis.top + 5)
				ctx.strokeStyle = 'white'
				ctx.lineWidth = 1
				ctx.stroke()
			},
		},
	],
	options(unit) {
		return {
			parsing: {
				xAxisKey: 'x',
				yAxisKey: 's',
			},
			layout: {
				padding: 20,
			},
			scales: {
				x: {
					type: 'time',
					time: {
						unit,
						tooltipFormat: 'MMM d, yyyy',
					},
					ticks: {
						display: false,
					},
					grid: {
						color: 'rgb(66, 66, 66)',
					},
				},
				y: {
					beginAtZero: false,
					position: 'right',
					ticks: {
						display: true,
					},
					grid: {
						color: 'rgb(66, 66, 66)',
					},
				},
			},
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					callbacks: {
						beforeBody: (ctx) => {
							const bodyArr = [
								`O: ${ctx[0].raw.o.toFixed(2)}`,
								`H: ${ctx[0].raw.h.toFixed(2)}`,
								`L: ${ctx[0].raw.l.toFixed(2)}`,
								`C: ${ctx[0].raw.c.toFixed(2)}`,
							]
							return bodyArr
						},
						label: () => {
							return ''
						},
					},
				},
			},
		}
	},
}
