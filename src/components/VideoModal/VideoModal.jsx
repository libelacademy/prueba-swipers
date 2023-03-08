import React, { useEffect, useState } from 'react';
import './VideoModal.css';

import { IoClose } from 'react-icons/io5';
import ReactPlayer from 'react-player/youtube';

const VideoModal = ({ modal, url, handlerClose }) => {
	const [visibility, setVisibility] = useState('hidden');
	const [container, setContainer] = useState('video-closed');

	useEffect(() => {
		if (modal) {
			setVisibility('visible');
			setTimeout(() => {
				setContainer('');
			}, 100);
		}
	}, [modal]);

	const handleCloseModal = (event) => {
		if (event.target.className === 'Video') {
			setContainer('video-closed');
			handlerClose();
			setVisibility('hidden');
			// setTimeout(() => {
			// 	handlerClose();
			// 	setVisibility('hidden');
			// }, 200);
		}
	};

	return (
		<div
			className='Video'
			style={{ visibility: `${visibility}` }}
			onClick={handleCloseModal}
		>
			<div className={`video-content ${container}`}>
				<button
					className='video-closer'
					onClick={() => {
						setContainer('video-closed');
						handlerClose();
						setVisibility('hidden');
						// setTimeout(() => {
						// 	handlerClose();
						// 	setVisibility('hidden');
						// }, 200);
					}}
				>
					<IoClose />
				</button>
				<div className={`video-container ${container}`}>
					{modal ? (
						<ReactPlayer
							style={{ borderRadius: '20' }}
							className='react-player'
							url={url}
							playing={true}
							width='100%'
							height='100%'
							controls={true}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default VideoModal;
