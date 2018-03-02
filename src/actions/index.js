import {
	FETCH_PHOTOS_START,
	FETCH_PHOTOS_SUCCESS,
	FETCH_PHOTOS_FAILURE
} from '../constants';

const url = `http://5a99458d5217dd0012c78947.mockapi.io/photos`;

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
	// 1. Start fetching photos
	dispatch(requestPhotos());
	return fetch(url)
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
