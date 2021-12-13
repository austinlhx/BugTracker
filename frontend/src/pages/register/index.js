import React, { useState, useEffect } from 'react'
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
    Radio
} from '@chakra-ui/react';
import userServices from '../../services/userServices';

const RegisterPage = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const username = queryParams.get('username');
    const email = queryParams.get('email');

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [role, setRole] = useState();
    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
            setRole(target.value);
        }
    };

    const handleSubmit = () => {
        const newUser = {
            username: username,
            name: {
                first: firstName,
                last: lastName
            },
            email: email,
            role: role,
            joined_date: new Date().toLocaleDateString(),
            project: "Project 1",
            tickets: {
                priority: {
                    low: 0,
                    medium: 0,
                    high: 0
                },
                status: {
                    new: 0,
                    in_progress: 0,
                    resolved: 0
                },
                type: {
                    bug: 0,
                    feature_request: 0,
                    customer_issue: 0
                },
                id_list: []
            }
        }

        userServices.createUser(newUser).then(user => console.log(user));

    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Register
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" onInput={e => setFirstName(e.target.value)} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName" isRequired>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" onInput={e => setLastName(e.target.value)} />
                                </FormControl>
                            </Box>
                        </HStack>
                        <RadioGroup>
                            <Stack direction="row">
                                <Radio value="Developer" onChange={e => setRole(e.target.value)}>Developer</Radio>
                                <Radio value="Admin" onChange={e => setRole(e.target.value)}>Admin</Radio>
                            </Stack>
                        </RadioGroup>
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
                                Register
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default RegisterPage
