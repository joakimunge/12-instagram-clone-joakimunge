export const getToken = () => {
	const token = localStorage.getItem('access_token') || null;
	return token;
}