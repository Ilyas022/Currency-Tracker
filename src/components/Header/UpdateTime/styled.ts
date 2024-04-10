import styled from 'styled-components'

const fontSize = '33px'
const lineHeight = '125%'
const color = 'd9d9d9'
const iconBgColor = '#00bc4f4a'
const iconColor = '#00bc4f'

export const StyledUpdateTime = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	font-weight: ${({ theme }) => theme.fontWeights[0]};
	font-size: ${fontSize};
	line-height: ${lineHeight};
	color: #${color};

	& > span {
		position: relative;
		display: inline-block;
		width: 33px;
		height: 33px;
		border-radius: 50%;
		background-color: ${iconBgColor};

		transform: translate(-16px, -3px);

		&:before {
			content: '';
			height: 16px;
			width: 16px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			background-color: ${iconColor};
		}
	}
`
