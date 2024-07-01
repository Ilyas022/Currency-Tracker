import styled from 'styled-components'

export const StyledWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	> main {
		flex: 1 0 auto;
	}

	> footer {
		flex: 0 0 auto;
	}
`
