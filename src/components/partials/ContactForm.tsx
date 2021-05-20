import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { FormControl, FormLabel, Input, Button, Textarea } from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

export const ContactForm: React.FC<{}> = () => {
	// show password

	const initialValues = {
		fullName: '',
		email: '',
		phone: '',
		message: '',
		address: ''
	};
	const serviceID: any = process.env.REACT_APP_SERVICE_ID;
	const templateID: any = process.env.REACT_APP_TEMPLATE_ID;
	const userID: any = process.env.REACT_APP_USER_ID;
	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					actions.setSubmitting(true);
					let template_params: any = {
						email: `${values.email}`,
						fullName: `${values.fullName}`,
						phone: `${values.phone}`,
						message: `${values.message}`,
						address: `${values.address}`
					};
					setTimeout(() => {
						emailjs.send(serviceID, templateID, template_params, userID).then(
							() => {
								toast.success('Successfully sent!');
								actions.resetForm();
							},
							(err) => {
								toast.error("This didn't work.");
							}
						);
						actions.setSubmitting(false);
					}, 400);
				}}
			>
				{({ handleChange }) => (
					<Form>
						<FormControl id="fullName">
							<FormLabel>Full Name</FormLabel>
							<Field
								type="text"
								as={Input}
								name="fullName"
								placeholder="Full Name"
								onChange={handleChange}
							/>
						</FormControl>
						<FormControl id="email" mt={4}>
							<FormLabel>Email Address</FormLabel>
							<Field type="email" as={Input} name="email" placeholder="email" onChange={handleChange} />
						</FormControl>
						<FormControl id="password" mt={4}>
							<FormLabel>Phone</FormLabel>
							<Field as={Input} type="phone" name="phone" placeholder="phone" onChange={handleChange} />
						</FormControl>
						<FormControl id="password" mt={4}>
							<FormLabel>Address</FormLabel>
							<Field
								as={Input}
								type="text"
								name="address"
								placeholder="address"
								onChange={handleChange}
							/>
						</FormControl>
						<FormControl id="password" mt={4}>
							<FormLabel>Message</FormLabel>
							<Field
								as={Textarea}
								type="text"
								name="message"
								placeholder="type here..."
								onChange={handleChange}
							/>
						</FormControl>
						<Button
							type="submit"
							size="md"
							w="100%"
							border="none"
							bg="#198802"
							color="#fff"
							mt={6}
							_hover={{
								color: '#198802',
								backgroundColor: 'white'
							}}
						>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
