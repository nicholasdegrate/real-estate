import * as React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { TestimonyCard } from './TestimonyCard';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const AllTestimonies = () => {
	const reviews = [
		{
			id: 1,
			name: 'Jean J.',
			paragraph:
				'Shawn and Monica were so nice to deal with. If I had a form to fill I would check a 10 for all questions 10 for the best Job! You were very professional and pleasurable to work with, I wish you the best in future endeavour.'
		},
		{
			id: 1,
			name: 'Mary M.',
			paragraph:
				'I was extremely pleased with how I was treated and how high the bid was for my home. They were honest, respectful, and handled my granddaughter and I as if we were family.'
		}
	];

	const Card = reviews.map((r) => {
		return <TestimonyCard key={r.id} id={r.id} name={r.name} para={r.paragraph} />;
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
