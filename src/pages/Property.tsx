import React, { useState } from 'react';

import { Box, Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const createProperty: React.FC = () => {
	const [ name, setName ] = useState('');
	const [ paragraph, setParagraph ] = useState('');
	// const [ image, setImage ] = useState([ '', '' ]);
	// const [ imageName, setImageName ] = useState('');
	// const [ loading, setLoading ] = useState(false);

	const submitData = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			const body = { name, paragraph };
			await fetch('/api/properties', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			})
				.then((res) => res.json())
				.then((data) => console.log(data));
		} catch (error) {
			console.error(error);
		}
	};

	// const uploadImage = async (e) => {
	// 	const files = e.target.files;
	// 	if (files[0].size < 3000000000) {
	// 		const data = new FormData();
	// 		data.append('file', files[0]);
	// 		data.append('upload_preset', 'rentlords');
	// 		setLoading(true);
	// 		const res = await fetch('https://api.cloudinary.com/v1_1/drgfyozzd/image/upload', {
	// 			method: 'POST',
	// 			body: data
	// 		});
	// 		const file = await res.json();

	// 		setImage([ file.secure_url, image[1] ]);
	// 		setImageName(`${file.public_id}.${file.format}`);
	// 		setLoading(false);
	// 	} else {
	// 		alert('The file you have chosen is to big. Must be under __ ');
	// 	}
	// };

	return (
		<React.Fragment>
			<Box height="100vh" width="100%">
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
							<FormLabel>State</FormLabel>
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
							<FormLabel>Property Image</FormLabel>
							<label className="file">
								<input
									type="file"
									id="file"
									aria-label="File browser example"
									name="file"
									className="file-upload"
									data-cloudinary-field="image_id"
									data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
								/>

								<span className="file-custom" />
							</label>
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

export default createProperty;
