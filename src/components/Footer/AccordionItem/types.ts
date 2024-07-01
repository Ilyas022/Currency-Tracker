export interface AccordionItemProps {
	title: string
	links: { name: string; link: string }[]
	isOpen: boolean
	onClick: () => void
}
