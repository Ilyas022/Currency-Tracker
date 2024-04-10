import styled from 'styled-components'

const titleFontSize = '76px'
const titleLineHeight = '114px'

const subTitleFontSize = '90px'
const subTitleLineHeight = '110%'

const descriptionFontSize = '25px'
const descriptionLineHeight = '187%'

export const StyledIntroduction = styled.div`
	width: 100%;
	height: 417px;
	margin: 0 auto 65px;
	background: ${({ theme }) => theme.colors.bgGradient};
`

export const StyledIntroductionContainer = styled.div`
	display: flex;
	gap: 7px;
	max-width: 1351px;
	margin: 0 auto;
	padding-top: 34px;

	& > svg {
		margin-top: 11px;
		width: 301px;
		height: 314px;
	}
`
export const StyledIntroductionInfo = styled.div`
	flex-basis: 772px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	& > h1 {
		padding-left: 21px;
		margin-bottom: 16px;

		font-weight: ${({ theme }) => theme.fontWeights[3]};
		font-size: ${titleFontSize};
		line-height: ${titleLineHeight};
		text-align: right;
		background: ${({ theme }) => theme.colors.textGradient};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		& > span {
			display: block;
		}
		& > span:first-child {
			padding-right: 51px;
		}
		& > span:last-child {
			font-size: ${subTitleFontSize};
			padding-right: 41px;
			line-height: ${subTitleLineHeight};
		}
	}

	& > p {
		text-align: center;
		align-self: flex-end;
		max-width: 389px;
		font-weight: ${({ theme }) => theme.fontWeights[0]};
		font-size: ${descriptionFontSize};
		line-height: ${descriptionLineHeight};
		color: #d9d9d9;
	}
`
