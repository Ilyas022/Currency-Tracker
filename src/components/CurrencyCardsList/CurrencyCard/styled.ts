import styled from 'styled-components'

export const StyledCurrencyCard = styled.button`
	display: flex;
	gap: 29px;
	border: 1px solid #474747;
	border-radius: 8px;
	padding: 30px 32px;
	width: 520px;
	height: 153px;
	background-color: #202025;
`

export const StyledIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	border-radius: 8px;
	background-color: green;

	& > svg {
		width: 50px;
		height: 50px;
	}
`

export const StyledCurrencyTitle = styled.p`
	font-weight: 400;
	font-size: 35px;
	line-height: 115%;
	color: #d9d9d9;
	margin-bottom: 9px;
`

export const StyledCurrencyValue = styled.p`
	display: flex;
	align-items: flex-end;
	font-weight: 300;
	font-size: 32px;
	line-height: 129%;
	color: #a7b2c3;

	& > svg {
		width: 25px;
		height: 25px;
	}
`
