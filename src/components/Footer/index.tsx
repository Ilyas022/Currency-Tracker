import Logo from 'components/Logo'
import { useScreenDetector } from 'src/hooks/useScreenDetector'

import Accordion from './Accordion'
import { footerLinks, mocks } from './config'
import {
	FooterComp,
	FooterContainer,
	FooterInfo,
	FooterLinks,
	FooterLogo,
	FooterRights,
} from './styled'

function Footer() {
	const { isDesktop, isMobile } = useScreenDetector()
	const { description, rights, title } = mocks

	return (
		<FooterComp>
			<FooterContainer>
				<div>
					<FooterInfo>
						<FooterLogo>
							<Logo />
							<p>{title}</p>
						</FooterLogo>
						{isDesktop && <p>{description}</p>}
					</FooterInfo>
					{isMobile ? <Accordion /> : <FooterLinks>{footerLinks}</FooterLinks>}
				</div>
				<FooterRights>{rights}</FooterRights>
			</FooterContainer>
		</FooterComp>
	)
}

export default Footer
