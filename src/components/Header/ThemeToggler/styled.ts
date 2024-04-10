import styled from 'styled-components'

export const StyledToggleLabel = styled.label`
	position: relative;
	display: inline-block;
	width: 50px;
	height: 25px;
	margin-top: 5px;
`
export const StyledToggleInput = styled.input`
	display: none;

	&:checked + span::before {
		transform: translateX(25px);
		background-color: ${({ theme }) => theme.colors.white};
	}
`

export const StyledToggleSpan = styled.span`
	position: absolute;
	cursor: pointer;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.colors.white};
	border-radius: 25px;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: background-color 0.2s ease;
	&::before {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		width: 25px;
		height: 25px;
		background-color: transparent;
		border: 1px solid ${({ theme }) => theme.colors.white};
		border-radius: 50%;
		transition: transform 0.3s ease;
	}
`
