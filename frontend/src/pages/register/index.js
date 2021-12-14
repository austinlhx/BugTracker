import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
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
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const username = queryParams.get('username');
    const email = queryParams.get('email');

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [role, setRole] = useState();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleSubmit = () => {

        const newUser = {
            userName: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
            assignedProject: '',
            assignedTickets: []
        }

        userServices.createUser(newUser).then(res => navigate('/dashboard'));
        // const action = {
        //     type: 'add-user',
        //     newUser
        // };
        // dispatch(action);
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
