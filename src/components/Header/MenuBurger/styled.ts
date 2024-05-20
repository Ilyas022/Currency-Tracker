import styled, { css } from 'styled-components'

import { device } from 'constants/breakpoints'
import { getFonts, getIndents } from 'utils/themeGetters'

export const Menu = styled.div<{ $open?: boolean }>`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	z-index: 5;
	display: none;
	width: 100%;
	align-items: stretch;
	background-color: ${({ theme }) => theme.colors.popUpBg};
	transform: translateX(100%);
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	@media ${device.sm} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30% 10%;
	}

	${(props) =>
		props.$open &&
		css`
			transform: translateX(0);
		`}

	> a {
		text-align: center;
		color: ${({ theme }) => theme.colors.white};
		font-size: ${(props) => getFonts(props, 1)};
	}
	> *:not(:last-child) {
		margin-bottom: ${(props) => getIndents(props, 1, 2)};
	}
`
