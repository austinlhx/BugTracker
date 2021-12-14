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
    useDisclosure
} from '@chakra-ui/react';

const PrivacyPolicy = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Privacy Policy</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
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
