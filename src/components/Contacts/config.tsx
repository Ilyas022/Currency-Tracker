import * as yup from 'yup'

import LocationIcon from 'components/Icons/LocationIcon'
import PhoneIcon from 'components/Icons/PhoneIcon'
import TimeIcon from 'components/Icons/TimeIcon'

export const config = {
	schema: yup.object({
		name: yup
			.string()
			.required('Name is required')
			.matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, 'Invalid Name')
			.min(2, 'Name must be at least 2 characters')
			.max(50, 'Name must be at most 50 characters'),
		message: yup
			.string()
			.required('Message is required')
			.min(10, 'Message must be at least 10 characters')
			.max(500, 'Message must be at most 500 characters'),
		email: yup.string().required('Email is required').email('Invalid email address'),
	}),
	contactsInfo: [
		{
			title: 'Call us',
			content: '+375(29) 123-45-67 / +375(29) 123-45-67',
			icon: <PhoneIcon />,
		},
		{
			title: 'Location',
			content: '123 Main Street, Anytown, USA',
			icon: <LocationIcon />,
		},
		{
			title: 'Business hours',
			content: 'Monday-Friday: 9:00 AM - 5:00 PM',
			icon: <TimeIcon />,
		},
	],
}
