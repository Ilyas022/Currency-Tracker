import { Theme } from 'src/types/interfaces'
//             0    1   2  3    4   5    6    7    8    9   10    11   12   13   14    15    16
const sizes = [24, 32, 48, 72, 94, 100, 120, 140, 255, 350, 445, 540, 600, 740, 1100, 1280, 1400]
//            0  1   2   3   4   5   6     7
const gaps = [8, 16, 20, 24, 30, 40, 120, 220]

//               0  1   2   3   4   5   6   7   8    9    10
const indents = [4, 8, 16, 20, 24, 40, 56, 80, 100, 120, 400]

//             0   1   2   3   4   5   6   7   8
const fonts = [14, 16, 20, 22, 24, 30, 38, 46, 56]

//                     0   1    2    3   4   5   6   7   8
const fontWeights = [300, 400, 500, 600]

//                   0   1   2   3   4   5      6
const lineHeights = [24, 28, 33, 40, 60, 112, 150]

const borders = [1, 2]

//                    0  1  2  3  4
const bordersRadii = [1, 2, 3, 4, 8]

export const colors = {
	primary: '#030304',
	secondary: '#002B4E',
	dark: '#2d2d2d',
	error: '#FF0000',
	btn: '#3c9e20',
	primaryBgGradient: 'linear-gradient(225deg, #121212 0%, #24794059 50%, transparent 100%)',
	secondaryBgGradient: 'linear-gradient(225deg, #2c5d2c 0%, #2c5d2c 50%, black 100%)',
	popUpBg: '#0000009e',
	textGradient: 'linear-gradient(92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%)',
	white: '#fff',
	textPrimary: '#fff',
	textSecondary: '#d9d9d9',
	textTertiary: '#a7b2c3',
	textDark: '#898989',
	icon: '#00bc4f',
	iconBg: '#00bc4f4a',
	cardBorder: '#474747',
	cardBg: '#202025',
	chartGrid: '#424242',
	selectBg: '#a0a0a0',
	selectHover: '#626262',
}
const colorsLight = {
	primary: '#f5f5dc',
	secondary: '#002B4E',
	dark: '#ffe4c4',
	error: '#FF0000',
	btn: '#3c9e20',
	primaryBgGradient: '#ffebcd',
	secondaryBgGradient: '#e6e6fa',
	popUpBg: '#0000009e',
	textGradient: 'linear-gradient(92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%)',
	white: '#fff',
	textPrimary: '#000',
	textSecondary: '#5e5e5e',
	textTertiary: '#a7b2c3',
	textDark: '#898989',
	icon: '#00bc4f',
	iconBg: '#00bc4f4a',
	cardBorder: '#88dd35',
	cardBg: '#ffebcd',
	chartGrid: '#424242',
	selectBg: '#a0a0a0',
	selectHover: '#626262',
}

export const light: Theme = {
	name: 'light',
	fonts,
	fontWeights,
	colors: colorsLight,
	lineHeights,
	sizes,
	gaps,
	indents,
	borders,
	bordersRadii,
}

export const dark: Theme = {
	name: 'dark',
	fonts,
	fontWeights,
	colors,
	lineHeights,
	sizes,
	gaps,
	indents,
	borders,
	bordersRadii,
}
