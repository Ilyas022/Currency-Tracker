import { Icon } from 'components/Icon'
import { useScreenDetector } from 'src/hooks/useScreenDetector'

import { StyledIntroduction, StyledIntroductionContainer, StyledIntroductionInfo } from './styled'

function Introduction() {
	const { isDesktop } = useScreenDetector()

	return (
		<StyledIntroduction>
			<StyledIntroductionContainer>
				<StyledIntroductionInfo>
					<h1>
						<span>Modsen Currency</span>
						<span>Tracker</span>
					</h1>
					<p>Quotes for the dollar and other international currencies.</p>
				</StyledIntroductionInfo>
				{isDesktop && <Icon name="bigLogoIcon" />}
			</StyledIntroductionContainer>
		</StyledIntroduction>
	)
}

export default Introduction
