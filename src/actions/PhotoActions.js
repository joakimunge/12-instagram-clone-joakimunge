import {
	FETCH_PHOTOS_START,
	FETCH_PHOTOS_SUCCESS,
	FETCH_PHOTOS_FAILURE,
	FETCH_PHOTO_INFO_START,
	FETCH_PHOTO_INFO_SUCCESS,
	FETCH_PHOTO_INFO_FAILURE
} from '../constants';

//All Photos
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
	return fetch('/posts/all')
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

// Single photo
export const requestPhotoInfo = () => ({
	type: FETCH_PHOTO_INFO_START
});

export const receivePhotoInfo = (photo) => ({
	type: FETCH_PHOTO_INFO_SUCCESS,
	payload: photo
});

export const rejectedPhotoInfo = () => ({
	type: FETCH_PHOTO_INFO_FAILURE
});

export const fetchPhotoInfo = (id) => dispatch => {
	dispatch(requestPhotoInfo());
	return fetch('/posts/' + id)
		.then(res => res.json())
		.then(data => {
			console.log('Got photo info: ', data);
			dispatch(receivePhotoInfo(data))
		})
		.catch(error => {
			console.error('An error occurred: ', error);
			dispatch(rejectedPhotoInfo());
		})
}
