import React, { Fragment } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import {
	Button,
	Flex,
	Box,
	Wrap,
	WrapItem,
	useMediaQuery,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Input
} from '@chakra-ui/react';
// components
import { ContactForm } from '../partials/ContactForm';
import logo from '../../image/logo.svg';
// images
export const Header: React.FC<{}> = () => {
	const [ desktopQuery ] = useMediaQuery('(min-width: 1061px)');
	const [ hamburgerQuery ] = useMediaQuery('(min-width: 100px) and (max-width: 1061px)');
	const [ mobileContact ] = useMediaQuery('(min-width: 500px) and (max-width: 1061px)');

	const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure();
	const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
	const btnRef = React.useRef();
	const btnRef1 = React.useRef();
	return (
		<Fragment>
			<Box bg="#155A87">
				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="95%"
					h="100px"
					margin="auto"
					className="nav"
				>
					<Box>
						<div className="logo-container">
							<img src={logo} width={300} height={300} className="logo" />
						</div>
					</Box>
					{desktopQuery ? (
						<Box className="desktop-nav">
							<Wrap spacing={10}>
								<WrapItem>
									<LinkScroll
										activeClass="active"
										to="header"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
									>
										<a href="/">Home</a>
									</LinkScroll>
								</WrapItem>
								<WrapItem>
									<LinkScroll
										activeClass="active"
										to="testimonies"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
									>
										<a>Reviews</a>
									</LinkScroll>
								</WrapItem>
								<WrapItem>
									<LinkScroll
										activeClass="active"
										to="properties"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
									>
										<a>Properties</a>
									</LinkScroll>
								</WrapItem>
								<WrapItem>
									<LinkScroll
										activeClass="active"
										to="vision"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
									>
										<a>Our Vision</a>
									</LinkScroll>
								</WrapItem>
								<WrapItem>
									<LinkScroll
										activeClass="active"
										to=""
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
									>
										<a href="/location">Location</a>
									</LinkScroll>
								</WrapItem>
								<WrapItem>
									<Fragment>
										<Button
											mt={-2}
											// ref={btnRef}
											onClick={onOpen}
										>
											Contact Us
										</Button>
										<Drawer
											isOpen={isOpen}
											placement="right"
											onClose={onClose}
											// finalFocusRef={btnRef}
										>
											<DrawerOverlay>
												<DrawerContent>
													<DrawerCloseButton />
													<DrawerHeader>Free Quote</DrawerHeader>
													<DrawerBody>
														<ContactForm />
													</DrawerBody>
												</DrawerContent>
											</DrawerOverlay>
										</Drawer>
									</Fragment>
								</WrapItem>
							</Wrap>
						</Box>
					) : null}
					{hamburgerQuery ? (
						<Box className="mobile-nav" height="100%" display="flex" alignItems="center">
							{mobileContact ? (
								<Fragment>
									<Button
										mt={-2}
										mr={8}
										// ref={btnRef}
										onClick={onOpen1}
									>
										Contact Us
									</Button>
									<Drawer
										isOpen={isOpen1}
										placement="right"
										onClose={onClose1}
										// finalFocusRef={btnRef}
									>
										<DrawerOverlay>
											<DrawerContent>
												<DrawerCloseButton />
												<DrawerHeader>Free Consultation</DrawerHeader>
												<DrawerBody>
													<ContactForm />
												</DrawerBody>
											</DrawerContent>
										</DrawerOverlay>
									</Drawer>
								</Fragment>
							) : null}

							<Box
								className="hamburger"
								mt={-2}
								// ref={btnRef1}
								onClick={onOpen}
							>
								<div className="line" />
								<div className="line" />
								<div className="line" />
							</Box>
							<Drawer
								isOpen={isOpen}
								placement="right"
								onClose={onClose}
								// finalFocusRef={btnRef1}
								size="full"
							>
								<DrawerOverlay>
									<DrawerContent>
										<DrawerCloseButton />
										<DrawerHeader>Legacy Rebuild Properties</DrawerHeader>
										<DrawerBody>
											<Wrap direction="column">
												<WrapItem>
													<a href="/">Home</a>
												</WrapItem>
												<WrapItem>
													<a href="/">Reviews</a>
												</WrapItem>
												<WrapItem>
													<a href="/">Properties</a>
												</WrapItem>
												<WrapItem>
													<a href="/">Our Vision</a>
												</WrapItem>
												<WrapItem>
													<a href="/location">Location</a>
												</WrapItem>
											</Wrap>
										</DrawerBody>
									</DrawerContent>
								</DrawerOverlay>
							</Drawer>
						</Box>
					) : null}
				</Flex>
			</Box>
		</Fragment>
	);
};
