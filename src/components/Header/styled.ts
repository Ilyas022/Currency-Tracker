import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getIndents } from 'utils/themeGetters'

const maxWidth = '1306px'

export const HeaderComp = styled.header`
	margin-bottom: ${(props) => getIndents(props, 6, 4)};

	@media ${device.md} {
		margin-bottom: ${(props) => getIndents(props, 5, -2)};
	}
`

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	max-width: ${maxWidth};
	width: 100%;
	margin: 0 auto;
	// prettier-ignore
	padding: ${(props) => getIndents(props, 5, -9)} ${(props) => getIndents(props, 3)} ${(props) =>
		getIndents(props, 5, -10)};

	@media ${device.lg} {
		justify-content: space-between;
	}

	@media ${device.md} {
		padding: ${(props) => getIndents(props, 3)};
	}

	@media ${device.xs} {
		// prettier-ignore
		padding: ${(props) => getIndents(props, 1)} ${(props) => getIndents(props, 4, 4)} ${(props) =>
			getIndents(props, 1, 1)};
	}

	& > a {
		margin-right: ${(props) => getIndents(props, 10, -145)};

		@media ${device.lg} {
			margin-right: 0;
		}
	}

	& > nav {
		margin-right: ${(props) => getIndents(props, 10, -168)};

		@media ${device.lg} {
			margin-right: 0;
		}
	}
`
