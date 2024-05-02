import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { config } from './config'
import {
	ContactsBtn,
	ContactsContainer,
	ContactsForm,
	ContactsInfo,
	ContactsInfoItem,
	FormItem,
} from './styled'

const { schema, contactsInfo } = config

function Contacts() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = handleSubmit(() => {
		toast.success('🦄 We get your message', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: 'light',
		})
		reset()
	})

	return (
		<div>
			<ContactsContainer>
				<ContactsInfo>
					{contactsInfo.map((item) => (
						<ContactsInfoItem key={item.title}>
							<div>
								{item.icon}
								<p>{item.title}</p>
							</div>
							<p>{item.content}</p>
						</ContactsInfoItem>
					))}
				</ContactsInfo>

				<ContactsForm onSubmit={onSubmit}>
					<h2>CONTACT US</h2>

					<FormItem>
						<input
							{...register('name')}
							onBlur={() => trigger('name')}
							placeholder="Enter your name"
						/>
						<p>{errors.name?.message}</p>
					</FormItem>

					<FormItem>
						<input
							{...register('email')}
							placeholder="Enter email"
							onBlur={() => trigger('email')}
						/>
						<p>{errors.email?.message}</p>
					</FormItem>

					<FormItem>
						<textarea {...register('message')} onBlur={() => trigger('message')} />
						<p>{errors.message?.message}</p>
					</FormItem>
					<ContactsBtn type="submit">SUBMIT</ContactsBtn>
				</ContactsForm>
			</ContactsContainer>
		</div>
	)
}

export default Contacts
