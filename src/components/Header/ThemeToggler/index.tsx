import { useState } from 'react'

import { ToggleInput, ToggleLabel, ToggleSpan } from './styled'

export function ThemeToggler() {
	const [isToggled, setIsToggled] = useState<boolean>(false)
	const onToggle = () => {
		setIsToggled(!isToggled)
	}

	return (
		<ToggleLabel className="toggle-switch">
			<ToggleInput data-testid="toggler" type="checkbox" checked={isToggled} onChange={onToggle} />
			<ToggleSpan className="switch" />
		</ToggleLabel>
	)
}
