import BigLogoIcon from 'components/Icons/BigLogoIcon'
import { useScreenDetector } from 'hooks/useScreenDetector'

import { IntroComp, IntroContainer, IntroInfo, Text, Title, TitleItem } from './styled'

function Introduction() {
	const { isDesktop } = useScreenDetector()

	return (
		<IntroComp>
			<IntroContainer>
				<IntroInfo>
					<Title>
						<TitleItem>Modsen Currency</TitleItem>
						<TitleItem>Tracker</TitleItem>
					</Title>
					<Text>Quotes for the dollar and other international currencies.</Text>
				</IntroInfo>
				{isDesktop && <BigLogoIcon />}
			</IntroContainer>
		</IntroComp>
	)
}

export default Introduction
