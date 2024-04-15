import Logo from 'components/Logo'

import { mocks } from './config'
import {
	StyledFooter,
	StyledFooterContainer,
	StyledFooterInfo,
	StyledFooterLinks,
	StyledFooterLogo,
	StyledFooterRights,
} from './styled'

const { footerInfo } = mocks
const footerLinks = Object.entries(footerInfo).map(([category, items]) => (
	<div key={category}>
		<h3>{category}</h3>
		<ul>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	</div>
))

function Footer() {
	return (
		<StyledFooter>
			<StyledFooterContainer>
				<div>
					<StyledFooterInfo>
						<StyledFooterLogo>
							<Logo />
							<p>Modsen Currency Tracker</p>
						</StyledFooterLogo>
						<p>
							Since then, the company has grown organically to. Starsup is the world&apos;s largest
							trading platform, with $12 billion worth of currency trading and 500,000 tickets sold
							daily to tens of thousands of traders worldwide.
						</p>
					</StyledFooterInfo>
					<StyledFooterLinks>{footerLinks}</StyledFooterLinks>
				</div>
				<StyledFooterRights>Startsup © 2023-2024, All Rights Reserved</StyledFooterRights>
			</StyledFooterContainer>
		</StyledFooter>
	)
}

export default Footer
