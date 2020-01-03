import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ModifyDecisionVideo() {
	const [video, setVideo] = useState(null);

	useEffect(() => {
		if (video) {
			const formData = new FormData();
			formData.append('file', video);
			formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);

			axios
				.post(
					`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/video/upload`,
					formData,
				)
				.then(res => {
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		}
	}, [video]);

	return (
		<>
			<label>Video (optional)</label>
			<input
				className='video-input'
				type='file'
				id='video-input-id'
				onChange={e => setVideo(e.target.files[0])}
			/>
		</>
	);
}
