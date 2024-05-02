import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { device } from 'constants/breakpoints'

export const LogoComp = styled(Link)`
	display: block;
	width: 41px;
	height: 42px;

	@media ${device.sm} {
		width: 30px;
		height: 30px;
	}

	@media ${device.xs} {
		width: 12px;
		height: 12px;
	}

	& > svg {
		height: 100%;
		width: 100%;
	}
`
