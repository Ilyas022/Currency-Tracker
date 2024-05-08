export const mocks = {
	footerInfo: {
		General: ['Market', 'Service'],
		Product: ['Sparks', 'Snaps'],
		Community: ['Ideas', 'Streams'],
	},
	title: 'Modsen Currency Tracker',
	description:
		'Since then, the company has grown organically to. Starsup is the world&apos;s largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.',
	rights: 'Startsup © 2023-2024, All Rights Reserved',
}

export const footerLinks = Object.entries(mocks.footerInfo).map(([category, items]) => (
	<div key={category}>
		<h3>{category}</h3>
		<ul>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	</div>
))

export const mobileFooterLinks = Object.entries(mocks.footerInfo).map(([category]) => (
	<div key={category}>
		<h3>{category}</h3>
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
	</div>
))
