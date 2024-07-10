import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { createSuccessToast } from 'utils/createToast'

import { contactsInfo, schema } from './config'
import {
	ContactsBtn,
	ContactsContainer,
	ContactsForm,
	ContactsInfo,
	ContactsInfoItem,
	ContactsItemContainer,
	ContactsItemText,
	ContactsItemTitle,
	ContactsWrapper,
	ErrorMessage,
	FormItem,
	FormTitle,
	Input,
	TextArea,
} from './styled'

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
		createSuccessToast('We get your message!')
		reset()
	})

	return (
		<ContactsWrapper>
			<ContactsContainer>
				<ContactsInfo>
					{contactsInfo.map((item) => (
						<ContactsInfoItem key={item.title}>
							<ContactsItemContainer>
								{item.icon}
								<ContactsItemTitle>{item.title}</ContactsItemTitle>
							</ContactsItemContainer>
							<ContactsItemText>{item.content}</ContactsItemText>
						</ContactsInfoItem>
					))}
				</ContactsInfo>

				<ContactsForm data-testid="contacts form" onSubmit={onSubmit}>
					<FormTitle>CONTACT US</FormTitle>

					<FormItem>
						<Input
							{...register('name')}
							onBlur={() => trigger('name')}
							placeholder="Enter your name"
						/>
						<ErrorMessage>{errors.name?.message}</ErrorMessage>
					</FormItem>

					<FormItem>
						<Input
							{...register('email')}
							placeholder="Enter email"
							onBlur={() => trigger('email')}
						/>
						<ErrorMessage>{errors.email?.message}</ErrorMessage>
					</FormItem>

					<FormItem>
						<TextArea
							{...register('message')}
							onBlur={() => trigger('message')}
							placeholder="Add your message"
						/>
						<ErrorMessage>{errors.message?.message}</ErrorMessage>
					</FormItem>
					<ContactsBtn type="submit">SUBMIT</ContactsBtn>
				</ContactsForm>
			</ContactsContainer>
		</ContactsWrapper>
	)
}

export default Contacts
