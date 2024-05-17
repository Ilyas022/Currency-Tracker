import { useState } from 'react'

import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { selectTheme } from 'src/store/selectors'

import { ToggleInput, ToggleLabel, ToggleSpan } from './styled'

export function ThemeToggler() {
	const { name } = useTypedSelector(selectTheme)
	const [isToggled, setIsToggled] = useState<boolean>(name !== 'dark')
	const { setTheme } = useActions()
	const onToggle = () => {
		setIsToggled(!isToggled)
		setTheme(isToggled ? 'dark' : 'light')
	}

	return (
		<ToggleLabel>
			<ToggleInput type="checkbox" checked={isToggled} onChange={onToggle} />
			<ToggleSpan />
		</ToggleLabel>
	)
}
