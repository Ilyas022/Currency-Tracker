import styled from 'styled-components'

import { device } from 'constants/breakpoints'

const smallScreenEnd = '1024px'

export const FooterComp = styled.footer`
	padding-bottom: 20px;
`
export const FooterContainer = styled.div`
	width: 1270px;
	padding: 0 20px;
	max-width: 100%;
	margin: 0 auto;

	& > div {
		display: flex;
		justify-content: space-between;
		gap: 95px;
		margin-bottom: 66px;

		@media ${device.lg} {
			flex-direction: column;
		}

		@media (max-width: ${smallScreenEnd}) {
			gap: 34px;
		}

		@media ${device.sm} {
			margin-bottom: 39px;
		}
	}
`

export const FooterLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	font-weight: 600;
	font-size: 26px;
	background: linear-gradient(92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 20px;

	@media ${device.lg} {
		justify-content: center;
	}

	@media ${device.sm} {
		font-size: 20px;
		justify-content: flex-start;
		margin-left: 20px;
		gap: 14px;

		@media ${device.sm} {
			gap: 17px;
			margin-left: 24px;
		}
	}

	& > a {
		@media ${device.sm} {
			width: 34px;
			height: 36px;
		}
	}
`

export const FooterInfo = styled.div`
	flex: 0 1 40%;
	padding-top: 27px;

	@media ${device.sm} {
		padding-top: 52px;
	}

	& > p {
		font-weight: 300;
		font-size: 24px;
		line-height: 150%;

		@media ${device.lg} {
			width: 70%;
			margin: 0 auto;
			text-align: center;
		}
	}
`

export const FooterLinks = styled.div`
	flex: 1 1 auto;
	display: flex;
	justify-content: space-between;
	font-family: 'Inter', sans-serif;

	@media ${device.lg} {
		justify-content: space-evenly;
	}

	@media (max-width: ${smallScreenEnd}) {
		justify-content: space-around;
	}

	& h3 {
		font-size: 28px;
		line-height: 150%;
		letter-spacing: 1.3px;
		margin-bottom: 45px;
	}

	& ul {
		display: flex;
		flex-direction: column;
		gap: 30px;
		font-size: 24px;
		color: #898989;
	}
`

export const FooterMobileLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 0 40px;

	@media ${device.sm} {
		padding: 0 24px;
	}

	& > div {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid white;
		border-width: 1px;
		padding-bottom: 10px;
		font-size: 16px;

		& > svg {
			height: 30px;
			width: 30px;

			@media ${device.sm} {
				width: 21px;
				height: 22px;
			}
		}
	}
`

export const FooterRights = styled.p`
	font-size: 24px;
	line-height: 150%;
	color: #898989;
	text-align: center;

	@media ${device.sm} {
		font-size: 16px;
	}
`
