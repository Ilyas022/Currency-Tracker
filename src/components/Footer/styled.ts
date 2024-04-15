import styled from 'styled-components'

export const StyledFooter = styled.footer`
	padding-bottom: 20px;
`
export const StyledFooterContainer = styled.div`
	width: 1270px;
	padding: 0 20px;
	max-width: 100%;
	margin: 0 auto;

	& > div {
		display: flex;
		justify-content: space-between;
		gap: 95px;
		margin-bottom: 66px;
	}
`

export const StyledFooterLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	/* background: ${({ theme }) => theme.colors.textGradient}; */
	font-weight: 600;
	font-size: 26px;
	background: linear-gradient(92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 20px;
`

export const StyledFooterInfo = styled.div`
	flex: 0 1 40%;
	padding-top: 27px;

	& > p {
		font-weight: 300;
		font-size: 24px;
		line-height: 150%;
	}
`

export const StyledFooterLinks = styled.div`
	flex: 1 1 auto;
	display: flex;
	justify-content: space-between;

	font-family: 'Inter', sans-serif;

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

export const StyledFooterRights = styled.p`
	font-size: 24px;
	line-height: 150%;
	color: #898989;
	text-align: center;
`
