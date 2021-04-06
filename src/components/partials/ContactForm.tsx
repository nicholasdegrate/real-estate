import * as React from 'react';
import { Formik, Form } from 'formik';
import { FormControl, FormLabel, FormHelperText, Input, Button, useToast } from '@chakra-ui/react';
import * as Yup from 'yup';

// initialize var
interface FormProps {
	fullName: String;
	email: string;
	password: string;
}

// validation
const RegisterSchema = Yup.object().shape({
	fullName: Yup.string().required(),
	email: Yup.string().required().email(),
	password: Yup.string().required()
});

function SuccessToast() {
	const toast = useToast();
	return toast({
		title: 'Account created.',
		description: "We've created your account for you.",
		status: 'success',
		duration: 9000,
		isClosable: true
	});
}

export const ContactForm: React.FC<{}> = () => {
	// show password

	const initialValues: FormProps = {
		fullName: '',
		email: '',
		password: ''
	};
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={RegisterSchema}
				onSubmit={(values, actions) => {
					actions.setSubmitting(true);
					setTimeout(() => {
						console.log({ values, actions });
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
						actions.resetForm();
					}, 1000);
				}}
			>
				{({ errors, touched, handleChange, handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<FormControl id="fullName">
							<FormLabel>fullName</FormLabel>
							<Input
								type="fullName"
								size="md"
								variant="filled"
								placeholder="fullName"
								onChange={handleChange}
							/>
							{/* send error */}
							{errors.fullName && touched.fullName ? (
								<FormHelperText>{errors.fullName}</FormHelperText>
							) : null}
						</FormControl>
						<FormControl id="email" mt={4}>
							<FormLabel>Email address</FormLabel>
							<Input
								type="email"
								size="md"
								variant="filled"
								placeholder="email"
								onChange={handleChange}
							/>
							{/* send error */}
							{errors.email && touched.email ? <FormHelperText>{errors.email}</FormHelperText> : null}
						</FormControl>
						<FormControl id="password" mt={4}>
							<FormLabel>Phone</FormLabel>
							<Input size="md" variant="filled" placeholder="phone" onChange={handleChange} />
							{/* send error */}
							{errors.password && touched.password ? (
								<FormHelperText>{errors.password}</FormHelperText>
							) : null}
						</FormControl>
						<Button
							type="submit"
							size="md"
							w="100%"
							border="none"
							bg="#198802"
							color="#fff"
							isLoading={isSubmitting}
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
