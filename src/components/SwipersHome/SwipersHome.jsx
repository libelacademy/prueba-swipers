import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
// import ModalVideo from 'react-modal-video';
import VideoModal from '../VideoModal/VideoModal';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwipersHome.css';
import 'react-modal-video/scss/modal-video.scss';

import {
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight,
	MdPlayArrow,
	MdArrowDownward,
} from 'react-icons/md';

import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpeg';

function SwipersHome() {
	const [swiper, setSwiper] = useState();
	const [openModal, setOpenModal] = useState(false);

	const handlerClose = () => {
		setOpenModal(false);
	};

	const pagination = {
		clickable: false,
		renderBullet: function (index, className) {
			console.log(className);
			return '<div class="' + className + '"> </div>';
		},
	};

	return (
		<>
			<div className='swiper1'>
				{/* Botones de flecha */}
				<div className='arrow-buttons-container'>
					<div className='arrow-button' onClick={() => swiper.slidePrev()}>
						<MdKeyboardArrowLeft />
					</div>
					<div className='arrow-button' onClick={() => swiper.slideNext()}>
						<MdKeyboardArrowRight />
					</div>
				</div>
				{/* Slider */}
				<Swiper
					autoplay={{
						delay: 5000,
						// disableOnInteraction: false,
					}}
					slidesPerView={1}
					centeredSlides={true}
					spaceBetween={0}
					onSwiper={(swiper) => setSwiper(swiper)}
					loop={true}
					pagination={pagination}
					modules={[Autoplay, Pagination]}
					breakpoints={{
						1440: {
							slidesPerView: 'auto',
							spaceBetween: 20,
						},
					}}
				>
					<SwiperSlide>
						<div className='container-slide-1'>
							<h1>DISFRUTA, CREA Y APRENDE 3D</h1>
							<p>
								Bringing you the best unboxing videos of the latest technology,
								games, and toys!
							</p>
							<div className='container-slide-1-buttons'>
								<button>Ver ahora</button>
								<div className='play-button' onClick={() => setOpenModal(true)}>
									<MdPlayArrow />
								</div>
							</div>
						</div>
						<img src={img1} alt='1' />
					</SwiperSlide>

					<SwiperSlide>
						<img src={img2} alt='1' />
					</SwiperSlide>

					<SwiperSlide>
						<img src={img3} alt='1' />
					</SwiperSlide>

					<SwiperSlide>
						<img src={img4} alt='1' />
					</SwiperSlide>
				</Swiper>
			</div>

			<div className='arrow-down-button'>
				<MdArrowDownward />
			</div>
			{/* Modal de vídeo */}
			<VideoModal
				modal={openModal}
				url={
					'https://www.youtube.com/watch?v=https://www.youtube.com/watch?v=FRB0vkEUTZg&t=2s'
				}
				handlerClose={handlerClose}
			/>
		</>
	);
}

export default SwipersHome;
