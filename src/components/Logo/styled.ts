import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getSizes } from 'utils/themeGetters'

export const LogoComp = styled(Link)`
	display: block;
	width: ${(props) => getSizes(props, 2, -7)};
	height: ${(props) => getSizes(props, 2, -6)};

	@media ${device.sm} {
		width: ${(props) => getSizes(props, 1, -2)};
		height: ${(props) => getSizes(props, 1, -2)};
	}

	@media ${device.xs} {
		width: ${(props) => getSizes(props, 0, -12)};
		height: ${(props) => getSizes(props, 0, -12)};
	}

	& > svg {
		height: 100%;
		width: 100%;
	}
`
