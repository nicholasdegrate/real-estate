import React, { Fragment } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import {
	Button,
	Flex,
	Box,
	Wrap,
	WrapItem,
	useMediaQuery,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	AccordionItem,
	Accordion,
	AccordionPanel,
	AccordionIcon,
	AccordionButton,
	Heading,
	GridItem,
	Image,
	Grid
} from '@chakra-ui/react';

// components
import { ContactForm } from '../partials/ContactForm';
import logo from '../../image/logo.svg';
// images
import group from '../../image/grouppicture.jpg';
import praying from '../../image/praying.jpg';
import shawn from '../../image/handingstuffout.jpg';
import steven from '../../image/steven.jpg';
import services from '../../image/IMG_20210515_170055_141.jpg';

export const Header: React.FC<{}> = () => {
	const [ desktopQuery ] = useMediaQuery('(min-width: 1061px)');
	const [ hamburgerQuery ] = useMediaQuery('(min-width: 100px) and (max-width: 1061px)');
	const [ mobileContact ] = useMediaQuery('(min-width: 500px) and (max-width: 1061px)');

	const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();
	const { isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3 } = useDisclosure();

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
							<img src={logo} width={300} height={300} className="logo" alt="logo" />
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
										Home
									</LinkScroll>
								</WrapItem>
								<WrapItem>
									<LinkScroll
										activeClass="active"
										to="reviews-container"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
									>
										Reviews
									</LinkScroll>
								</WrapItem>
								<WrapItem display="none">
									<LinkScroll
										activeClass="active"
										to="properties"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
									>
										Properties
									</LinkScroll>
								</WrapItem>
								<WrapItem>
									<LinkScroll
										activeClass="active"
										to="homepage-three"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
									>
										Our Vision
									</LinkScroll>
								</WrapItem>
								<WrapItem>
									<LinkScroll
										activeClass="active"
										to="solution-and-blog-wrapper"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
									>
										Solution
									</LinkScroll>
								</WrapItem>
								<WrapItem>
									<Box onClick={onOpen2}>Community</Box>

									<Drawer placement="left" isOpen={isOpen2} onClose={onClose2} size="xl">
										<DrawerOverlay />
										<DrawerContent>
											<DrawerCloseButton />
											<DrawerBody bg="white">
												<Heading mb="1em" as="h3" color="#000">
													Community
												</Heading>
												<Grid
													m="auto"
													h="500px"
													templateRows="repeat(2, 1fr)"
													templateColumns="repeat(5, 1fr)"
													gap={4}
												>
													<GridItem
														rowStart={1}
														rowEnd={5}
														rowSpan={2}
														colSpan={1}
														bg="tomato"
													>
														<Image h="100%" src={shawn} alt="" />
													</GridItem>
													<GridItem colSpan={2} bg="papayawhip">
														<Image h="250px" src={praying} alt="" />
													</GridItem>
													<GridItem colSpan={2} bg="papayawhip">
														<Image h="250px" src={steven} alt="" />
													</GridItem>
													<GridItem colSpan={2}>
														<img className="group-image" src={group} alt="" />
													</GridItem>
													<GridItem colSpan={2}>
														<img className="group-image" src={services} alt="" />
													</GridItem>
												</Grid>
											</DrawerBody>
										</DrawerContent>
									</Drawer>
								</WrapItem>
								<WrapItem>
									<Box onClick={onOpen3}>FAQ</Box>
									<Drawer placement="left" isOpen={isOpen3} onClose={onClose3} size="xl">
										<DrawerOverlay />
										<DrawerContent>
											<DrawerCloseButton />
											<DrawerBody bg="white">
												<section className="homepage-five">
													<ul>
														<li className="choose-title-container">
															<Heading
																as="h4"
																size="sm"
																color="gray.500"
																textTransform="uppercase"
															>
																Solutions
															</Heading>
															<Heading as="h2" size="lg" mt={2} textAlign="left" mb={10}>
																Frequently Asked<br /> Questions
															</Heading>
														</li>
														<Accordion allowToggle>
															<AccordionItem border="1px solid #ccc" borderRadius={4}>
																<AccordionButton
																	_expanded={{ bg: '#155A87', color: 'white' }}
																>
																	<Box flex="1" textAlign="left" fontSize="14px">
																		Who typically sells us their home?
																	</Box>
																	<AccordionIcon />
																</AccordionButton>
																<AccordionPanel border="none !important">
																	People from all walks of life sell to us, but they
																	all share one thing in common: They want to sell
																	their house to a trusted professional, who can make
																	them an immediate cash offer, and close quickly;
																	while ensuring integrity during the entire process.
																</AccordionPanel>
															</AccordionItem>
															<AccordionItem border="1px solid #ccc" borderRadius={4}>
																<AccordionButton
																	_expanded={{ bg: '#155A87', color: 'white' }}
																>
																	<Box flex="1" textAlign="left" fontSize="14px">
																		Will you pay market value for my home?
																	</Box>
																	<AccordionIcon />
																</AccordionButton>
																<AccordionPanel border="none !important">
																	Our company is, first and foremost, tenured real
																	estate investors. We invest tons of time and upfront
																	money to renovate homes, and we only make a profit
																	once we sell the home in its updated condition (a
																	high risk at times). Once our team has evaluated the
																	condition of your home, we will then make a
																	competitive, no-obligation cash offer based on the
																	current market value of your home after a successful
																	renovation, discounting all associated renovation
																	costs!
																</AccordionPanel>
															</AccordionItem>
															<AccordionItem border="1px solid #ccc" borderRadius={4}>
																<AccordionButton
																	_expanded={{ bg: '#155A87', color: 'white' }}
																>
																	<Box flex="1" textAlign="left" fontSize="14px">
																		Do you charge a fee for visiting my house and
																		making an offer?
																	</Box>
																	<AccordionIcon />
																</AccordionButton>
																<AccordionPanel border="none !important">
																	*NO! We will provide you with a completely free
																	estimate.
																</AccordionPanel>
															</AccordionItem>
															<AccordionItem border="1px solid #ccc" borderRadius={4}>
																<AccordionButton
																	_expanded={{ bg: '#155A87', color: 'white' }}
																>
																	<Box flex="1" textAlign="left" fontSize="14px">
																		What if I have more questions before deciding to
																		sell -my home?
																	</Box>
																	<AccordionIcon />
																</AccordionButton>
																<AccordionPanel border="none !important">
																	Please feel free to contact us and discuss any
																	additional questions over the phone, we love
																	speaking with clients and helping them feel at ease
																	during the process of selling us their home. You can
																	send us your question(s) online or call us directly:
																	817-480-1556.
																</AccordionPanel>
															</AccordionItem>
														</Accordion>
													</ul>
												</section>
											</DrawerBody>
										</DrawerContent>
									</Drawer>
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
