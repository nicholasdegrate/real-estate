import * as React from 'react';
import { Heading, Text, Box, Flex, useMediaQuery, Spacer, Button, HStack } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

import map from '../image/map.png';
import house from '../image/house.jpg';
// components
import Footer from '../components/Footer';
import { Header } from '../components/Header/Index';

export const Location: React.FC<{}> = ({}) => {
	const [ flexMarginAuto ] = useMediaQuery('min-width(100px) and max-width(700px)');
	const [ ImageSizing ] = useMediaQuery('min-width(100px) and max-width(700px)');

	return (
		<React.Fragment>
			<Header />
			<Box color="#000" w="90%" h="100%" margin="10em auto">
				<Box>
					<Heading as="h4" size="sm" color="gray.500" textTransform="uppercase">
						LOCATIONS
					</Heading>
					<Heading as="h2" size="lg" mt={2} mb="5em" textAlign="left">
						Hassle House? <br />
						We’re Here For You.
					</Heading>
				</Box>
				<Flex className="location" direction={[ 'column', 'column', 'column', 'row' ]}>
					<Box className="location-box">
						<img src={house} width={350} height={300} />
						<Flex mt={5} direction="column">
							<Box>
								<Flex mb={4}>
									<Heading as="h3" size="md" textTransform="capitalize">
										Texas
									</Heading>
								</Flex>
							</Box>
							<Box>
								<Text fontSize="sm" fontWeight="normal" maxWidth="400px" mt={2}>
									We buy houses throughout the Abilene area including Eastland, Fisher, Haskell,
									Jones, Knox, Mitchell, Nolan, Runnels, Scurry, Shackelford, Stephens, Stonewall, and
									Taylor boroughs and the…
								</Text>
							</Box>
							<Box mt={10} display="flex" flexDirection="column">
								<HStack>
									<PhoneIcon mr={5} />
									<p>(732) 927 9456</p>
								</HStack>
								<HStack mt={3}>
									<EmailIcon mr={5} />
									<p>nicholasdegrate@gmail.com</p>
								</HStack>
							</Box>
						</Flex>
					</Box>
					<Spacer />
					<Box className="location-box" mt={flexMarginAuto ? '5em' : '0'}>
						<img src={house} width={350} height={300} />
						<Flex mt={5} direction="column">
							<Box>
								<Flex mb={4}>
									<Heading as="h3" size="md" textTransform="capitalize">
										Georiga
									</Heading>
								</Flex>
							</Box>
							<Box>
								<Text fontSize="sm" fontWeight="normal" maxWidth="400px" mt={2}>
									We buy houses throughout the Abilene area including Eastland, Fisher, Haskell,
									Jones, Knox, Mitchell, Nolan, Runnels, Scurry, Shackelford, Stephens, Stonewall, and
									Taylor boroughs and the…
								</Text>
							</Box>
							<Box mt={10} display="flex" flexDirection="column">
								<HStack>
									<PhoneIcon mr={5} />
									<p>(732) 927 9456</p>
								</HStack>
								<HStack mt={3}>
									<EmailIcon mr={5} />
									<p>nicholasdegrate@gmail.com</p>
								</HStack>
							</Box>
						</Flex>
					</Box>
					<Spacer />
					<Box className="location-box" mt={flexMarginAuto ? '5em' : '0'}>
						<img src={house} width={350} height={300} />
						<Flex mt={5} direction="column">
							<Box>
								<Flex mb={4}>
									<Heading as="h3" size="md" textTransform="capitalize">
										Florida
									</Heading>
								</Flex>
							</Box>
							<Box>
								<Text fontSize="sm" fontWeight="normal" maxWidth="400px" mt={2}>
									We buy houses throughout the Abilene area including Eastland, Fisher, Haskell,
									Jones, Knox, Mitchell, Nolan, Runnels, Scurry, Shackelford, Stephens, Stonewall, and
									Taylor boroughs and the…
								</Text>
							</Box>
							<Box mt={10} display="flex" flexDirection="column">
								<HStack>
									<PhoneIcon mr={5} />
									<p>(732) 927 9456</p>
								</HStack>
								<HStack mt={3}>
									<EmailIcon mr={5} />
									<p>nicholasdegrate@gmail.com</p>
								</HStack>
							</Box>
						</Flex>
					</Box>
				</Flex>
				<Flex
					margin="10em 0"
					direction={[ 'column', 'column', 'column', 'row' ]}
					alignItems="center"
					justify="space-evenly"
				>
					<Box bg="red " maxWidth="600px">
						<img src={map} />
					</Box>
					<Box>
						<Heading as="h2" size="lg" textAlign="left">
							Hassle House? <br />
							We’re Here For You.
						</Heading>
						<Text fontSize="sm" fontWeight="normal" maxWidth="400px" mt={2}>
							We buy houses throughout the Abilene area including Eastland, Fisher, Haskell, Jones, Knox,
							Mitchell, Nolan, Runnels, Scurry, Shackelford, Stephens, Stonewall, and Taylor boroughs and
							the…
						</Text>
						<Button
							mt={8}
							bg="#198802"
							color="#fff"
							_hover={{
								bg: '#fff',
								color: '#000',
								border: '1px solid #198802',
								outline: 'none'
							}}
						>
							Contact Us
						</Button>
					</Box>
				</Flex>
			</Box>
			<Footer />
		</React.Fragment>
	);
};
