import { IconProps } from './types'

export function Icon({ name }: IconProps) {
	switch (name) {
		case 'littleLogoIcon':
			return (
				<svg
					width="40"
					height="43"
					viewBox="0 0 40 43"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.33337 4.32532V33.5018C3.33337 36.3508 5.56671 38.6506 8.33337 38.6506H36.6667"
						stroke="url(#paint0_linear_1_1045)"
						strokeWidth="4.46314"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M8.33337 30.0694L15.9834 20.8702C17.25 19.3599 19.5 19.2569 20.8667 20.6814L22.45 22.3119C23.8167 23.7192 26.0667 23.6334 27.3334 22.1231L35 12.9067"
						stroke="url(#paint1_linear_1_1045)"
						strokeWidth="4.46314"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_1_1045"
							x1="20"
							y1="4.32532"
							x2="20"
							y2="38.6506"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#2ADD50" />
							<stop offset="1" stopColor="#AFDD2A" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_1_1045"
							x1="21.6667"
							y1="12.9067"
							x2="21.6667"
							y2="30.0694"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#2ADD50" />
							<stop offset="1" stopColor="#AFDD2A" />
						</linearGradient>
					</defs>
				</svg>
			)
		case 'bigLogoIcon':
			return (
				<svg
					width="301"
					height="314"
					viewBox="0 0 301 314"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M25.6252 26.3468V247.869C25.6252 269.5 42.3433 286.961 63.0539 286.961H275.15"
						stroke="url(#paint0_linear_1_1035)"
						strokeWidth="24.6445"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M63.0539 221.807L120.32 151.963C129.802 140.496 146.645 139.714 156.875 150.529L168.728 162.908C178.958 173.594 195.801 172.942 205.283 161.475L262.674 91.5002"
						stroke="url(#paint1_linear_1_1035)"
						strokeWidth="24.6445"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_1_1035"
							x1="150.388"
							y1="26.3468"
							x2="150.388"
							y2="286.961"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#2ADD50" />
							<stop offset="1" stopColor="#AFDD2A" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_1_1035"
							x1="162.864"
							y1="91.5002"
							x2="162.864"
							y2="221.807"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#2ADD50" />
							<stop offset="1" stopColor="#AFDD2A" />
						</linearGradient>
					</defs>
				</svg>
			)
		case 'chartIcon':
			return (
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1207)">
						<path
							d="M6.25 35.4167L18.75 22.9167L27.0833 31.25L43.75 14.5834"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M29.1666 14.5834H43.75V29.1667"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1207">
							<rect width="50" height="50" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'dollarIcon':
			return (
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1143)">
						<path
							d="M34.4941 16.0715C34.0794 14.8949 33.3221 13.8693 32.3197 13.1267C31.3172 12.3842 30.1155 11.9586 28.8691 11.9048H20.5358C18.8782 11.9048 17.2885 12.5633 16.1163 13.7354C14.9442 14.9075 14.2858 16.4972 14.2858 18.1548C14.2858 19.8124 14.9442 21.4021 16.1163 22.5742C17.2885 23.7463 18.8782 24.4048 20.5358 24.4048H28.8691C30.5267 24.4048 32.1164 25.0633 33.2885 26.2354C34.4606 27.4075 35.1191 28.9972 35.1191 30.6548C35.1191 32.3124 34.4606 33.9021 33.2885 35.0742C32.1164 36.2463 30.5267 36.9048 28.8691 36.9048H20.5358C19.2894 36.851 18.0877 36.4254 17.0852 35.6828C16.0827 34.9403 15.3254 33.9147 14.9108 32.7381"
							stroke="white"
							strokeWidth="3.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M25 5.95239V12.2024M25 37.2024V43.4524"
							stroke="white"
							strokeWidth="3.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1143">
							<rect width="50" height="50" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'EURIcon':
			return (
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1166)">
						<path
							d="M35.8334 14.5834C34.0752 12.5736 31.8476 11.2142 29.4299 10.6756C27.0122 10.1369 24.512 10.443 22.2428 11.5554C19.9736 12.6679 18.0364 14.5372 16.6742 16.9289C15.3119 19.3207 14.5852 22.1284 14.5852 25C14.5852 27.8717 15.3119 30.6794 16.6742 33.0711C18.0364 35.4629 19.9736 37.3322 22.2428 38.4446C24.512 39.5571 27.0122 39.8632 29.4299 39.3245C31.8476 38.7858 34.0752 37.4264 35.8334 35.4167"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M27.0833 20.8333H10.4166M10.4166 29.1666H27.0833"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1166">
							<rect width="50" height="50" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'libraIcon':
			return (
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1154)">
						<path
							d="M35.4167 38.5416C33.7825 39.2907 32.006 39.6784 30.2083 39.6784C28.4107 39.6784 26.6342 39.2907 25 38.5416C23.2916 37.9519 21.4757 37.7396 19.6774 37.9195C17.879 38.0993 16.1411 38.667 14.5833 39.5833C15.6988 39.1972 16.6821 38.5032 17.4195 37.5814C18.1569 36.6597 18.6182 35.548 18.75 34.375V18.75C18.761 16.9248 19.3709 15.1538 20.486 13.7088C21.6011 12.2639 23.1598 11.2251 24.9225 10.7518C26.6853 10.2786 28.5547 10.3972 30.2435 11.0894C31.9324 11.7816 33.3472 13.0091 34.2708 14.5833M28.9583 27.0833H14.375"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1154">
							<rect width="50" height="50" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'BTCIcon':
			return (
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1172)">
						<path
							d="M12.5 12.5H29.1667C30.8243 12.5 32.414 13.1585 33.5861 14.3306C34.7582 15.5027 35.4167 17.0924 35.4167 18.75C35.4167 20.4076 34.7582 21.9973 33.5861 23.1694C32.414 24.3415 30.8243 25 29.1667 25C30.8243 25 32.414 25.6585 33.5861 26.8306C34.7582 28.0027 35.4167 29.5924 35.4167 31.25C35.4167 32.9076 34.7582 34.4973 33.5861 35.6694C32.414 36.8415 30.8243 37.5 29.1667 37.5H12.5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16.6666 12.5V37.5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16.6666 25H29.1666"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M18.75 6.25V12.5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M27.0834 6.25V12.5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M18.75 37.5V43.75"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M27.0834 37.5V43.75"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1172">
							<rect width="50" height="50" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'CADIcon':
			return (
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1213)">
						<path
							d="M43.75 12.5H35.4166C33.759 12.5 32.1693 13.1585 30.9972 14.3306C29.8251 15.5027 29.1666 17.0924 29.1666 18.75C29.1666 20.4076 29.8251 21.9973 30.9972 23.1694C32.1693 24.3415 33.759 25 35.4166 25H37.5C39.1576 25 40.7473 25.6585 41.9194 26.8306C43.0915 28.0027 43.75 29.5924 43.75 31.25C43.75 32.9076 43.0915 34.4973 41.9194 35.6694C40.7473 36.8415 39.1576 37.5 37.5 37.5H29.1666"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M20.8333 37.5H18.75C15.4348 37.5 12.2554 36.183 9.91117 33.8388C7.56696 31.4946 6.25 28.3152 6.25 25C6.25 21.6848 7.56696 18.5054 9.91117 16.1612C12.2554 13.817 15.4348 12.5 18.75 12.5H20.8333"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M35.4166 41.6667V37.5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M37.5 12.5V8.33331"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1213">
							<rect width="50" height="50" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'ARSIcon':
			return (
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1183)">
						<path
							d="M16.6666 39.5834V10.4167H23.9583C25.1894 10.4167 26.4085 10.6592 27.5459 11.1303C28.6834 11.6015 29.7169 12.292 30.5874 13.1626C31.458 14.0331 32.1485 15.0666 32.6197 16.204C33.0908 17.3415 33.3333 18.5605 33.3333 19.7917C33.3333 21.0228 33.0908 22.2419 32.6197 23.3793C32.1485 24.5168 31.458 25.5503 30.5874 26.4208C29.7169 27.2914 28.6834 27.9819 27.5459 28.4531C26.4085 28.9242 25.1894 29.1667 23.9583 29.1667H16.6666"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M37.5 16.6667H12.5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M37.5 22.9167H12.5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1183">
							<rect width="50" height="50" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'JPYIcon':
			return (
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1159)">
						<path
							d="M25 39.5834V25M25 25L14.5834 10.4167M25 25L35.4167 10.4167"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16.6666 35.4167H33.3333"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16.6666 27.0833H33.3333"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1159">
							<rect width="50" height="50" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'wonIcon':
			return (
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1190)">
						<path
							d="M31.25 18.75V35.4167C31.25 36.5217 31.689 37.5815 32.4704 38.3629C33.2518 39.1443 34.3116 39.5833 35.4167 39.5833C36.5217 39.5833 37.5815 39.1443 38.3629 38.3629C39.1443 37.5815 39.5833 36.5217 39.5833 35.4167"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M39.5833 18.75H10.4166"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M39.5833 10.4167H10.4166"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M18.75 18.75V27.0833C18.75 32.2917 17.3605 35.4167 14.5834 39.5833"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1190">
							<rect width="50" height="50" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'AUDIcon':
			return (
				<svg
					width="50"
					height="50"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1198)">
						<path
							d="M6.25 37.5L13.0812 13.5917C13.1747 13.2654 13.3718 12.9785 13.6428 12.7742C13.9138 12.57 14.244 12.4595 14.5833 12.4595C14.9227 12.4595 15.2528 12.57 15.5238 12.7742C15.7948 12.9785 15.992 13.2654 16.0854 13.5917L22.9167 37.5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M43.75 12.5H35.4166C33.759 12.5 32.1693 13.1585 30.9972 14.3306C29.8251 15.5027 29.1666 17.0924 29.1666 18.75C29.1666 20.4076 29.8251 21.9973 30.9972 23.1694C32.1693 24.3415 33.759 25 35.4166 25H37.5C39.1576 25 40.7473 25.6585 41.9194 26.8306C43.0915 28.0027 43.75 29.5924 43.75 31.25C43.75 32.9076 43.0915 34.4973 41.9194 35.6694C40.7473 36.8415 39.1576 37.5 37.5 37.5H29.1666"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M35.4166 41.6667V37.5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M37.5 12.5V8.33331"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9.375 29.1667H19.7917"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1198">
							<rect width="50" height="50" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'ifixIcon':
			return (
				<svg
					width="49"
					height="49"
					viewBox="0 0 49 49"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1_1149)">
						<path
							d="M29.0938 39.8125V30.625C29.0938 30.2189 28.9324 29.8294 28.6453 29.5422C28.3581 29.2551 27.9686 29.0937 27.5625 29.0937H21.4375C21.0314 29.0937 20.6419 29.2551 20.3547 29.5422C20.0676 29.8294 19.9062 30.2189 19.9062 30.625V39.8125C19.9062 40.2186 19.7449 40.6081 19.4578 40.8952C19.1706 41.1824 18.7811 41.3437 18.375 41.3437H9.1875C8.78139 41.3437 8.39191 41.1824 8.10474 40.8952C7.81758 40.6081 7.65625 40.2186 7.65625 39.8125V22.1074C7.65968 21.8955 7.70547 21.6864 7.79094 21.4925C7.87641 21.2985 7.99982 21.1236 8.15391 20.9781L23.4664 7.06287C23.7487 6.80463 24.1174 6.66141 24.5 6.66141C24.8826 6.66141 25.2513 6.80463 25.5336 7.06287L40.8461 20.9781C41.0002 21.1236 41.1236 21.2985 41.2091 21.4925C41.2945 21.6864 41.3403 21.8955 41.3438 22.1074V39.8125C41.3438 40.2186 41.1824 40.6081 40.8953 40.8952C40.6081 41.1824 40.2186 41.3437 39.8125 41.3437H30.625C30.2189 41.3437 29.8294 41.1824 29.5422 40.8952C29.2551 40.6081 29.0938 40.2186 29.0938 39.8125Z"
							stroke="white"
							strokeWidth="1.53125"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1_1149">
							<rect width="49" height="49" fill="white" />
						</clipPath>
					</defs>
				</svg>
			)
		case 'GBPIcon':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
					<path
						fill="currentColor"
						d="M375.942 160a88.042 88.042 0 0 0-176.033 3.024v76.588H136v32h63.909v120.3H136v32h240v-32H231.909v-120.3H344v-32H231.909v-76.588a56.046 56.046 0 0 1 112.091 0V168h32v-8Z"
					/>
				</svg>
			)
		case 'CNYIcon':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M11.5 20v-6.5h-5v-1h4.802L5.904 4h1.202L12 11.742L16.894 4h1.202l-5.398 8.5H17.5v1h-5V20z"
					/>
				</svg>
			)
		case 'USDIcon':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M11 4h1v2c3.29.15 4 1.7 4 3h-1c0-1.33-1.18-2-3.5-2c-.82 0-3.5.16-3.5 2.25c0 .87 0 1.86 3.62 2.75l1.61.5c2.53.93 2.77 2.07 2.77 3.25c0 1.88-1.5 3.09-4 3.25v2h-1v-2c-3.29-.15-4-1.7-4-3h1c0 1.33 1.18 2 3.5 2c.82 0 3.5-.16 3.5-2.25c0-.87 0-1.86-3.62-2.75l-1.61-.5C7.24 11.57 7 10.43 7 9.25C7 7.37 8.5 6.16 11 6z"
					/>
				</svg>
			)
		case 'phoneIcon':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
					<path
						fill="currentColor"
						d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"
					/>
				</svg>
			)
		case 'locationIcon':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
					<path
						fill="currentColor"
						d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
					/>
					<circle cx="16" cy="13" r="4" fill="none" />
				</svg>
			)
		case 'timeIcon':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
					<path
						fill="currentColor"
						d="M16 2C8.4 2 2 8.4 2 16s6.4 14 14 14s14-6.4 14-14S23.6 2 16 2m4.587 20L15 16.41V7h2v8.582l5 5.004z"
					/>
					<path fill="none" d="M20.587 22L15 16.41V7h2v8.582l5 5.005z" />
				</svg>
			)
		default:
			break
	}
}
