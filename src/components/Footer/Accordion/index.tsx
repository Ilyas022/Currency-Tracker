import { useState } from 'react'

import AccordionItem from 'components/Footer/AccordionItem'

import { AccordionContainer } from './styled'
import { mocks } from '../config'

const data = Object.entries(mocks.footerInfo)

function Accordion() {
	const [activeIndex, setActiveIndex] = useState<null | number>(null)

	const handleItemClick = (idx: number) => {
		setActiveIndex((prevIndex) => (prevIndex === idx ? null : idx))
	}

	return (
		<AccordionContainer>
			{data.map(([category, links], idx) => (
				<AccordionItem
					key={idx}
					title={category}
					links={links}
					isOpen={activeIndex === idx}
					onClick={() => handleItemClick(idx)}
				/>
			))}
		</AccordionContainer>
	)
}

export default Accordion
