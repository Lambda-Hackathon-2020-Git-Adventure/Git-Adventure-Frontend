import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ModifyDecisionImage() {
	const [picture, setPicture] = useState(null);

	useEffect(() => {
		if (picture) {
			const formData = new FormData();
			formData.append('file', picture);
			formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);

			axios
				.post(
					`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
					formData,
				)
				.then(res => {
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		}
	});

	return (
		<>
			<label>Image (optional)</label>
			<input
				className='image-input'
				type='file'
				id='image-input-id'
				onChange={e => setPicture(e.target.files[0])}
			/>
		</>
	);
}
