import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getGaps, getIndents } from 'utils/themeGetters'

export const AccordionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 2)};
	padding: 0 ${(props) => getIndents(props, 5)};

	@media ${device.sm} {
		padding: 0 ${(props) => getIndents(props, 4)};
	}
`
