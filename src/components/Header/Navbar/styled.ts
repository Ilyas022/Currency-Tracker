import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const lineHeight = '206%'

export const StyledNavbar = styled.nav`
	display: flex;
	gap: 113px;
`

export const StyledNavlink = styled(NavLink)`
	color: #fff;
	font-weight: ${({ theme }) => theme.fontWeights[0]};
	font-size: ${({ theme }) => `${theme.fonts[2]}px`};
	line-height: ${lineHeight};
`
