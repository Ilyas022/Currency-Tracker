import styled from 'styled-components'

export const StyledCurrencyList = styled.div`
	max-width: 1285px;
	width: 100%;
	padding: 0 20px;
	margin: 0 auto;
`
export const StyledListTitle = styled.p`
	width: 42%;
	padding-bottom: 25px;
	border-bottom: 2px solid #474747;
	font-weight: 300;
	font-size: 32px;
	line-height: 129%;
	color: #fff;
	margin-bottom: 50px;
`
export const StyledListContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	row-gap: 56px;

	& > div {
		flex: 0 1 42%;
	}
`
