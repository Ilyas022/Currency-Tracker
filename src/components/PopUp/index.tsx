import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { useScrollLock } from 'hooks/useScrollLock'

import { CloseBtn, PopUpComp, PopUpBody, PopUpContainer, PopUpHeader } from './styled'
import { PopUpProps } from './types'

function PopUp({ children, title, handleClose }: PopUpProps) {
	const [lockScroll, unlockScroll] = useScrollLock()
	const ref = useRef(null)

	useEffect(() => {
		lockScroll()
		return () => unlockScroll()
	}, [])

	const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === ref.current) handleClose()
	}

	return createPortal(
		<PopUpComp onClick={handleClickOutside} ref={ref}>
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
