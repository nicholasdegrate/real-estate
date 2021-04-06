import * as React from 'react';
import {
    Heading,
    Text,
    Box,
    Grid,
    Flex,
    useMediaQuery,
    Spacer,
    Button,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
// components
import Footer from '../components/Footer';
import { Header } from '../components/Header/Index';



const handSetting = {
    width: '100%',
    height: '100%',
    maxHeight: '700px',
    maxWidth: '800px',
    position: 'absolute',
    backgroundColor: 'red',
    top: '20%',
    left: '-10em',
    transform: "rotate(25deg)",
} as const;

const heroSetting = {
    display: 'flex',
    position: 'relative',
    paddingTop: '10em',
    zIndex: '2',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'center',
} as const;


const Process: React.FC<{}> = ({ }) => {
    return (
        <React.Fragment>
            <Header />
            <Box
                h='100vh'
                position='relative'
                color='#000'
            >
                <Box
                    {...heroSetting}
                >
                    <Heading as='h4' size='sm' color='gray.300' textTransform='uppercase'>
                        Learn how we think
                    </Heading>
                    <Heading as='h2' fontSize='6vmin' mt={2} textAlign='left' >
                        This Is Our Buying Process
                    </Heading>
                    <Button
                        w='150px'
                        bg='#198802'
                        color='#fff'
                        mt={8}
                        _hover={{
                            bg: '#fff',
                            color: '#000',
                            border: '1px solid #198802',
                            outline: "none",
                        }}
                    >
                        Contact Us
                    </Button>
                </Box>
                <Box
                    {...handSetting}
                >
                    <img src='./hand.svg' />
                </Box>
            </Box>
            <Grid>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Grid>
            <Box>

            </Box>
            <Footer />
        </React.Fragment >
    );
}


export default Process