import * as React from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import { TestimonyCard } from './TestimonyCard';

export const AllTestimonies = () => {
	// const reviews = JSON.parse(result.result)
	const reviews = [ 1, 2, 3, 4 ];
	const Card = reviews.map((item, i) => {
		return <TestimonyCard key={i} number={i} name="nick" para="helo" />;
	});

	return (
		<CarouselProvider
			naturalSlideWidth={200}
			naturalSlideHeight={525}
			totalSlides={reviews.length}
			interval={5000}
			isPlaying={true}
			infinite
		>
			<Slider>{Card}</Slider>
		</CarouselProvider>
	);
};
