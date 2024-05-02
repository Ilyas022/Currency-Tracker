import { Icon } from 'components/Icon'
import { useScreenDetector } from 'src/hooks/useScreenDetector'

import { IntroComp, IntroContainer, IntroInfo } from './styled'

function Introduction() {
	const { isDesktop } = useScreenDetector()

	return (
		<IntroComp>
			<IntroContainer>
				<IntroInfo>
					<h1>
						<span>Modsen Currency</span>
						<span>Tracker</span>
					</h1>
					<p>Quotes for the dollar and other international currencies.</p>
				</IntroInfo>
				{isDesktop && <Icon name="bigLogoIcon" />}
			</IntroContainer>
		</IntroComp>
	)
}

export default Introduction
