import { ToastPosition, toast } from 'react-toastify'

const toastConfig = {
	position: 'bottom-right' as ToastPosition,
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: false,
	progress: undefined,
	theme: 'light',
}

export const createSuccessToast = (message: string) => {
	return toast.success(`🦄 ${message}`, toastConfig)
}
export const createErrorToast = (message: string) => {
	return toast.error(`🦄 ${message}`, toastConfig)
}
