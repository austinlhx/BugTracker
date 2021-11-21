import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Radio,
    RadioGroup
} from '@chakra-ui/react';
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter()
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
                <RadioGroup>
                    <Stack direction="row">
                        <Radio value="dev">Developer</Radio>
                        <Radio value="admin">Admin</Radio>
                    </Stack>
                </RadioGroup>
                <Stack spacing={6}>
                    <Button
                        size={'lg'}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={() => router.push('/login')}>
                        Login using Discord
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}