import {
	FETCH_PHOTOS_START,
	FETCH_PHOTOS_SUCCESS,
	FETCH_PHOTOS_FAILURE
} from '../constants';

const mockapi = `http://5a99458d5217dd0012c78947.mockapi.io/photos`;
const postsUrl = `/posts/all`;

export const requestPhotos = () => ({
	type: FETCH_PHOTOS_START
});

export const receivePhotos = (photos) => ({
	type: FETCH_PHOTOS_SUCCESS,
	payload: photos
});

export const rejectedPhotos = () => ({
	type: FETCH_PHOTOS_FAILURE
});

export const fetchPhotos = () => dispatch => {
	dispatch(requestPhotos());
	return fetch(postsUrl)
		.then(res => res.json())
		.then(data => {
			console.log('Successfully got data: ', data);
			dispatch(receivePhotos(data));
		})
		.catch(error => {
			console.error('An error occurred: ', error);
			dispatch(rejectedPhotos())
		})
}
