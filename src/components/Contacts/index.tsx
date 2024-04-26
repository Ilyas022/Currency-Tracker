import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Icon } from 'components/Icon'

import { config } from './config'
import {
	StyledBtn,
	StyledContactsContainer,
	StyledContactsForm,
	StyledContactsInfo,
	StyledContactsInfoItem,
	StyledFormItem,
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
			<StyledContactsContainer>
				<StyledContactsInfo>
					{contactsInfo.map((item) => (
						<StyledContactsInfoItem key={item.title}>
							<div>
								<Icon name={item.icon} />
								<p>{item.title}</p>
							</div>
							<p>{item.content}</p>
						</StyledContactsInfoItem>
					))}
				</StyledContactsInfo>

				<StyledContactsForm onSubmit={onSubmit}>
					<h2>CONTACT US</h2>

					<StyledFormItem>
						<input
							{...register('name')}
							onBlur={() => trigger('name')}
							placeholder="Enter your name"
						/>
						<p>{errors.name?.message}</p>
					</StyledFormItem>

					<StyledFormItem>
						<input
							{...register('email')}
							placeholder="Enter email"
							onBlur={() => trigger('email')}
						/>
						<p>{errors.email?.message}</p>
					</StyledFormItem>

					<StyledFormItem>
						<textarea {...register('message')} onBlur={() => trigger('message')} />
						<p>{errors.message?.message}</p>
					</StyledFormItem>
					<StyledBtn type="submit">SUBMIT</StyledBtn>
				</StyledContactsForm>
			</StyledContactsContainer>
		</div>
	)
}

export default Contacts
