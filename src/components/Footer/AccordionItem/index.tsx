import { useRef } from 'react'

import { AccordionLink, Button, Item, Content, Container, Title } from './styled'

interface IAccordionItem {
	title: string
	links: { name: string; link: string }[]
	isOpen: boolean
	onClick: () => void
}

function AccordionItem({ title, links, isOpen, onClick }: IAccordionItem) {
	const contentHeight = useRef<HTMLParagraphElement>(null)

	return (
		<Item>
			<Button $isOpen={isOpen} onClick={onClick}>
				<Title>{title}</Title>
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
					<path
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="m7 10l5 5l5-5"
					/>
				</svg>
			</Button>
			<Content
				ref={contentHeight}
				style={{
					height: isOpen ? contentHeight.current?.scrollHeight : '0px',
				}}
			>
				<Container>
					{links.map(({ link, name }, idx) => (
						<AccordionLink to={link} key={idx}>
							{name}
						</AccordionLink>
					))}
				</Container>
			</Content>
		</Item>
	)
}

export default AccordionItem
