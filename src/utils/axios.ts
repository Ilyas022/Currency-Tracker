import axios from 'axios'

export const axiosInstanceCurrency = axios.create({
	baseURL: 'https://api.currencyapi.com/v3',
	headers: {
		// apikey: 'cur_live_GFkmex6nGnYd94sR7jGlkDeLvyJsQpsOEG7y5PJO',
		// apikey: 'cur_live_JmoRcMvFkttkvzUnNgmNLy4VVopMkpbUvIS7VRQv',
		// apikey: 'cur_live_mcA3gnMJNWGqNWRxuFGbuL24lUp1A2lOQ0QWk8aP',
		apikey: 'cur_live_H2u0U1LMFWzMfiNEqG3mE1HSeS2c9jtq2O9oBWfr',
	},
})
export const axiosInstanceHistory = axios.create({
	headers: {
		// apikey: 'cur_live_GFkmex6nGnYd94sR7jGlkDeLvyJsQpsOEG7y5PJO',
		'X-CoinAPI-Key': 'F11A11C0-5106-0113-3E26-5AF296588940',
	},
})

// F11A11C0-5106-0113-3E26-5AF296588940
