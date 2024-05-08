import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import {
	getColors,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
	getlineHeights,
} from 'src/utils/themeGetters'

const smallScreenEnd = '1024px'

export const ContactsContainer = styled.div`
	display: flex;
	max-width: ${(props) => getSizes(props, 15)};
	padding: ${(props) => getIndents(props, 3)};
	margin: 0 auto;
	width: 100%;

	@media ${device.md} {
		flex-direction: column-reverse;
		gap: ${(props) => getGaps(props, 5)};
	}

	& > * {
		flex-basis: 50%;
		padding: ${(props) => getIndents(props, 5)};

		@media ${device.md} {
			padding: ${(props) => getIndents(props, 3)};
		}
	}
`

export const ContactsInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 5, 10)};
	background-color: ${(props) => getColors(props).dark};
	font-size: ${(props) => getFonts(props, 1)};

	@media ${device.md} {
		gap: ${(props) => getGaps(props, 2)};
	}
`

export const ContactsInfoItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 2)};
	font-size: ${(props) => getFonts(props, 4)};

	@media (max-width: ${smallScreenEnd}) {
		font-size: ${(props) => getFonts(props, 3)};
	}
	@media ${device.md} {
		gap: ${(props) => getGaps(props, 0, 2)};
	}

	& > p {
		padding-left: ${(props) => getIndents(props, 5, -6)};
		font-size: ${(props) => getFonts(props, 2)};
		line-height: ${(props) => getlineHeights(props, 6)};

		@media (max-width: ${smallScreenEnd}) {
			font-size: ${(props) => getFonts(props, 1)};
			padding-left: ${(props) => getIndents(props, 4, 6)};
		}
	}

	& > div {
		display: flex;
		gap: ${(props) => getGaps(props, 0, 2)};
	}
`

export const ContactsForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 2)};
	background: ${(props) => getColors(props).secondaryBgGradient};

	@media ${device.md} {
		gap: ${(props) => getGaps(props, 0, 2)};
	}

	& > h2 {
		font-size: ${(props) => getFonts(props, 1, 6)};
		text-transform: uppercase;
		text-align: center;

		@media (max-width: ${smallScreenEnd}) {
			font-size: ${(props) => getFonts(props, 1, -2)};
		}

		@media ${device.md} {
			font-size: ${(props) => getFonts(props, 1)};
			margin-bottom: ${(props) => getIndents(props, 3)};
		}
	}

	& input,
	textarea {
		width: 100%;
		padding: ${(props) => getIndents(props, 1, 2)};
		font-size: ${(props) => getFonts(props, 1)};
	}

	& textarea {
		resize: none;
		height: ${(props) => getSizes(props, 7, 10)};
	}
`

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 0, 2)};
	padding-bottom: ${(props) => getIndents(props, 3)};
	position: relative;

	& > p {
		color: ${(props) => getColors(props).error};
		font-size: ${(props) => getFonts(props, 0)};
		position: absolute;
		bottom: 0px;
	}
`

export const ContactsBtn = styled.button`
	background-color: ${(props) => getColors(props).btn};
	padding: ${(props) => getIndents(props, 2, -1)};
	text-align: center;
	font-size: ${(props) => getFonts(props, 1)};
	color: ${(props) => getColors(props).white};
	border-radius: 8px;
`
