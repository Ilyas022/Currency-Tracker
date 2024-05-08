import styled from 'styled-components'

import { getIndents } from 'utils/themeGetters'

export const ChartContainer = styled.div`
	background-color: transparent;
	margin: 0 -${(props) => getIndents(props, 3)};
`
