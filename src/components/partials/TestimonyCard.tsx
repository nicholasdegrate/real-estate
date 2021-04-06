import * as React from 'react';
import { Slide } from 'pure-react-carousel';
import { Box, Heading, Text } from '@chakra-ui/react';

type TestimonyCardProps = {
	number: number;
	name: string;
	para: string;
};

export const TestimonyCard = ({ number, name, para }: TestimonyCardProps) => {
	return (
		<Slide index={number}>
			<Box mt={8}>
				<Heading as="h4" size="md">
					{name}
				</Heading>
				<Text fontSize="md" fontWeight="normal" maxWidth="400px" mt={2}>
					"{para}"
				</Text>
			</Box>
		</Slide>
	);
};
