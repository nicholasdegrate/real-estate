import * as React from 'react';
import { Heading, Text, Box, Flex, useMediaQuery, Spacer, Wrap, WrapItem } from '@chakra-ui/react';
// import { Link } from 'react-scroll';

const Footer: React.FC<{}> = ({}) => {
	const [ Footer ] = useMediaQuery('(min-width: 100px) and (max-width: 1000px)');
	return (
		<Box bg="#155A87" width="100%" padding={10}>
			<Flex
				direction={[ 'column', 'column', 'column', 'row' ]}
				width="100%"
				maxWidth="1400px"
				height="100%"
				minHeight="250px"
				justifyContent="space-evenly"
				margin="auto"
				alignItems={Footer ? 'left' : 'center'}
			>
				<Box maxWidth="300px" mb={Footer ? 9 : 0}>
					<Heading as="h4" mb={2} size="md">
						<img src="" alt="" />Who We Are
					</Heading>
					<Text fontSize="md" fontWeight="normal" maxWidth="400px" mt={2}>
						*Due to certain Covid-19 restrictions, we reserve the right to request recent pictures, and/or
						videos of your property, instead of visiting in person to prevent having to enter your home.
					</Text>
				</Box>
				<Spacer />
				<Box mb={Footer ? 9 : 0}>
					<Wrap direction="column">
						<WrapItem>{/* <Link href="/">Home</Link> */}</WrapItem>
						<WrapItem>{/* <Link href="/">Reviews</Link> */}</WrapItem>
						<WrapItem>{/* <Link href="/">Properties</Link> */}</WrapItem>
						<WrapItem>{/* <Link href="/">Our Vision</Link> */}</WrapItem>
						<WrapItem>{/* <Link href="/">Location</Link> */}</WrapItem>
					</Wrap>
				</Box>
				<Spacer />
				<Box>
					<Wrap direction="column" alignSelf="flex-start">
						<WrapItem>
							<p>Phone: 817-480-1556</p>
						</WrapItem>
						<WrapItem>
							<p>Email: legacyrebuildproperties@gmail.com</p>
						</WrapItem>
					</Wrap>
				</Box>
			</Flex>
		</Box>
	);
};

export default Footer;
