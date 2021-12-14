import React, { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    RadioGroup,
    Radio,
    Text
} from '@chakra-ui/react';
import userServices from '../../services/userServices';
import { useDispatch } from 'react-redux';
import SidebarWithHeader from '../../components/sidebar';

const ProfilePage = () => {
    const handleSubmit = {

    }

    return (
        <SidebarWithHeader>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Profile
                        </Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <Box>
                                <Heading fontSize={'xl'}>Email</Heading>
                                <Text></Text>
                            </Box>
                            <Box>
                                <Heading fontSize={'xl'}>Username</Heading>
                                <Text></Text>
                            </Box>
                            <Box>
                                <Heading fontSize={'xl'}>Role</Heading>
                                <Text></Text>
                            </Box>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" value="First" />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName" isRequired>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" value="Last" />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    type={'submit'}
                                    onClick={handleSubmit}
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Submit
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </SidebarWithHeader>
    )
}

export default ProfilePage
