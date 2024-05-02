import styled from 'styled-components'

import { device } from 'constants/breakpoints'

const maxWidth = '1306px'

export const HeaderComp = styled.header`
	margin-bottom: 60px;

	@media ${device.md} {
		margin-bottom: 38px;
	}
`

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	max-width: ${maxWidth};
	width: 100%;
	margin: 0 auto;
	padding: 31px 20px 30px;

	@media ${device.lg} {
		justify-content: space-between;
	}

	@media ${device.md} {
		padding: 20px;
	}

	@media ${device.xs} {
		padding: 8px 28px 9px;
	}

	& > a {
		margin-right: 255px;

		@media ${device.lg} {
			margin-right: 0;
		}
	}

	& > nav {
		margin-right: 232px;

		@media ${device.lg} {
			margin-right: 0;
		}
	}
`
