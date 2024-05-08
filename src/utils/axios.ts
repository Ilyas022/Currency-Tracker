import axios from 'axios'

export const axiosInstanceCurrency = axios.create({
	baseURL: process.env.CURRENCY_API_URL,
	headers: {
		apikey: process.env.CURRENCY_API_KEY,
	},
})
export const axiosInstanceHistory = axios.create({
	baseURL: process.env.COINAPI_URL,
	headers: {
		'X-CoinAPI-Key': process.env.COINAPI_KEY,
	},
})
