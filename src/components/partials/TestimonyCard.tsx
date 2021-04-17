import { Slide } from 'pure-react-carousel';
import { Box, Heading, Text } from '@chakra-ui/react';

type TestimonyCardProps = {
	id: number;
	name: string;
	para: string;
};

export const TestimonyCard = ({ id, name, para }: TestimonyCardProps) => {
	return (
		<Slide index={id}>
			<Box mt={8} mr="10px" ml="10px">
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
