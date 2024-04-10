import styled from 'styled-components'

const maxWidth = '1306px'

export const StyledHeaderContainer = styled.div`
	display: flex;
	align-items: center;
	max-width: ${maxWidth};
	width: 100%;
	margin: 0 auto;
	padding: 31px 20px 30px;

	& > a {
		margin-right: 255px;
	}

	& > nav {
		margin-right: 234px;
	}
`
