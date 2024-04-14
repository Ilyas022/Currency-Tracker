import axios from 'axios'

export const axiosInstanceCurrency = axios.create({
	baseURL: 'https://api.currencyapi.com/v3',
	headers: {
		// apikey: 'cur_live_GFkmex6nGnYd94sR7jGlkDeLvyJsQpsOEG7y5PJO',
		apikey: 'cur_live_JmoRcMvFkttkvzUnNgmNLy4VVopMkpbUvIS7VRQv',
	},
})
