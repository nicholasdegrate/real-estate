import React, { Fragment } from 'react';
import {
	Heading,
	Text,
	Box,
	Flex,
	useMediaQuery,
	Button,
	Center,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Grid,
	GridItem,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Image,
	VStack
} from '@chakra-ui/react';
// react-slick
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// component
import { AllTestimonies } from '../components/partials/AllTestimonies';
import { AllProperties } from '../components/partials/AllProperties';
import { Header } from '../components/Header/Index';
import { ContactForm } from '../components/partials/ContactForm';
import Footer from '../components/Footer';

import house from '../image/house.jpg';
import apartment from '../image/livingRoom.jpg';
import man from '../image/business-man.svg';
import group from '../image/grouppicture.jpg';
import praying from '../image/praying.jpg';
import shawn from '../image/handingstuffout.jpg';
import steven from '../image/steven.jpg';
import great from '../image/10.png';
import services from '../image/IMG_20210515_170055_141.jpg';
import test from '../image/allsizesvg/300px 600px/300px 600px (4).svg';
import test1 from '../image/010.png';
import test2 from '../image/004.png';

export const Home: React.FC<{}> = (props) => {
	// contactMobile
	const [ homeContactMobile ] = useMediaQuery('(min-width: 100px) and (max-width: 700px)');
	const [ homeContactDesktop ] = useMediaQuery('(min-width: 800px)');

	const [ blogBlock ] = useMediaQuery('(min-width: 100px) and (max-width: 900px)');

	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<Fragment>
			<header id="home-header">
				<Header />
				<Box height="calc(100vh - 100px)" className="max-width" pt={10}>
					<Flex direction="column">
						<Flex
							w="100%"
							flexDirection={[ 'column', 'column', 'row', 'row' ]}
							justifyContent="space-around"
						>
							<Heading as="h1" maxWidth="600px">
								<div>
									We are here to relieve the stress of selling your home with a quick competitive cash
									offer!
								</div>
								<Flex mt="1em" fontSize=".5em" spacing="24px" fontWeight="500">
									<Box>Any condition.</Box>
									<Box m="0 .5em">Any situation.</Box>
									<Box mr=".5em">No obligation.</Box>
									<Box>No realtor fees! </Box>
								</Flex>
							</Heading>
							<Text maxWidth="350px" mt={4} />
							{homeContactMobile ? (
								<Fragment>
									<Button
										mt={4}
										maxWidth={200}
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
												<DrawerHeader>Free Consultation</DrawerHeader>
												<DrawerBody>
													<ContactForm />
												</DrawerBody>
											</DrawerContent>
										</DrawerOverlay>
									</Drawer>
								</Fragment>
							) : null}
						</Flex>
						<Box className="home-img-container">
							<Box className="home-img">
								<img src={house} />
							</Box>
							<Box w="100%" position="relative">
								{homeContactDesktop ? (
									<Box className="Home-ContactForm" boxShadow="base">
										<Heading as="h4" size="md" mb={3} fontSize="1em">
											<Center>GET YOUR COMPETITIVE CASH OFFER TODAY!</Center>
										</Heading>
										<ContactForm />
									</Box>
								) : null}
							</Box>
						</Box>
					</Flex>
				</Box>
			</header>
			<Box id="reviews-container" className="max-width" height="300px" mt={40} mb={20}>
				<Heading as="h4" size="sm" color="gray.500" textTransform="uppercase">
					<Center>Testimonies</Center>
				</Heading>
				<Heading as="h2" size="lg" mt={2} textAlign="center">
					<Center>Who Uses Legacy Rebuild Properties</Center>
				</Heading>
				<Center textAlign="center">
					<AllTestimonies />
				</Center>
			</Box>
			{/* slider */}
			<Box
				color="#000"
				height="500px"
				overflow="hidden"
				mt={10}
				w="95%"
				margin="auto"
				className="feature-home-container"
				display="none"
			>
				<Box height="50px" mb={20} borderBottom="1px solid #000" position="relative">
					<Heading
						w="20%"
						minWidth="270px"
						as="h2"
						size="lg"
						position="absolute"
						bottom="-.5em"
						left="50%"
						transform="translate(-50%, 0%)"
						zIndex={2}
						whiteSpace="nowrap"
						bg="#fff"
						className="feature-home"
					>
						<Center>Feature Homes</Center>
					</Heading>
				</Box>
				<AllProperties />
			</Box>
			<Box>
				<section className="homepage-three">
					<div className="homepage-three-top">
						<Heading as="h4" size="sm" color="gray.500" textTransform="uppercase">
							VISIONS
						</Heading>
						<Heading as="h2" size="lg" mt={2} textAlign={blogBlock ? 'center' : 'left'}>
							Our vision is to help you gain a fresh start with a no-hassle approach and offering you a
							competitive cash offer for your house.
						</Heading>
					</div>
					<div className="homepage-three-left">
						<Image src={test2} className="embed" />
					</div>
					<div className="homepage-three-right">
						<ul>
							<li>
								<Heading as="h4" mb={2} size="md">
									{' '}
									<img src="" alt="" />Who We Are
								</Heading>
								<Text fontSize="md" fontWeight="normal" maxWidth="400px" mt={2}>
									At Legacy Rebuild Properties our mission is to reach out and help as many homeowners
									as possible. Over the years, we have become experts on educating and assisting
									homeowners through the process of selling their house. With all the constant changes
									from day to day occurring in the banking industry, you need someone you can trust to
									offer open and honest advice and aid you in making the right decision at such a
									life-altering moment. The best part is our advice is 100% free to you as the
									homeowner. If you have any questions about selling your home fast, and receiving a
									competitive cash offer right away, give us a call today.
								</Text>
							</li>
							<li>
								<Heading as="h4" mb={2} size="md">
									{' '}
									<img src="" alt="" />Our Philosophy
								</Heading>
								<Text fontSize="md" fontWeight="normal" maxWidth="400px" mt={2}>
									{' '}
									We understand at times life just happens. Maybe you are experiencing a job loss, a
									divorce, expensive medical bills, tax liens, foreclosure, troubled tenants, or an
									unexpected inheritance causing financial stress. We want to help you prevent harming
									your lifestyle, credit, peace of mind, and most importantly your legacy. We can help
									you rebuild sooner than you think.
								</Text>
							</li>
							<li>
								<Heading as="h4" mb={2} size="md">
									{' '}
									<img src="" alt="" />Our Specialty
								</Heading>
								<Text fontSize="md" fontWeight="normal" maxWidth="400px" mt={2}>
									{' '}
									With over 20 years of home mortgage experience our expert advice comes in the form
									of providing options that will allow you to sell your house quickly and put some
									much needed cash in your pockets without harming your lifestyle or credit in the
									process. We are just a phone call away.
								</Text>
							</li>
						</ul>
					</div>
				</section>
				{/* end homepage three */}
			</Box>
			<Box className="solution-and-blog-wrapper">
				<Box className="solutions">
					<div>
						<Heading as="h4" size="sm" color="gray.500" textTransform="uppercase">
							Solutions
						</Heading>
						<Heading as="h2" size="lg" mt={2} textAlign="left">
							Our vision is to help you gain a fresh start with a no-hassle approach and offering you a
							competitive cash offer for your house
						</Heading>
					</div>
					<img src={man} alt="" />
				</Box>
				<Box className="blog" pt={10}>
					<Flex justifyContent="center">
						<embed src={test1} className="embed embed-width" />
					</Flex>
					<Heading as="h2" size="lg" mt={2} textAlign="left">
						<Center display="none">What's New?</Center>
					</Heading>
					<Grid
						templateColumns={blogBlock ? '1fr' : 'repeat(3, 1fr)'}
						templateRows="1fr"
						margin={4}
						justifyItems="center"
						display="none"
					>
						<Box borderRadius={5} mt={2} height="350px" width="70%" background="#fff !important" />
						<Box
							display={blogBlock ? 'none' : 'block'}
							borderRadius={5}
							mt={2}
							height="350px"
							width="70%"
							background="#fff !important"
							boxShadow="lg"
						/>
						<Box borderRadius={5} height="350px" mt={2} width="70%" background="#fff !important" />
					</Grid>
					<Box width="90%" display="flex" justifyContent="flex-end">
						<Text
							display="none"
							textAlign="right"
							width="100px"
							borderBottom="1px solid #ccc"
							pb={2}
							mb={10}
							mt={4}
						>
							Explore More
						</Text>
					</Box>
				</Box>
			</Box>
			{/* <section className="community-section">
				<Box c="#000" w="90%" m="3em">
					<Heading mb="1em" as="h3" color="#000">
						Community
					</Heading>
					<Grid m="auto" h="500px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
						<GridItem rowStart={1} rowEnd={5} rowSpan={2} colSpan={1} bg="tomato">
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
				</Box>
			</section> */}
			{/* hompage five */}
			{/* <section className="homepage-five">
				<ul>
					<li className="choose-title-container">
						<Heading as="h4" size="sm" color="gray.500" textTransform="uppercase">
							Solutions
						</Heading>
						<Heading as="h2" size="lg" mt={2} textAlign="left" mb={10}>
							Frequently Asked<br /> Questions
						</Heading>
					</li>
					<Accordion allowToggle>
						<AccordionItem border="1px solid #ccc" borderRadius={4}>
							<AccordionButton _expanded={{ bg: '#155A87', color: 'white' }}>
								<Box flex="1" textAlign="left" fontSize="14px">
									Who typically sells us their home?
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel border="none !important">
								People from all walks of life sell to us, but they all share one thing in common: They
								want to sell their house to a trusted professional, who can make them an immediate cash
								offer, and close quickly; while ensuring integrity during the entire process.
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem border="1px solid #ccc" borderRadius={4}>
							<AccordionButton _expanded={{ bg: '#155A87', color: 'white' }}>
								<Box flex="1" textAlign="left" fontSize="14px">
									Will you pay market value for my home?
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel border="none !important">
								Our company is, first and foremost, tenured real estate investors. We invest tons of
								time and upfront money to renovate homes, and we only make a profit once we sell the
								home in its updated condition (a high risk at times). Once our team has evaluated the
								condition of your home, we will then make a competitive, no-obligation cash offer based
								on the current market value of your home after a successful renovation, discounting all
								associated renovation costs!
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem border="1px solid #ccc" borderRadius={4}>
							<AccordionButton _expanded={{ bg: '#155A87', color: 'white' }}>
								<Box flex="1" textAlign="left" fontSize="14px">
									Do you charge a fee for visiting my house and making an offer?
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel border="none !important">
								*NO! We will provide you with a completely free estimate.
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem border="1px solid #ccc" borderRadius={4}>
							<AccordionButton _expanded={{ bg: '#155A87', color: 'white' }}>
								<Box flex="1" textAlign="left" fontSize="14px">
									What if I have more questions before deciding to sell -my home?
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel border="none !important">
								Please feel free to contact us and discuss any additional questions over the phone, we
								love speaking with clients and helping them feel at ease during the process of selling
								us their home. You can send us your question(s) online or call us directly:
								817-480-1556.
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</ul>
			</section> */}
			{/* end homepage five */}
			<Footer />
		</Fragment>
	);
};
