import { useState } from 'react'

import { StyledToggleInput, StyledToggleLabel, StyledToggleSpan } from './styled'

export function ThemeToggler() {
	const [isToggled, setIsToggled] = useState<boolean>(false)
	const onToggle = () => {
		setIsToggled(!isToggled)
	}

	return (
		<StyledToggleLabel className="toggle-switch">
			<StyledToggleInput
				data-testid="toggler"
				type="checkbox"
				checked={isToggled}
				onChange={onToggle}
			/>
			<StyledToggleSpan className="switch" />
		</StyledToggleLabel>
	)
}
