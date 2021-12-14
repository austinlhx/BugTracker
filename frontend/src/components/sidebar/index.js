import React, { useState, useEffect } from 'react';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import {
    FiMenu,
    FiChevronDown,
    FiUsers
} from 'react-icons/fi';
import {
    MdDashboard
} from 'react-icons/md';

import {
    GrUserAdmin
} from 'react-icons/gr'

import {
    BiUserCircle
} from 'react-icons/bi'

import { GrProjects } from "react-icons/gr";
import { HiOutlineTicket } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux';
import userServices from '../../services/userServices';

let LinkItems = [
    { name: 'DashBoard', icon: MdDashboard, route: '\\dashboard' },
    { name: 'Tickets', icon: HiOutlineTicket, route: "\\tickets" },
    { name: 'Projects', icon: GrProjects, route: '\\projects' },
    { name: 'Manage Users', icon: FiUsers, route: '\\manage' }
];

export default function SidebarWithHeader({ children }) {
    // const dispatch = useDispatch();
    // const queryParams = new URLSearchParams(window.location.search);
    // const email = queryParams.get('email');
    // const [user2, setUser] = useState([]);
    // useEffect(() => userServices.findUser(email)
    //     .then(res => setUser(res[0])), []);
    // if (user2 != null) {
    //     const action = {
    //         type: 'add-user',
    //         newUser: user2
    //     };
    //     dispatch(action);
    // }
    // const user = useSelector(state => state.users)
    userServices.retrieveUser().then(res => console.log(res))

    const user = {
        userName: "Duy Tran",
        firstName: "Duy",
        lastName: "Tran",
        email: "duytv2303@gmail.com",
        role: "Admin",
        assignedProject: '',
        assignedTickets: []
    }

    if (user.role == 'Developer') {
        LinkItems = LinkItems.slice(0, 2)
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} user={user} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
}



const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Bug Tracker
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem route={link.route} key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};


const NavItem = ({ route, icon, children, ...rest }) => {
    return (
        <Link href={route} style={{ textDecoration: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, user, ...rest }) => {
    // console.log(user);
    // const user = {
    //     userName: "Duy Tran",
    //     firstName: "Duy",
    //     lastName: "Tran",
    //     email: "duytv2303@gmail.com",
    //     role: "Admin",
    //     assignedProject: '',
    //     assignedTickets: []
    // }
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                Bug Tracker
            </Text>

            <HStack spacing={{ base: '0', md: '6' }}>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={BiUserCircle}
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">{user.firstName} {user.lastName}</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        {user.role}
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};
