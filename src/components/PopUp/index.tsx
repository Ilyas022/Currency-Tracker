import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import { useScrollLock } from 'hooks/useScrollLock'

import { CloseBtn, PopUpComp, PopUpBody, PopUpContainer, PopUpHeader } from './styled'
import { PopUpProps } from './types'

function PopUp({ children, title, handleClose }: PopUpProps) {
	const [lockScroll, unlockScroll] = useScrollLock()

	useEffect(() => {
		lockScroll()
		return () => unlockScroll()
	}, [])

	return createPortal(
		<PopUpComp>
			<PopUpContainer>
				<PopUpHeader>
					<p>{title}</p>
					<CloseBtn onClick={handleClose} />
				</PopUpHeader>
				<PopUpBody>{children}</PopUpBody>
			</PopUpContainer>
		</PopUpComp>,
		document.getElementById('popup-root')!
	)
}

export default PopUp
