import LittleLogoIcon from 'components/Icons/LittleLogoIcon'
import { HOME_PAGE_ROUTE } from 'constants/routes'

import { LogoComp } from './styled'

function Logo() {
	return (
		<LogoComp to={HOME_PAGE_ROUTE}>
			<LittleLogoIcon />
		</LogoComp>
	)
}

export default Logo
