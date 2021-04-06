import * as React from 'react';
import { Text, Box, Flex, Center } from '@chakra-ui/react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// component
// import { Property } from './Property';
// images
// import house1 from '../../image/IMG_2302.JPG';
// import house2 from '../../image/IMG_2303.JPG';
// import house3 from '../../image/IMG_2302.JPG';

export const AllProperties = () => {
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		draggable: true,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	// const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

	return (
		<Slider {...settings}>
			<Box key={1} height="400px" color="#000">
				<Flex flexDirection="column">
					<Box position="relative">
						<Box
							className="location"
							position="absolute"
							zIndex={3}
							bg="#fff"
							top={3}
							left={3}
							w="90px"
							borderRadius={5}
						>
							<Center>
								<Text fontSize="md">sold</Text>
							</Center>
						</Box>
						{/* <img src={house1} width="300px" height="250px" /> */}
					</Box>
					<Box mt={2}>
						<Flex justifyContent="space-between">
							<Box>
								<Text>Texas</Text>
							</Box>
						</Flex>
					</Box>
				</Flex>
			</Box>
			<Box key={1} height="400px" color="#000">
				<Flex flexDirection="column">
					<Box position="relative">
						<Box
							className="location"
							position="absolute"
							zIndex={3}
							bg="#fff"
							top={3}
							left={3}
							w="90px"
							borderRadius={5}
						>
							<Center>
								<Text fontSize="md">sold</Text>
							</Center>
						</Box>
						{/* <img src={house2} width="300px" height="250px" /> */}
					</Box>
					<Box mt={2}>
						<Flex justifyContent="space-between">
							<Box>
								<Text>Texas</Text>
							</Box>
						</Flex>
					</Box>
				</Flex>
			</Box>
			<Box key={1} height="400px" color="#000">
				<Flex flexDirection="column">
					<Box position="relative">
						<Box
							className="location"
							position="absolute"
							zIndex={3}
							bg="#fff"
							top={3}
							left={3}
							w="90px"
							borderRadius={5}
						>
							<Center>
								<Text fontSize="md">sold</Text>
							</Center>
						</Box>
						{/* <img src={house3} width="300px" height="250px" /> */}
					</Box>
					<Box mt={2}>
						<Flex justifyContent="space-between">
							<Box>
								<Text>Texas</Text>
							</Box>
						</Flex>
					</Box>
				</Flex>
			</Box>
			<Box key={1} height="400px" color="#000">
				<Flex flexDirection="column">
					<Box position="relative">
						<Box
							className="location"
							position="absolute"
							zIndex={3}
							bg="#fff"
							top={3}
							left={3}
							w="90px"
							borderRadius={5}
						>
							<Center>
								<Text fontSize="md">sold</Text>
							</Center>
						</Box>
						{/* <img src={house3} width="300px" height="250px" /> */}
					</Box>
					<Box mt={2}>
						<Flex justifyContent="space-between">
							<Box>
								<Text>Texas</Text>
							</Box>
						</Flex>
					</Box>
				</Flex>
			</Box>
			<Box key={1} height="400px" color="#000">
				<Flex flexDirection="column">
					<Box position="relative">
						<Box
							className="location"
							position="absolute"
							zIndex={3}
							bg="#fff"
							top={3}
							left={3}
							w="90px"
							borderRadius={5}
						>
							<Center>
								<Text fontSize="md">sold</Text>
							</Center>
						</Box>
						{/* <img src={house3} width="300px" height="250px" /> */}
					</Box>
					<Box mt={2}>
						<Flex justifyContent="space-between">
							<Box>
								<Text>Texas</Text>
							</Box>
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Slider>
	);
};
