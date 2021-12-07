import React from 'react'
import {
    Flex,
    Stack,
    Button,
    Heading,
    useColorModeValue
} from '@chakra-ui/react';

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
                    <Button
                        size={'lg'}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Login using Discord
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}

export default LoginPage
