import React, { useState } from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const createReview: React.FC = () => {
	const [ name, setName ] = useState('');
	const [ paragraph, setParagraph ] = useState('');

	const submitData = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			const body = { name, paragraph };
			await fetch('/api/reviews', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
			// await Router.push('/');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<React.Fragment>
			<Box
				height="100vh"
				width="100%"
				// backgroundColor='red !important'
			>
				<Flex
					height="100%"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					color="#000 !important"
				>
					<form onSubmit={submitData}>
						<h1>Add Review</h1>
						<FormControl id="password" mt={4}>
							<FormLabel>Name</FormLabel>
							<Input
								autoFocus
								onChange={(e) => setName(e.target.value)}
								placeholder="Title"
								type="text"
								value={name}
							/>
							{/* send error */}
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Review</FormLabel>
							<Textarea
								placeholder="Here is a sample placeholder"
								cols={50}
								onChange={(e) => setParagraph(e.target.value)}
								rows={8}
								value={paragraph}
							/>
						</FormControl>
						<Input
							disabled={!paragraph || !name}
							type="submit"
							value="Create"
							size="md"
							w="100%"
							bg="#2f5ab8"
							color="#fff"
							mt={6}
						/>
					</form>
				</Flex>
			</Box>
		</React.Fragment>
	);
};

export default createReview;
