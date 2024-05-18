import Logo from 'components/Logo'
import { useScreenDetector } from 'src/hooks/useScreenDetector'

import Accordion from './Accordion'
import { footerLinks, mocks } from './config'
import {
	FooterComp,
	FooterContainer,
	FooterInfo,
	FooterInfoText,
	FooterInner,
	FooterLinks,
	FooterLogo,
	FooterLogoText,
	FooterRights,
} from './styled'

function Footer() {
	const { isDesktop, isMobile } = useScreenDetector()
	const { description, rights, title } = mocks

	return (
		<FooterComp>
			<FooterContainer>
				<FooterInner>
					<FooterInfo>
						<FooterLogo>
							<Logo />
							<FooterLogoText>{title}</FooterLogoText>
						</FooterLogo>
						{isDesktop && <FooterInfoText>{description}</FooterInfoText>}
					</FooterInfo>
					{isMobile ? <Accordion /> : <FooterLinks>{footerLinks}</FooterLinks>}
				</FooterInner>
				<FooterRights>{rights}</FooterRights>
			</FooterContainer>
		</FooterComp>
	)
}

export default Footer
