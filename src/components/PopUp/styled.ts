import styled from 'styled-components'

export const StyledPopUp = styled.div`
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: #0000009e;
`

export const StyledPopUpContainer = styled.div`
	position: relative;
	width: 50%;
	padding: 0 20px;
	background-color: gray;
	border-radius: 8px;
`

export const StyledPopUpHeader = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid black;

	& > p {
		font-size: 28px;
		line-height: 120%;
		text-align: center;
	}
`

export const StyledPopUpBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	font-size: 20px;
	line-height: 120%;
	padding: 20px 0;
`

export const StyledExchangeItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 5px;
	border-bottom: 1px dashed #000;
`

export const StyledCloseBtn = styled.button`
	position: absolute;
	right: 20px;
	top: 20px;
	width: 32px;
	height: 32px;
	opacity: 0.5;
	transition: opacity 0.3s ease 0s;

	&:hover {
		opacity: 1;
	}

	&:before,
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		height: 100%;
		width: 2px;
		background-color: #333;
	}
	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
`
