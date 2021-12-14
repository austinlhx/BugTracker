import React from 'react'
import {
    Flex,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    UnorderedList,
    ListItem
} from '@chakra-ui/react';

const PrivacyPolicy = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Privacy Policy</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Privacy Policy</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            When a user registers on the bug tracker through Discord,
                            we collect and store the following information:
                        </Text>
                        <UnorderedList>
                            <ListItem>Discord Username</ListItem>
                            <ListItem>Email Address</ListItem>
                            <ListItem>First and Last Name</ListItem>
                        </UnorderedList>
                        <Text>
                            Personal information is primarily used to provide login authentication and personalization.
                            All authentication is done through Oauth, and we will not ask you for your password.
                            Only the developers who are on the same project as you and the admin can see this information,
                            mainly to identify and contact you for more information. We are storing this information through
                            the MongoDB database and protecting it so that only authenticated users (that have logged in through Discord)
                            can get access to the information. Users can see their information through their profile and change their first
                            and last name.
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

const LoginPage = () => {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'sm'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                py={6}
                my={12}
                align={'center'}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Login
                </Heading>
                <Stack spacing={6}>
                    <Link href='http://localhost:4000/login'>
                        <Button
                            size={'lg'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Login using Discord
                        </Button>
                    </Link>
                    <PrivacyPolicy />
                </Stack>
            </Stack>
        </Flex>
    )
}

export default LoginPage
