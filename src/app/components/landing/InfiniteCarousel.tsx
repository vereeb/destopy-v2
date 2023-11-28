import Image from 'next/image';
import React from 'react';
import './InfiniteCarousel.css';

const InfiniteCarousel = () => {
	const images = [
		'/bg-dark-temp.png',
		'/bg-dark-temp.png',
		'/bg-dark-temp.png',
		'/bg-dark-temp.png',
		'/bg-dark-temp.png',
		'/bg-dark-temp.png',
		'/bg-dark-temp.png',
		'/bg-dark-temp.png',
		'/bg-dark-temp.png',
		'/bg-dark-temp.png'
	];
	return (
		<div className="py-8 bg-gradient-to-r from-dystopi-yellow/50 via-dystopi-yellow/80 to-dystopi-yellow/50  shadow-md w-full relative overflow-hidden">
			<div className="slide-track flex gap-[10%]">
				{images.map((imageUrl, index) => (
					<div className="slide relative" key={index}>
						<Image
							src={imageUrl}
							alt={`slide-${index}`}
							className="h-full w-250"
							fill
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default InfiniteCarousel;
