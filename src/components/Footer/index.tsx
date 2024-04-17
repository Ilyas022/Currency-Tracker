import Logo from 'components/Logo'
import { useScreenDetector } from 'src/hooks/useScreenDetector'

import { footerLinks, mobileFooterLinks, mocks } from './config'
import {
	StyledFooter,
	StyledFooterContainer,
	StyledFooterInfo,
	StyledFooterLinks,
	StyledFooterLogo,
	StyledFooterMobileLinks,
	StyledFooterRights,
} from './styled'

function Footer() {
	const { isDesktop, isMobile } = useScreenDetector()
	const { description, rights, title } = mocks

	return (
		<StyledFooter>
			<StyledFooterContainer>
				<div>
					<StyledFooterInfo>
						<StyledFooterLogo>
							<Logo />
							<p>{title}</p>
						</StyledFooterLogo>
						{isDesktop && <p>{description}</p>}
					</StyledFooterInfo>
					{isMobile ? (
						<StyledFooterMobileLinks>{mobileFooterLinks}</StyledFooterMobileLinks>
					) : (
						<StyledFooterLinks>{footerLinks}</StyledFooterLinks>
					)}
				</div>
				<StyledFooterRights>{rights}</StyledFooterRights>
			</StyledFooterContainer>
		</StyledFooter>
	)
}

export default Footer
